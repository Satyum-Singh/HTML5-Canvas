const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}

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

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  init()
})

// Objects
function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = Math.random()*Math.PI*2;
    this.velocity = 0.1;
    this.distanceFromCenter = {x:randomIntFromRange(50,120),y:randomIntFromRange(50,120)};

  this.draw = () => {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  this.update = () => {

    //Move points
    this.radians += this.velocity;

    // Circular Motion
    this.x = x + Math.cos(this.radians)*this.distanceFromCenter.x;
    this.y = y + Math.sin(this.radians)*this.distanceFromCenter.y;
    this.draw()
  }
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, 15, 'blue'))
  }
  console.log(particles)
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  particles.forEach(particle => {
   particle.update();
  });
}

init()
animate()
