export function throttle(callback, delay = 200) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callback.apply(this, args);
        timer = false;
      }, delay);
    }
  };
}
