import {
  ComponentMeta,
  GridCoreCreator,
  Module,
} from '@ag-grid-community/core';
import { assert } from '@lead/std';

interface GridCoreCreatorPrototype {
  // https://github.com/ag-grid/ag-grid/blob/c583aef47e3e734694149a0645497581a5401eec/community-modules/core/src/ts/grid.ts#L261
  createAgStackComponentsList(registeredModules: Module[]): any[];
}
interface PaginationCompPrototype {
  // https://github.com/ag-grid/ag-grid/blob/6923eafce79e99cc1fcd0464e1533f60d604d2ea/community-modules/core/src/ts/pagination/paginationComp.ts#L123
  getTemplate(): string;
}
let isGridCoreCreatorPrototypeReady = false;
let isPaginationCompPrototypeReady = false;
/**
 * prototype pollution
 **/
export function addPaginationCompTemplateChild(child: HTMLElement) {
  if (isGridCoreCreatorPrototypeReady || isPaginationCompPrototypeReady) return;
  isGridCoreCreatorPrototypeReady = true;

  const ctor = GridCoreCreator.prototype as unknown as GridCoreCreatorPrototype;
  const baseCreateAgStackComponentsList = ctor.createAgStackComponentsList;
  ctor.createAgStackComponentsList = createAgStackComponentsList;
  function createAgStackComponentsList(
    this: GridCoreCreator,
    registeredModules: Module[]
  ): any[] {
    const components: ComponentMeta[] =
      baseCreateAgStackComponentsList.bind(this)(registeredModules);

    if (!isPaginationCompPrototypeReady) {
      isPaginationCompPrototypeReady = true;
      patch(components, child);
    }

    return components;
  }
}

function patch(components: ComponentMeta[], child: HTMLElement) {
  const PaginationCompMeta = components.find(
    ({ componentName }) => componentName === 'AgPagination'
  );
  // if we don't have PaginationCompMeta, we should setup AgPagination
  if (PaginationCompMeta) {
    const PaginationComp = PaginationCompMeta.componentClass;
    const ctor = PaginationComp.prototype as unknown as PaginationCompPrototype;

    assert(
      typeof ctor.getTemplate == 'function',
      `Method getTemplate removed from PaginationComp.
    Link: https://github.com/ag-grid/ag-grid/blob/6923eafce79e99cc1fcd0464e1533f60d604d2ea/community-modules/core/src/ts/pagination/paginationComp.ts#L123
    PaginationCompMeta:`,
      PaginationCompMeta
    );

    const baseGetTemplate = ctor.getTemplate;
    // no side effects
    ctor.getTemplate = function getTemplate(): string {
      const htmlTemplate = baseGetTemplate.bind(this)();
      const elementTemplate = createElementFromHTML(htmlTemplate);
      elementTemplate.insertAdjacentElement('afterbegin', child);
      return outerHTML(elementTemplate);
    };
  }
}

export function createElementFromHTML<T extends HTMLElement>(
  htmlString: string
): T {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild as T;
}

export function outerHTML(html: HTMLElement): string {
  const div = document.createElement('div');
  div.appendChild(html);

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.innerHTML;
}
