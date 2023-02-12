import { GridOptions } from '@ag-grid-community/core';
import localization from './localization';

function _(): GridOptions {
  return {
    getLocaleText(params) {
      // to avoid key clash with external keys, we add 'grid' to the start of each key.
      const gridKey = params.key;

      // look the value up using an application wide service
      return (localization as any)[gridKey] || gridKey;
    },
  };
}

export default _;
