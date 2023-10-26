const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

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

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let objects
function init() {
  objects = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop

const blueRecPosition = canvas.width/2-50;

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle="#1a1a23"
  c.fillRect(0, 0, canvas.width, canvas.height)

  if(mouse.x + 100 >= blueRecPosition && mouse.x<= blueRecPosition+100 && mouse.y + 100 >= blueRecPosition && mouse.y<= blueRecPosition+100){
    console.log("colliding");
  }
  c.fillStyle="#e86262"
  c.fillRect(mouse.x, mouse.y, 100, 100)

  c.fillStyle="#92abea"
  c.fillRect(canvas.width/2-50, canvas.height/2-50, 100, 100)
}

init()
animate()
