import * as dat from "dat.gui";

const gui = new dat.GUI();
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const d = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

const wave = {
  y: canvas.heigth / 2,
  length: 0.01,
  amplitude: 100,
};

gui.add(wave, "y", 0, canvas.height);
gui.add(wave, "length", -0.01, 0.01);
gui.add(wave, "amplitude", -300, 300);

c.beginPath();

c.moveTo(0, canvas.height / 2);

for (let i = 0; i < canvas.width; i++) {
  c.lineTo(i, canvas.height / 2 + Math.sin(i * 0.01) * 100);
}
c.stroke();
