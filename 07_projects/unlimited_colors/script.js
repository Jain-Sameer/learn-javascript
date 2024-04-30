// to generate a random colour

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let toStopSetInterval;
  
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
  const startChangingColor = function () {
    if (!toStopSetInterval) {
      toStopSetInterval = setInterval(changeColor, 500);
    } // important check for making your code better
  };
  const stopChangingColor = function () {
    clearInterval(toStopSetInterval);
    toStopSetInterval = null; // good practice to flush out the values to free up memory
  };
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  