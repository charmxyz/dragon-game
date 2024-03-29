let xp = 0;
let gold = 0;
let health = 100;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");

const locations = [
  {name:"town square",
  "button text": ["Go to store", "Go to cave", "Fight dragon"],
  "button functions": [goStore, goCave, fightDragon],
  "text": "You are in the town square. There is a sign that says \'Store\'"},
  {name:"store",
  "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
  "button functions": [buyHealth, buyWeapon, goTown],
  "text": "You enter the store."},
  {name:"cave",
  "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
  "button functions": [fightSlime, fightFangedBeast, goTown],
  "text": "You enter the cave. You see some monsters."},
];

// initialize button

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = goTown;

function update(loc){
  button1.innerText = loc["button text"][0];
  button2.innerText = loc["button text"][1];
  button3.innerText = loc["button text"][2];
  button1.onclick = loc["button functions"][0];
  button2.onclick = loc["button functions"][1];
  button3.onclick = loc["button functions"][2];
  text.innerText = loc.text;
}

function goStore(){
  update(locations[1]);
}

function goCave(){
  update(locations[2]);
}

function goTown(){
  update(locations[0]);
}

function fightDragon(){
  console.log("fighting dragon");
}

function buyHealth(){
  gold -= 10;
  health += 10;
}

function buyWeapon(){
  console.log("buying weapon");
}

function fightSlime(){
  console.log("fighting slime");
}

function fightFangedBeast(){
  console.log("fighting fanged beast");
}