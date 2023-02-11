import { Rating } from '@mui/material';

export const MuiRating = function MuiRating() {
  return (
    <>
      <div>
        <Rating defaultValue={2} />
      </div>
      <div>
        <Rating defaultValue={2} precision={0.5} />
      </div>
    </>
  );
};
