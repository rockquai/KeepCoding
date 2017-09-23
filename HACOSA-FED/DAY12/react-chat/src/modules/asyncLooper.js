module.exports = (action, max, term) => {
  let count = 0;
  const intervalId = setInterval(() => {
    count += 1;
    if (count >= max) {
      clearInterval(intervalId);
    }
    action();
  }, term);
};
