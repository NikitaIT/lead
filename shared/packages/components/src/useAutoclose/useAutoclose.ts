import { useEffect } from 'react';

export interface UseAutocloseProps {
  /** Should auto close? */
  autoClose?: boolean;
  /** Timeout in milliseconds */
  timeoutMs?: number;
  /** Close event */
  onClose: () => void;
  /** is Open */
  open?: boolean;
}

/**
 * Use auto close logic
 * logic for auto closing stuff (modal).
 * @param {UseAutocloseProps} props
 */
export default function useAutoclose({ onClose, autoClose, open, timeoutMs }: UseAutocloseProps) {
  useEffect(() => {
    if (!autoClose || !open) {
      return undefined;
    }
    const handle = setTimeout(onClose, timeoutMs);

    return () => {
      clearTimeout(handle);
    };
  }, [onClose, autoClose, open, timeoutMs]);
}
