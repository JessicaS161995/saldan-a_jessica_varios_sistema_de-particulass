let s;
let v;
let sound;

function preload() {
  // Carga tu archivo de sonido aquí (asegúrate de que el archivo esté en la misma carpeta que tu código)
  sound = loadSound('0.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 10, 0);
  s = new Sistema();
  v = new Sistema();
}

function draw() {
  background(255, 20);
  s.update();
  s.display();
  v.update();
  v.display();
}

class Sistema {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.ps = [];
    this.t = random(100);
    this.color = color(random(100, 255), random(255), 0);
  }

  update() {
    this.t += 0.01;

    this.pos.x = map(noise(this.t), 0, 1, 0, width);
    this.pos.y = map(noise(this.t + 10), 0, 1, 0, height);

    // Reproducir sonido al agregar una partícula
    sound.play();

    this.p = new Particula(this.pos.x, this.pos.y, this.color);
    this.ps.push(this.p);

    for (let i = 0; i < this.ps.length; i++) {
      if (!this.ps[i].isAlive) {
        this.ps.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.ps.length; i++) {
      this.ps[i].update();
      this.ps[i].display();
    }
  }
}

class Particula {
  constructor(x, y, color) {
    // Definir la clase Particula (asegúrate de que está correctamente definida)
  }

  update() {
    // Lógica de actualización de partícula
  }

  display() {
    // Lógica de visualización de partícula
  }
}
