import { LicenseManager } from '@ag-grid-enterprise/core';
import { GridCtrl } from '@ag-grid-community/core';

/**
 * AgGrid license
 * watermark: https://github.com/ag-grid/ag-grid/blob/latest/enterprise-modules/core/src/license/watermark.ts
 * licenseManager: https://github.com/ag-grid/ag-grid/blob/latest/enterprise-modules/core/src/licenseManager.ts
 */
export function suppressAgGridLicense() {
  // if something not defined check links

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  LicenseManager.prototype.validateLicense = () => {};
  GridCtrl.prototype.showWatermark = () => false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // ClipboardService.prototype.pasteFromClipboard = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // ClipboardService.prototype.copyToClipboard = () => {};

  // u should set it in production
  LicenseManager.setLicenseKey(process.env.AG_LICENSE_KEY || 'LICENSE_KEY');
}
