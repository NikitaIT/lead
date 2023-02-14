/* eslint-disable @typescript-eslint/ban-types */
import { ModalProps } from '@mui/material';
import { Size } from '../baseTypes';

export type DialogBaseProps = ModalProps &
  OwnerState & {
    hideCloseButton: boolean;
    showBackButton: boolean;
    onBack: () => void;
    backButton: boolean;
    disableTransition: boolean;
    timeoutMs: number;
    enableAutoClose: boolean;
    children: React.ReactNode | undefined | React.ReactNode[];
  };
export type DialogBaseClassKey = {};
export type DialogBaseTypeMap = {};
export type DialogBasePropsSizeOverrides = {};
export type ExtendDialogBaseTypeMap = {};
export type OwnerState = {
  size: typeof Size.medium | typeof Size.small;
  classes?: Record<string, string>;
};
