const dvd = document.querySelector(".dvd");

let x = 100;
let y = 100;
let dx = 3;
let dy = 2;

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function animate() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const rect = dvd.getBoundingClientRect();

  x += dx;
  y += dy;

  // 碰到左右牆
  if (x + rect.width >= width || x <= 0) {
    dx = -dx;
    dvd.style.background = getRandomColor();
  }

  // 碰到上下牆
  if (y + rect.height >= height || y <= 0) {
    dy = -dy;
    dvd.style.background = getRandomColor();
  }

  dvd.style.left = x + "px";
  dvd.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();