import { TextField, Autocomplete } from '@mui/material';

/* eslint-disable-next-line */
export interface BannerProps {
  text: string;
}

export function Banner(props: BannerProps) {
  const options = ['1', '2'];
  return (
    <Autocomplete
      {...props}
      options={options}
      renderInput={(params) => <TextField {...params} label="Option" />}
    />
  );
}

export default Banner;
