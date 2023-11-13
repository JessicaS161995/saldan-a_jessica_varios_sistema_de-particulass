class Particula {
	constructor(_x, _y, _color) {
		this.pos = createVector(_x, _y);
		this.lifespan = Math.ceil(random(10, 100));
		this.isAlive = true;
		this.side = Math.ceil(random(3, 15));
		this.color = _color;
		this.angle = random(TWO_PI); // Ángulo inicial aleatorio
		this.speed = random(1, 3); // Velocidad aleatoria
	}

	update() {
		// Actualizamos la posición según la dirección y la velocidad
		this.pos.x += cos(this.angle) * this.speed;
		this.pos.y += sin(this.angle) * this.speed;

		// Cambiamos la dirección aleatoriamente a intervalos regulares
		if (frameCount % 60 === 0) {
			this.angle += random(-PI / 4, PI / 4); // Cambia el ángulo aleatoriamente
		}

		this.lifespan -= 1;

		if (this.lifespan <= 0) {
			this.isAlive = false;
		}
	}

	display() {
		fill(this.color);
		stroke(255);
		square(this.pos.x, this.pos.y, this.side);
	}
}
