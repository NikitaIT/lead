import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IconShape {
  key: string;
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>>>;
}
