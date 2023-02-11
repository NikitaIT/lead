import { Typography } from '@mui/material';
import {
  Check,
  ErrorCircle,
  Lightbulb,
  Settings,
} from '@lead/shared/packages/icons';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { isDocs } from '@lead/storybook-story';

import FeedbackNotification, {
  FeedbackNotification as BaseComponent,
} from './FeedbackNotification';
// import mdx from './FeedbackNotification.mdx';

export default {
  title: 'Components/Feedback notification',
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

function handleChange<T>(setState: Dispatch<SetStateAction<T>>, nextState: T) {
  return () => {
    setState(nextState);
  };
}

export const BasicUsage = function BasicUsage() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Feedback dialog
      </button>
      <FeedbackNotification
        open={isOpen}
        icon={<Check />}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>Replaced!</Typography>
      </FeedbackNotification>
    </>
  );
};

export const Open = function Open() {
  return (
    <FeedbackNotification open icon={<Check />}>
      <Typography>Replaced!</Typography>
    </FeedbackNotification>
  );
};

export const WithoutIcon = function WithoutIcon() {
  return (
    <FeedbackNotification open={!isDocs()}>
      <Typography>
        Initial without icon lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </Typography>
    </FeedbackNotification>
  );
};

export const ColorError = function ColorError() {
  return (
    <FeedbackNotification open={!isDocs()} color="error" icon={<ErrorCircle />}>
      <Typography>
        Error lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </FeedbackNotification>
  );
};

export const ColorWarning = function ColorWarning() {
  return (
    <FeedbackNotification open={!isDocs()} color="warning" icon={<Check />}>
      <Typography>
        Warning lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </FeedbackNotification>
  );
};

export const ColorInfo = function ColorInfo() {
  return (
    <FeedbackNotification open={!isDocs()} color="info" icon={<Check />}>
      <Typography>
        Info lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </FeedbackNotification>
  );
};

export const ColorSuccess = function ColorSuccess() {
  return (
    <FeedbackNotification open={!isDocs()} color="success" icon={<Check />}>
      <Typography>
        Success lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </FeedbackNotification>
  );
};

export const ColorPrimary = function ColorPrimary() {
  return (
    <FeedbackNotification open={!isDocs()} color="primary" icon={<Lightbulb />}>
      <Typography>Primary lorem ipsum.</Typography>
    </FeedbackNotification>
  );
};

export const ColorSecondary = function ColorSecondary() {
  return (
    <FeedbackNotification
      open={!isDocs()}
      color="secondary"
      icon={<Settings />}
    >
      <Typography>
        Secondary lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </FeedbackNotification>
  );
};

export const WithBackdrop = function WithBackdrop() {
  return (
    <FeedbackNotification
      open={!isDocs()}
      hideBackdrop={false}
      color="secondary"
      icon={<Settings />}
    >
      <Typography>
        Secondary lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </FeedbackNotification>
  );
};

export const BigPageWithBackdrop = function BigPageWithBackdrop() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <div style={{ height: 4000 }}>
      <div
        style={{
          maxWidth: 600,
          height: 400,
          border: '1px solid maroon',
          overflow: 'hidden',
          margin: 30,
          padding: 30,
        }}
      >
        <Typography>
          This div is just place for the button. The backdrop is on and page
          height is set to 4000. Clicking backdrop will not close the
          notification.
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
          Open Feedback dialog
        </button>
      </div>
      <FeedbackNotification
        open={isOpen}
        color="error"
        icon={<Settings />}
        timeoutMs={4000}
        hideBackdrop={false}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>
          This will automatically disappear after 4 seconds.
        </Typography>
      </FeedbackNotification>
    </div>
  );
};
