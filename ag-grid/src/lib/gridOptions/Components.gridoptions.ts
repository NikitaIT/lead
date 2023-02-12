import { GridOptions } from '@ag-grid-community/core';
// import AgComponent from '../../Infrastructure/AgComponent';
//import { collectToolPanels } from '@/infra/collectToolPanels';

function _(): GridOptions {
  const components = {};
  // Object.fromEntries(
  //   Object.entries(collectToolPanels()).map(([id, x]) => [
  //     id,
  //     AgComponent.bind(null, id + '-mount-place'),
  //   ])
  // );
  console.log('components', components);

  return {
    frameworkComponents: {
      // nameFloatingFilter: NameFloatingFilter,
      // numberEditor: NumberEditor,
      // ...filters.vtFilters
    },
    components,
  };
}

export default _;
