class TankMain {
  constructor() {
    this.currentTank = 0;
  }

  rotate(angle) {
    const clockwiseDistance = (angle - this.currentTank + 360) % 360;
    const anticlockwiseDistance = (360 - clockwiseDistance) % 360;
    const direction =
      clockwiseDistance <= anticlockwiseDistance
        ? "По годинниковій стрілці"
        : "Проти годинникової стрілки";
    this.currentTank = angle;
    return direction;
  }
}

const tank = new TankMain();

function rotateTank() {
  const tankInput = document.getElementById("angleInput");
  const resultElement = document.getElementById("result");

  if (angleInput.value !== "") {
    const angle = parseInt(tankInput.value);
    const result = tank.rotate(angle);
    resultElement.textContent = `Результат: ${result}`;
  } else {
    resultElement.textContent = "Будь ласка, введіть кут обертання.";
  }
}
