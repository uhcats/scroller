document.addEventListener('DOMContentLoaded', function () {


  const rootElement = document.querySelector('#root');

  const sections = document.querySelectorAll('section');

  console.log(sections);

  document.addEventListener('wheel', function (event) {
    console.log(event.wheelDelta);

  });
})