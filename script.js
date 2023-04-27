var health = 50;
var food = 5;
var energy = 10;

var healthText = document.getElementById("healthText");
var foodText = document.getElementById("foodText");
var energyText = document.getElementById("energyText");

// ADDING BUTTON //
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

// ACCIDENT //
var accident1 = document.getElementById("accident1");
var accident2 = document.getElementById("accident2");
var accident3 = document.getElementById("accident3");
var accident4 = document.getElementById("accident4");

// EATING ANIMATION //
var cookie1 = document.getElementById("cookie1");
var cookie2 = document.getElementById("cookie2");
var cookie3 = document.getElementById("cookie3");
var cookie4 = document.getElementById("cookie4");

// GROWING ANIMATION //
var growing1 = document.getElementById("growing1");
var growing2 = document.getElementById("growing2");
var growing3 = document.getElementById("growing3");

// OTHERS (buttons) //
// discover //
var discoverPlace = document.getElementById("discoverPlace");
var badAliens = document.getElementById("badAliens");
var goodAliens = document.getElementById("goodAliens");

// repair //
var repairShip = document.getElementById("repairShip");

// FIGHTING ANIMATION //
var fight1 = document.getElementById("fight1");
var fight2 = document.getElementById("fight2");
var fight3 = document.getElementById("fight3");

// TRADE ANIMATION //
var trade1 = document.getElementById("trade1");
var trade2 = document.getElementById("trade2");
var trade3 = document.getElementById("trade3");

// BUTTON 1 //
function eatFood() {
    if (food > 0) {
        health += 10;
        energy += 5;
        food -= 1;
        healthText.innerText = health;
        energyText.innerText = energy;
        foodText.innerText = food;
        
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;

        badAliens.style.display = "none";
        goodAliens.style.display = "none";
        discoverPlace.style.display = "none";
        repairShip.style.display = "none";
        accident1.style.display = "none";
        cookie1.style.display = "block";

        setTimeout(function() {
            cookie1.style.display = "none";
            cookie2.style.display = "block";
        }, 215);

        setTimeout(function() {
            cookie2.style.display = "none";
            cookie3.style.display = "block";
        }, 2 * 215);

        setTimeout(function() {
            cookie3.style.display = "none";
            cookie4.style.display = "block";
        }, 3 * 215);

        setTimeout(function() {
            button1.disabled = false;
            button2.disabled = false;
            button3.disabled = false;
            cookie4.style.display = "none";
            accident1.style.display = "block";
        }, 4 * 215);

        text.innerText = "Your health will increased by 10";
        setTimeout(function() {
            text.innerText = "You are in your spaceship. Your friends are gone. But you couldn't go, because meteorite hit your spaceship. You lost a signal and you flew 500 kilometers beyond."
        }, 4 * 215)

    } else {
        text.innerText = "You have not enough food for eat.";
    }
}
document.getElementById("button1").addEventListener("click", eatFood);

// BUTTON 2 //
function growFood() {
    if (energy >= 5) {
        food += 10;
        energy -= 5;
        foodText.innerText = food;
        energyText.innerText = energy;

        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        
        badAliens.style.display = "none";
        goodAliens.style.display = "none";
        discoverPlace.style.display = "none";
        repairShip.style.display = "none";
        accident1.style.display = "none";
        growing1.style.display = "block";

        setTimeout(function() {
            growing1.style.display = "none";
            growing2.style.display = "block";
        }, 300);

        setTimeout(function() {
            growing2.style.display = "none";
            growing3.style.display = "block";
        }, 2 * 300);

        setTimeout(function() {
            button1.disabled = false;
            button2.disabled = false;
            button3.disabled = false;
            growing3.style.display = "none";
            accident1.style.display = "block";
        }, 3 * 300);

        text.innerText = "You grow food in few seconds."
        setTimeout(function() {
            text.innerText = "You are in your spaceship. Your friends are gone. But you couldn't go, because meteorite hit your spaceship. You lost a signal and you flew 500 kilometers beyond."
        }, 3 * 300)

    } else {
        text.innerText = "You have not enough energy for grow foods.";
    }
}
document.getElementById("button2").addEventListener("click", growFood);

// BUTTON 3 //
function others() {
    badAliens.style.display = "none";
    goodAliens.style.display = "none";
    accident1.style.display = "none";
    discoverPlace.style.display = "block";
    repairShip.style.display = "block";
}
document.getElementById("button3").addEventListener("click", others);

