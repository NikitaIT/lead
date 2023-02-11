import type { Meta } from '@lead/storybook-story';

// import mdx from './playground.mdx';

const exportObject: Meta = {
  title: 'Mui/Playground',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },
};

export default exportObject;

export { Alert } from './overrides/MuiAlert.story';
export { Autocomplete } from './overrides/MuiAutocomplete.story';
export { Backdrop } from './overrides/MuiBackdrop.story';
export { Badge } from './overrides/MuiBadge.story';
export { Button } from './overrides/MuiButton.story';
export { Checkbox } from './overrides/MuiCheckbox.story';
export { Chip } from './overrides/MuiChip.story';
export { CircularProgress } from './overrides/MuiCircularProgress.story';
export { DatePicker } from './overrides/MuiDatePicker.story';
export { DateRangePicker } from './overrides/MuiDateRangePicker.story';
export { DateTimePicker } from './overrides/MuiDateTimePicker.story';
export { LinearProgress } from './overrides/MuiLinearProgress.story';
export { Link } from './overrides/MuiLink.story';
export { LoadingButton } from './overrides/MuiLoadingButton.story';
export { MobileStepper } from './overrides/MuiMobileStepper.story';
export { Paper } from './overrides/MuiPaper.story';
export { Radio } from './overrides/MuiRadio.story';
export { Rating } from './overrides/MuiRating.story';
export { Select } from './overrides/MuiSelect.story';
export { Skeleton } from './overrides/MuiSkeleton.story';
export { Slider } from './overrides/MuiSlider.story';
export { Snackbar } from './overrides/MuiSnackbar.story';
export { SpeedDial } from './overrides/MuiSpeedDial.story';
export { Stepper } from './overrides/MuiStepper.story';
export { Switch } from './overrides/MuiSwitch.story';
export { Tabs } from './overrides/MuiTabs.story';
export { TextField, TextFieldTextArea } from './overrides/MuiTextField.story';
export { TimePicker } from './overrides/MuiTimePicker.story';
export { Tooltip } from './overrides/MuiTooltip.story';
export { Typography } from './overrides/MuiTypography.story';
