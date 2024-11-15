function diceGameSimulation(numSimulations) {
  const game = [];
  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  for (let i = 0; i < numSimulations; i++) {
    let dice1 = rollDice();
    let dice2 = rollDice();

    let sum = dice1 + dice2;
    let result = "";
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    game.push({ dice1, dice2, sum, result });
  }
  return game;
}

module.exports = diceGameSimulation;
