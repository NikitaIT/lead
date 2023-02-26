import {
  ApplyColumnStateParams,
  ColumnApi,
  ColumnState,
  GridApi,
} from '@ag-grid-community/core';
// import { AgEventEmitter, Unsubscribe } from '../AgEventEmitter';
// import { Mode } from './ports';
// // https://blog.ag-grid.com/persisting-ag-grid-state-with-react-redux/#column-sort-state

// type WithApi = { api: GridApi<unknown> };
// type WithColumnApi = { columnApi: ColumnApi };
// class AgStateColaboration {
//   modelUpdated({ api }: WithApi) {
//     const filterModel = api.getFilterModel();
//     // broadcast
//   }

//   saveGridColumnState({ columnApi }: WithColumnApi) {
//     let columnState = columnApi.getColumnState();
//     // broadcast
//   }
//   firstDataRendered({ columnState, columnApi }: WithColumnApi & { columnState: ColumnState[]}) {
//     columnApi.applyColumnState({
//       state: columnState,
//       applyOrder: true
//     });
//   }
//   applyColumnState() {
//     columnApi.applyColumnState({
//       state: columnState,
//       applyOrder: true
//     });
//   }
// }
// type ApplyColumnStateDetail = { state: ColumnState[] }
// class ApplyColumnState extends CustomEvent<ApplyColumnStateDetail> {
//   constructor(detail: ApplyColumnStateDetail) {
//     super('applyColumnState')
//   }
// }

// class ColumnApiHandler {
//   constructor(private columnApi: ColumnApi) {}

//   applyColumnState({ state }: ApplyColumnState) {
//     this.columnApi.isPivotMode
//     this.columnApi.applyColumnState({
//       state: state,
//       applyOrder: true
//     });
//   }
// }
// class AgStateCommit {
//   constructor(private toUpdate: string[] = []) {}
//   modelUpdated(_: unknown, unsubscribe: Unsubscribe) {
//     this.toUpdate.push('modelUpdated');
//     unsubscribe();
//   }
// }
// export class AgState {
//   constructor(
//     protected readonly columnApi: ColumnApi,
//     protected readonly emitter: AgEventEmitter,
//     protected readonly mode: Mode
//   ) {}
//   // должно вызываться на onFirstDataRendered если нужен стейт фильтров со всеми настройками
//   restoreAgState(id: string) {
//     const state = Mode.is(Mode.colaboration)
//       ? new AgStateColaboration()
//       : new AgStateCommit();

//     this.emitter.on({
//       type: 'modelUpdated',
//       handleEvent: state.modelUpdated,
//     });
//     this.emitter.on({
//       type: 'firstDataRendered',
//       handleEvent: (e) => {
//         const filterModel = e.api.getFilterModel();
//         // save filterModel
//       },
//     });
//     this.emitter.on({
//       type: 'sortChanged',
//       handleEvent:
//     })
//     /**
//      * filterModel отключен т.к. мы выбрали конфиг и работаем со всеми рк в его рамках, но при смене рк всегда нужно менять фильтры
//      */
//     const { columnGroupState, columnState, sortModel /* , filterModel */ } =
//       gridOptions;
//     columnApi.setColumnGroupState(columnGroupState);
//     columnApi.applyColumnState(columnState.filter(notExcluded));
//     api.setSortModel(sortModel);
//     // api.setFilterModel(filterModel)
//     Storage.selectedConfiguration = configId;
//   }
// }