function discover() {
    repairShip.style.display = "none";
    discoverPlace.style.display = "none";
    badAliens.style.display = "block";
    goodAliens.style.display = "block";
}
document.getElementById("discoverPlace").addEventListener("click", discover);

function fight() {
    health -= 50;
    energy += 100;
    healthText.innerText = health;
    energyText.innerText = energy;
    if (health > 0) {

        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;

        badAliens.style.display = "none";
        goodAliens.style.display = "none";
        discoverPlace.style.display = "none";
        repairShip.style.display = "none";
        accident1.style.display = "none";
        fight1.style.display = "block";

        setTimeout(function() {
            fight1.style.display = "none";
            fight2.style.display = "block";
        }, 400);

        setTimeout(function() {
            fight2.style.display = "none";
            fight3.style.display = "block";
        }, 2 * 400);

        setTimeout(function() {
            button1.disabled = false;
            button2.disabled = false;
            button3.disabled = false;
            fight3.style.display = "none";
            accident1.style.display = "block";
        }, 3 * 400);


        text.innerText = "You fighted with BAD aliens and steal 300 energy. But you took some damage."
        setTimeout(function() {
            text.innerText = "You are in your spaceship. Your friends are gone. But you couldn't go, because meteorite hit your spaceship. You lost a signal and you flew 500 kilometers beyond."
        }, 3 * 400)
    } else {
        health = 0;
        energy = 0;
        food = 0;
        healthText.innerText = health;
        energyText.innerText = energy;
        foodText.innerText = food;

        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;

        badAliens.style.display = "none";
        goodAliens.style.display = "none";
        discoverPlace.style.display = "none";
        repairShip.style.display = "none";
        accident1.style.display = "none";

        text.innerText = "You DIED! You will be remembered as a HERO in the world."
    }
}
document.getElementById("badAliens").addEventListener("click", fight);

function trade() {
    if (food > 9) {
        food -= 10;
        energy += 150;
        foodText.innerText = food;
        energyText.innerText = energy;

        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;

        badAliens.style.display = "none";
        goodAliens.style.display = "none";
        discoverPlace.style.display = "none";
        repairShip.style.display = "none";
        accident1.style.display = "none";
        trade1.style.display = "block";

        setTimeout(function() {
            trade1.style.display = "none";
            trade2.style.display = "block";
        }, 400);

        setTimeout(function() {
            trade2.style.display = "none";
            trade3.style.display = "block";
        }, 2 * 400);

        setTimeout(function() {
            button1.disabled = false;
            button2.disabled = false;
            button3.disabled = false;
            trade3.style.display = "none";
            accident1.style.display = "block";
        }, 3 * 400);

        text.innerText = "You traded 10 foods for 150 energy with GOOD aliens."
    } else {
        text.innerText = "You need to 10 foods for trade with good aliens"
        setTimeout(function() {
            text.innerText = "You are in your spaceship. Your friends are gone. But you couldn't go, because meteorite hit your spaceship. You lost a signal and you flew 500 kilometers beyond."
        }, 2000)
    }
}
document.getElementById("goodAliens").addEventListener("click", trade);

    

function repair() {
    if (energy >= 500) {
        health = 0;
        energy = 0;
        food = 0;
        healthText.innerText = health;
        energyText.innerText = energy;
        foodText.innerText = food;

        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;

        badAliens.style.display = "none";
        goodAliens.style.display = "none";
        discoverPlace.style.display = "none";
        repairShip.style.display = "none";
        accident1.style.display = "block";

        setTimeout(function() {
            accident1.style.display = "none";
            accident2.style.display = "block";
        }, 600);

        setTimeout(function() {
            accident2.style.display = "none";
            accident3.style.display = "block";
        }, 2 * 600);

        setTimeout(function() {
            accident3.style.display = "none";
            accident4.style.display = "block";
        }, 3 * 600);

        text.innerText = "Congratulations! You repaired your ship and recovered the signal. Now you can go back to earth."
    } else {
        text.innerText = "You have not enough energy for repair yor ship. You need 500 energy for repair your ship."
        setTimeout(function() {
            text.innerText = "You are in your spaceship. Your friends are gone. But you couldn't go, because meteorite hit your spaceship. You lost a signal and you flew 500 kilometers beyond."
        }, 1750)
    }
}
document.getElementById("repairShip").addEventListener("click", repair);
