const counterUp = (selector, options) => {
  const countersNode = document.querySelectorAll(selector);
  const counters = Array.from(countersNode);
  const { duration, steps } = options;

  counters.map((counter) => {
    //*COLLECTION VALUE FROM INNERHTML
    let value = counter.textContent;
    value = parseInt(value.replace(",", "").replace(" ", ""));

    //*STORING VALUE IN DATASET
    // counter.dataset.value = value;

    //*INCREMENTING THE VALUE

    let count = 0;
    let incrementingCount = setInterval(() => {
      count = count + (steps == null ? 1 : steps);
      counter.textContent = count;
      //*STOPING THE INCREMENT
      if (value == count) {
        clearInterval(incrementingCount);
      }
    }, duration);
  });
};

counterUp(".counter", { duration: 10, steps: 2 });
