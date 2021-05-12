// let randomNumber = Math.floor((Math.random() * 5) + 1);
let targetMax = null;
let targetMin = null;
let turns;

function checkNumber() {

    let playerName = prompt("Welkom! Wat is jouw naam?", " Richard ");

    if (playerName != null) { alert("Hey " + playerName + ", wil je een spelletje spelen?"); }

    numberMin = prompt(playerName + ", wat wil je als laagste getal voor het spel?");
    numberMax = prompt(playerName + ", wat wil je als hoogste getal voor het spel?");

    let randomNumber = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);


    while (turns > 0) {

        let guess = prompt(playerName + ", welk nummer denk je dat het is? Kies een getal tussen de " + targetMin + " en de " + targetMax + " . ")

        if (guess < targetMin || guess > targetMax) {
            alert(playerName + ", jouw invoer is incorrect, voer een nummer in tussen de " + targetMin + " en de " + targetMax + " . ");
            continue;
        }

        if (guess == randomNumber) {
            alert("Hey, je hebt gewonnen :-))), het nummer was " + randomNumber + ".")
            return alert("Hi " + playerName + " bedankt voor het spelen, tot de volgende keer.");
        }

        else {
            turns--;

            if (guess < randomNumber) {
                alert(playerName + ", je zit te laag!! " + "Het nummer was " + randomNumber + ". Je hebt nog " + turns + " pogingen.");
            }

            else if (guess > randomNumber) {
                alert(playerName + ", je zit te hoog!! " + "Het nummer was " + randomNumber + ". Je hebt nog " + turns + " pogingen.");
            }
        }
        if (turns == 0) { alert("Hi " + playerName + " jij hebt geen pogingen meer, je hebt verloren. Klik op de button voor een nieuwe poging.") }
    }
}
function startNewGame() {
    turns = 5;
    // let randomNumber = Math.floor((Math.random() * 10) + 1);
    // let randomNumber = parseInt(numberMin + Math.random() * ((numberMax - numberMin) + 1));
    checkNumber();
}


