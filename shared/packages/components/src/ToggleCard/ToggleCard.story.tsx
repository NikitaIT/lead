import { Stack, Typography, RadioGroup, FormControlLabel } from '@mui/material';
import { Truck, Returned, Editorial } from '@lead/shared/packages/icons';
import { useState } from 'react';

import ToggleCard, {
  ToggleCard as BaseComponent,
} from './ToggleCard';
// import mdx from './ToggleCard.mdx';

export default {
  title: 'Components/ToggleCard',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },
  component: BaseComponent,
};

export const BasicUsage = function BasicUsage() {
  return (
    <ToggleCard
      sx={{
        width: 330,
        minHeight: 117,
      }}
    >
      <Stack gap={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography>Report a delivery issue</Typography>
          <Truck fontSize="large" />
        </Stack>
        <Typography variant="caption" color="textSecondary">
          Please let us know if your order has not arrived, or if it has arrived
          in a damaged condition. Find more detailed information about delivery
          times on our Policy page.
        </Typography>
      </Stack>
    </ToggleCard>
  );
};

export const Readonly = function Readonly() {
  return (
    <ToggleCard
      readOnly
      checked
      sx={{
        width: 330,
        minHeight: 117,
      }}
    >
      <Stack gap={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography>Report a delivery issue</Typography>
          <Truck fontSize="large" />
        </Stack>
        <Typography variant="caption" color="textSecondary">
          Please let us know if your order has not arrived, or if it has arrived
          in a damaged condition. Find more detailed information about delivery
          times on our Policy page.
        </Typography>
      </Stack>
    </ToggleCard>
  );
};

export const Disabled = function Disabled() {
  return (
    <ToggleCard
      disabled
      sx={{
        width: 330,
        minHeight: 117,
      }}
    >
      <Stack gap={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography>Report a delivery issue</Typography>
          <Truck fontSize="large" />
        </Stack>
        <Typography variant="caption" color="textSecondary">
          Please let us know if your order has not arrived, or if it has arrived
          in a damaged condition. Find more detailed information about delivery
          times on our Policy page.
        </Typography>
      </Stack>
    </ToggleCard>
  );
};

export const ControlledToggleCard = function ControlledToggleCard() {
  const [checked, setChecked] = useState(false);
  const handleSelect = () => {
    setChecked((prev) => !prev);
  };

  return (
    <ToggleCard
      sx={{
        width: 330,
        minHeight: 117,
      }}
      checked={checked}
      onChange={handleSelect}
    >
      <Stack gap={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography
            sx={{
              ...(checked && {
                fontWeight: 'bold',
              }),
            }}
          >
            Report a delivery issue
          </Typography>
          <Truck fontSize="large" />
        </Stack>
        <Typography variant="caption" color="textSecondary">
          Please let us know if your order has not arrived, or if it has arrived
          in a damaged condition. Find more detailed information about delivery
          times on our Policy page.
        </Typography>
      </Stack>
    </ToggleCard>
  );
};

export const RadioGroupExample = function RadioGroupExample() {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="rem"
      name="radio-buttons-group"
    >
      <FormControlLabel
        value="rem"
        control={
          <ToggleCard
            sx={{
              width: 330,
              minHeight: 117,
              m: 3,
            }}
          >
            <Stack gap={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Typography>
                  Return, exchange or report a missing product
                </Typography>
                <Returned fontSize="large" />
              </Stack>
              <Typography variant="caption" color="textSecondary">
                Please select the item(s) you wish to return/ exchange/report as
                missing. Note that only the products contained within this
                invoice can be reported.
              </Typography>
            </Stack>
          </ToggleCard>
        }
        label=""
      />
      <FormControlLabel
        value="delivery"
        control={
          <ToggleCard
            sx={{
              width: 330,
              minHeight: 117,
              m: 3,
            }}
          >
            <Stack gap={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Typography>Report a delivery issue</Typography>
                <Truck fontSize="large" />
              </Stack>
              <Typography variant="caption" color="textSecondary">
                Please let us know if your order has not arrived, or if it has
                arrived in a damaged condition. Find more detailed information
                about delivery times on our Policy page.
              </Typography>
            </Stack>
          </ToggleCard>
        }
        label=""
      />
      <FormControlLabel
        value="invoice"
        control={
          <ToggleCard
            sx={{
              width: 330,
              minHeight: 117,
              m: 3,
            }}
          >
            <Stack gap={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Typography>Report an invoice issue</Typography>
                <Editorial fontSize="large" />
              </Stack>
              <Typography variant="caption" color="textSecondary">
                Please let us know if any items are incorrect or missing from
                your order.
              </Typography>
            </Stack>
          </ToggleCard>
        }
        label=""
      />
    </RadioGroup>
  );
};
