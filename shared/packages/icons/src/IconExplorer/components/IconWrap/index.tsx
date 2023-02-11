import { styled } from '@mui/material';

export const IconWrap = styled('span')(({ theme }) => ({
  display: 'inline-grid',
  alignItems: 'center',
  justifyItems: 'center',
  width: 92,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: theme.spacing(0, 2),
  fontSize: 12,
  '& p': {
    margin: 0,
    wordBreak: 'break-word',
    cursor: 'pointer',
  },
}));
