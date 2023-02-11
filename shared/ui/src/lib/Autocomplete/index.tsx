import { TextField, Autocomplete } from '@mui/material';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BannerProps {
  text: string;
}

const StyledBanner = styled.div`
  color: pink;
`;

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
