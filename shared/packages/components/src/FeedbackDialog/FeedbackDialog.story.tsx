import {
  Button,
  Typography,
  Link as ButtonLink,
} from '@lead/shared/packages/mui';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { isDocs } from '@lead/storybook-story';

import FeedbackDialog, {
  FeedbackDialog as BaseComponent,
} from './FeedbackDialog';
// import mdx from './FeedbackDialog.mdx';

export default {
  title: 'Components/Feedback dialog',
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
      <FeedbackDialog
        disableTransition
        open={isOpen}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>test</Typography>
      </FeedbackDialog>
    </>
  );
};

export const ExemplaryUsage = function ExemplaryUsage() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Feedback dialog
      </button>
      <FeedbackDialog
        disableTransition
        open={isOpen}
        header="This is heading"
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic Feedback dialog</Typography>
      </FeedbackDialog>
    </>
  );
};

export const ActionsExample = function ActionsExample() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Feedback dialog
      </button>
      <FeedbackDialog
        disableTransition
        open={isOpen}
        header="This is heading"
        actions={[
          <Button key="accept" color="primary" variant="contained">
            Accept
          </Button>,
          <ButtonLink
            key="reject"
            variant="button"
            component="button"
            onClick={() => {}}
          >
            Reject
          </ButtonLink>,
        ]}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic Feedback dialog</Typography>
      </FeedbackDialog>
    </>
  );
};

export const HideCloseButton = function HideCloseButton() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Feedback dialog
      </button>
      <FeedbackDialog
        disableTransition
        hideCloseButton
        open={isOpen}
        header="This is heading"
        actions={[
          <Button key="accept" color="primary" variant="contained">
            Accept
          </Button>,
          <ButtonLink
            key="reject"
            variant="button"
            component="button"
            onClick={() => {}}
          >
            Reject
          </ButtonLink>,
        ]}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic Feedback dialog</Typography>
      </FeedbackDialog>
    </>
  );
};

export const InfoFeedback = function InfoFeedback() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Feedback dialog
      </button>
      <FeedbackDialog
        disableTransition
        hideCloseButton
        severity="info"
        open={isOpen}
        header="This is heading"
        actions={[
          <Button key="accept" color="primary" variant="contained">
            Accept
          </Button>,
          <ButtonLink
            key="reject"
            variant="button"
            component="button"
            onClick={() => {}}
          >
            Reject
          </ButtonLink>,
        ]}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic Feedback dialog</Typography>
      </FeedbackDialog>
    </>
  );
};

export const NegativeFeedback = function NegativeFeedback() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Feedback dialog
      </button>
      <FeedbackDialog
        disableTransition
        hideCloseButton
        severity="error"
        open={isOpen}
        header="This is heading"
        actions={[
          <Button key="accept" color="error" variant="contained">
            Accept
          </Button>,
          <ButtonLink
            key="reject"
            variant="button"
            component="button"
            onClick={() => {}}
          >
            Reject
          </ButtonLink>,
        ]}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic Feedback dialog</Typography>
      </FeedbackDialog>
    </>
  );
};

export const PendingFeedback = function PendingFeedback() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Feedback dialog
      </button>
      <FeedbackDialog
        disableTransition
        hideCloseButton
        severity="warning"
        open={isOpen}
        header="This is heading"
        actions={[
          <Button key="accept" color="primary" variant="contained">
            Accept
          </Button>,
          <ButtonLink
            key="reject"
            variant="button"
            component="button"
            onClick={() => {}}
          >
            Reject
          </ButtonLink>,
        ]}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic Feedback dialog</Typography>
      </FeedbackDialog>
    </>
  );
};

export const PositiveFeedback = function PositiveFeedback() {
  const [isOpen, setIsOpen] = useState(!isDocs());

  return (
    <>
      <button type="button" onClick={handleChange<boolean>(setIsOpen, true)}>
        Open Feedback dialog
      </button>
      <FeedbackDialog
        disableTransition
        hideCloseButton
        severity="success"
        open={isOpen}
        header="This is heading"
        actions={[
          <Button key="accept" color="primary" variant="contained">
            Accept
          </Button>,
          <ButtonLink
            key="reject"
            variant="button"
            component="button"
            onClick={() => {}}
          >
            Reject
          </ButtonLink>,
        ]}
        onClose={handleChange<boolean>(setIsOpen, false)}
      >
        <Typography>This is basic Feedback dialog</Typography>
      </FeedbackDialog>
    </>
  );
};
