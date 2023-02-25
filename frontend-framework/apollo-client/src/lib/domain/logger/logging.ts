const bindToConsole = (
  consoleMethod: (...args: unknown[]) => void,
  polyfill: (...args: unknown[]) => void
) => {
  return consoleMethod ? consoleMethod.bind(console) : polyfill;
};

export const logging = (() => {
  let prefix = '';

  const consoleLog = (...args: unknown[]) => {
    console.log(prefix, ...args);
  };

  const consoleError = (...args: unknown[]) => {
    console.error(prefix, ...args);
  };

  const consoleGroup = (...args: unknown[]) => {
    consoleLog(...args);
    prefix += '> ';
  };

  const consoleGroupEnd = () => {
    prefix = prefix.slice(0, -2);
  };

  return {
    log: consoleLog,
    error: consoleError,
    group: bindToConsole(console.group, consoleGroup),
    groupCollapsed: bindToConsole(console.groupCollapsed, consoleGroup),
    groupEnd: bindToConsole(console.groupEnd, consoleGroupEnd),
  };
})();
