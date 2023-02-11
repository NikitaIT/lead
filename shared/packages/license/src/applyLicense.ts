import { LicenseInfo } from '@mui/x-license-pro';

const applyLicense = () => LicenseInfo.setLicenseKey((process.env as any).LK);

export default applyLicense;
