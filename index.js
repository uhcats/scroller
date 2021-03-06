document.addEventListener('DOMContentLoaded', function () {


  const rootElement = document.querySelector('#root');

  const sections = document.querySelectorAll('section');

  let currentSectionIndex = 0;

  let isThrottled = false;

  console.log(sections);

  document.addEventListener('wheel', function (event) {

    if (isThrottled) return;
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
    }, 1000)

    const direction = event.wheelDelta < 0 ? 1 : -1;
    console.log(event.wheelDelta);

    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = currentSectionIndex === 0;
      if (firstSection) return;
    }

    currentSectionIndex = currentSectionIndex + direction;

    console.log(currentSectionIndex);

    sections[currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  });
})