var random = Math.floor(Math.random() * 5);
var location1 = random;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var guesses = 0;
var hit = 0;
var issunk = false;
while (issunk == false) {
    guess = prompt("Aim and Fire!(Enter the number between 0-6 to fire!!)");
    if (guess >= 00 && guess <= 6) {
        guesses = guesses + 1;

    } else {
        alert("Enter the valid number");

    }
    if (guess == location1 || guess == location2 || guess == location3) {
        alert("Hit! :)");
        hit = hit + 1;

        if (hit == 3) {
            issunk = true;
            alert("You Sank The BattleShip!! :)");
        }
    } else {
        alert("Miss:(");

    }
}
var stats = "You took " + guesses + " to sink the battleship," +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);