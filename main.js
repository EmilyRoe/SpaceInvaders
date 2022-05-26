let shipsArr = [];

const motherShip = document.querySelector(".mother-ship");
const defenceShip = document.querySelectorAll(".defence-ship");
const attackShip = document.querySelectorAll(".attack-ship");
const shootButton = document.querySelector(".shoot-btn");
const endGameMessage = document.querySelector(".end-game-message");
const restartButton = document.querySelector(".restart-btn");
let domElements = [];

class Ship {
  constructor(shipType, startingPoints) {
    this.shipType = shipType;
    this.startingPoints = startingPoints;
  }
}

for (let index = 0; index < 14; index++) {
if (index == 0) {
    const motherShip = new Ship("motherShip", 108);
    shipsArr.push(motherShip);
} else if (index > 0 && index < 9) {
    const attackShip = new Ship("attackShip", 48);
    shipsArr.push(attackShip);
} else {
    const defenceShip = new Ship("defenceShip", 80);
    shipsArr.push(defenceShip);
}
domElements = [motherShip, ...attackShip, ...defenceShip];
endGameMessage.style.display = "none";
}
console.log(shipsArr);
console.log(domElements);

const deductPoints = () => {
  const randomNumber = Math.floor(Math.random() * shipsArr.length);
  console.log(randomNumber);
  const randomShip = shipsArr[randomNumber];
  console.log(randomShip);
  if (randomShip.shipType == "motherShip" && randomShip.startingPoints > 0) {
    randomShip.startingPoints -= 9;
    motherShip.innerHTML = randomShip.startingPoints;
  } else if (
    randomShip.shipType == "defenceShip" &&
    randomShip.startingPoints > 0
  ) {
    randomShip.startingPoints -= 10;
    domElements[randomNumber].innerHTML = randomShip.startingPoints;
  } else if (randomShip.startingPoints > 0) {
    randomShip.startingPoints -= 12;
    domElements[randomNumber].innerHTML = randomShip.startingPoints;
  }
    checkIfPointsZero();
};

shootButton.addEventListener("click", deductPoints);

const checkIfPointsZero = () => {
  if (shipsArr[0].startingPoints == 0) {
    console.log("You win!");
    endGameMessage.style.display = "block";
  }
};

restartButton.addEventListener("click", () => {
  endGameMessage.style.display = "none";
  for (let index = 0; index < domElements.length; index++) {
    if (index == 0) {
        domElements[index].innerHTML = 108;
    } else if (index > 0 && index < 9) {
        domElements[index].innerHTML = 48;
    } else {
        domElements[index].innerHTML = 80;
    }
  }
  domElements = [motherShip, ...attackShip, ...defenceShip];
});
