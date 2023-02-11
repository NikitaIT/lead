import Counter from '../Counter';
import { SplitButton } from './SplitButton';
// import mdx from './SplitButton.mdx';

export default {
  title: 'Components/Split button',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },
  component: SplitButton,
};

export const Usage = function Usage() {
  return <SplitButton buttonContent="Click me!">My content</SplitButton>;
};

export const EdgeStart = function EdgeStart() {
  return (
    <SplitButton edge="start" buttonContent="Click me!">
      My content
    </SplitButton>
  );
};

export const LoadingState = function LoadingState() {
  return (
    <SplitButton loading buttonContent="Click me!">
      My content
    </SplitButton>
  );
};

export const DisabledState = function DisabledState() {
  return (
    <SplitButton disabled buttonContent="Click me!">
      My content
    </SplitButton>
  );
};

export const ContentSize = function ContentSize() {
  return (
    <SplitButton contentWidth="50%" buttonContent="Click me!">
      My content
    </SplitButton>
  );
};

export const ColorSecondary = function ColorSecondary() {
  return (
    <SplitButton color="secondary" buttonContent="Click me!">
      My content
    </SplitButton>
  );
};

export const SizeSmall = function SizeSmall() {
  return (
    <SplitButton size="small" buttonContent="Click me!">
      My content
    </SplitButton>
  );
};

export const WithCounter = function WithCounter() {
  return (
    <SplitButton buttonContent="Add to basket">
      <Counter
        expandOnFocus
        size="large"
        variant="text"
        sx={{
          margin: '0 10px',
        }}
      />
    </SplitButton>
  );
};

export const FullWidth = function FullWidth() {
  return (
    <SplitButton fullWidth buttonContent="Click me!">
      My content
    </SplitButton>
  );
};

export const CustomLoadingIndicator = function CustomLoadingIndicator() {
  return (
    <SplitButton
      loading
      buttonContent="Click me!"
      loadingIndicator="Loading..."
    >
      My content
    </SplitButton>
  );
};
