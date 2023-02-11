import { CircularProgress } from '@mui/material';

export const MuiCircularProgress = function MuiCircularProgress() {
  return (
    <>
      <CircularProgress color="primary" />
      <CircularProgress color="primary" variant="determinate" value={50} />
      <CircularProgress color="secondary" />
      <CircularProgress color="secondary" variant="determinate" value={50} />
      <CircularProgress color="success" />
      <CircularProgress color="success" variant="determinate" value={50} />
      <CircularProgress color="warning" />
      <CircularProgress color="warning" variant="determinate" value={50} />
      <CircularProgress color="info" />
      <CircularProgress color="info" variant="determinate" value={50} />
      <CircularProgress color="error" />
      <CircularProgress color="error" variant="determinate" value={50} />
    </>
  );
};
