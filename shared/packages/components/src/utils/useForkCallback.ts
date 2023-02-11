/**
 * @private
 * Hook for forked callbacks that accepts same parameters.
 * @param callbacks {Array<T extends (...args: never[]) => unknown | undefined>} list of callbacks
 * @returns {(...args: Parameters<T>) => void}
 */
function useForkCallback<T extends (...args: never[]) => unknown>(
  ...callbacks: Array<T | undefined>
) {
  return (...args: Parameters<T>) => {
    callbacks.forEach((callback) => callback?.(...args));
  };
}

export default useForkCallback;
