(function (g) {
  const hookName = '__REACT_DEVTOOLS_GLOBAL_HOOK__';
  g[hookName] = g[hookName] || {};
  const hook = g[hookName];
  const no = function () {};
  if (typeof hook.injectIntoGlobalHook !== 'function') hook.injectIntoGlobalHook = no;
  if (typeof hook.inject !== 'function') hook.inject = no;
  if (typeof hook.onCommitFiberRoot !== 'function') hook.onCommitFiberRoot = no;
  if (typeof hook.onCommitFiberUnmount !== 'function') hook.onCommitFiberUnmount = no;
})(typeof globalThis !== 'undefined' ? globalThis : window);
export {};
