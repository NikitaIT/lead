import { Box, IconButton, Alert, Typography, AlertTitle } from '@mui/material';
import { Clear } from '@lead/shared/packages/icons';

export const MuiAlert = function MuiAlert() {
  return (
    <>
      <Typography variant="h6">Default alerts</Typography>
      <Typography variant="body1">
        By default alerts have the variant set to &quot;filled&quot;, they are
        bold and have an icon. Please use severity instead of color because that
        way you set the right color and icon. An exception is using the default
        color. It can be only set as color.
      </Typography>
      <Box m={2}>
        <Alert severity="info">Text inside the filled info alert.</Alert>
      </Box>
      <Box m={2}>
        <Alert severity="error">Text inside the filled error alert.</Alert>
      </Box>
      <Box m={2}>
        <Alert severity="success">Text inside the filled success alert.</Alert>
      </Box>
      <Box m={2}>
        <Alert color="default">Text inside the filled default alert.</Alert>
      </Box>
      <Box m={2}>
        <Alert
          severity="error"
          action={
            <IconButton color="inherit" size="small">
              <Clear />
            </IconButton>
          }
        >
          Text inside the filled error alert.
        </Alert>
      </Box>
      <hr style={{ margin: '20px 0' }} />
      <Typography variant="h6">Information block usage</Typography>
      <Typography variant="body1">
        Information block is alert with the variant set to &quot;standard&quot;.
        Additional info can be found in information blocks below.
      </Typography>
      <Box m={2}>
        <Alert severity="info" variant="standard">
          <AlertTitle>Severity info with title</AlertTitle>
          In standard variant the max width of the text is 600px with 20px
          padding. Text is by default left aligned. Title is always centered.{' '}
          <b>Icons are removed</b>.
          <br />
          Make sure to use <b>severity</b> and not <s>color</s>. Using color can
          lead to unwanted results. Prepared severity are:{' '}
          <u>info, error and success</u>. If non is set it will fall back to
          &quot;success&quot;.
          <br />
          The alert should be 100% of parent element with 30px margin on desktop
          and 15px margin on mobile. In case it is placed within some narrow
          element, it can have 15px outer margin on desktop also. Margins should
          be set from parent element.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert severity="error" variant="standard">
          <AlertTitle>Severity error with title</AlertTitle>
          Your order is currently being prepared in the warehouse and needs to
          be located to be cancelled. Incase your order has already been shipped
          and left the warehouse the cancelation will not be possible.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert severity="success" variant="standard">
          <AlertTitle>Severity success with title</AlertTitle>
          The claim you previously reported has now been approved. You will
          receive your money back on your bank account within 3-5 bank days.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert variant="standard">
          <AlertTitle>
            The alert, also known as information block with severity not set and
            with a longer title
          </AlertTitle>
          For Maharashtra, please expect a delay of 5 - 7 days over and above
          the scheduled delivery dates due to extra precautions being taken by
          Oriflame and its courier partners in terms of safety and sanitization
          of its warehouses.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert
          severity="info"
          variant="standard"
          action={
            <IconButton color="inherit" size="small">
              <Clear />
            </IconButton>
          }
        >
          <AlertTitle>
            Action in standard variant is placed absolute in right top corner
          </AlertTitle>
          For Maharashtra, please expect a delay of 5 - 7 days over and above
          the scheduled delivery dates due to extra precautions being taken by
          Oriflame and its courier partners in terms of safety and sanitization
          of its warehouses.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert severity="error" variant="standard">
          The alert, also known as information block, can be also without the
          title.
          <br />
          Your order is currently being prepared in the warehouse and needs to
          be located to be cancelled. Incase your order has already been shipped
          and left the warehouse the cancelation will not be possible.
        </Alert>
      </Box>
      <hr style={{ margin: '20px 0' }} />
      <Typography variant="h6">
        Also available but it should not be used
      </Typography>
      <Box m={2}>
        <Alert severity="info" variant="outlined">
          Text inside the outlined info alert.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert severity="error" variant="outlined">
          Text inside the outlined error alert.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert severity="success" variant="outlined">
          Text inside the outlined success alert.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert color="default" variant="outlined">
          Text inside the outlined default alert.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert severity="warning" variant="outlined">
          Text inside the outlined warning alert.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert severity="warning" variant="standard">
          Text inside the outlined warning alert.
        </Alert>
      </Box>
      <Box m={2}>
        <Alert severity="warning">Text inside the filled warning alert.</Alert>
      </Box>
    </>
  );
};
