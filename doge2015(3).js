/**
* Created with Doge Sim 2015 GOTY Edition.
* User: dank
* Date: 2015-04-27
* Time: 09:49 PM
* To change this template use Tools | Templates.
*/
//The doge object containing many variables for your gameplay//
var doge = {
  hunger: 15,
  maxhunger: 15,
  multipliers: 1,
  happiness: 31,
  dankfedora: false,
  dankerfedora: false,
  dankestfedora: false,
  snooperino: false,
  nipponerino: false
};

//A bunch of various variables//
var dogecoins = 0;
var dank = document.getElementById("dankfedora");
var buyMoreFedoras = document.getElementById("showfedora");
var danker = document.getElementById("dankerfedora");
var dankest = document.getElementById("dankestfedora");
var snoopdoge = document.getElementById("snoopdoge");
var snoopdoge2 = document.getElementById("snoopdoge2");
var buyASnoop = document.getElementById("snoopbuy");
var buyNipponSteel = document.getElementById("nipponbuy");
var mtnDewFeed = document.getElementById("mtnDew");
var counter = 0;

buyMoreFedoras.addEventListener ("click", buyFedora);


//A counter that just counts 60 times a second to support other function//
function counterDoge(){
  counter++;
  window.requestAnimationFrame(counterDoge);
}

counterDoge();

//Collection of increasing dogecoins that gives more dogecoins the more fedoras you have, controls how many dogecoins you get.//
function increaseDogeCoins(){
  if(counter % doge.happiness === 0){dogecoins++;}
  document.getElementById("dogecoinValue").innerHTML = "Dogecoins:" + " " + dogecoins;
  window.requestAnimationFrame(increaseDogeCoins);
}
function increaseDogeCoins2(){
  if(counter % doge.happiness === 0){dogecoins++; dogecoins++; dogecoins++;}
  window.requestAnimationFrame(increaseDogeCoins2);
}
function increaseDogeCoins3(){
  if(counter % doge.happiness === 0){dogecoins++; dogecoins++; dogecoins++; dogecoins++; dogecoins++;}
  window.requestAnimationFrame(increaseDogeCoins3);
}
function increaseDogeCoins4(){
  if(counter % doge.happiness === 0){dogecoins++; dogecoins++; dogecoins++; dogecoins++; dogecoins++; dogecoins++; dogecoins++;}
  window.requestAnimationFrame(increaseDogeCoins3);
}
increaseDogeCoins();

//Function to buy fedoras. Core items of the game.//
function buyFedora(){
  if(dogecoins >= 1000 && doge.dankfedora === false){
    buyMoreFedoras.onclick =
      dank.style.visibility = 'visible';
      dogecoins = dogecoins - 1000;
      doge.dankfedora = true;
      increaseDogeCoins2();
  } else if(doge.dankfedora === true && doge.dankerfedora === false && dogecoins >= 10000){
    buyMoreFedoras.onclick =
      danker.style.visibility = 'visible';
      dogecoins = dogecoins - 10000;
      doge.dankerfedora = true;
      increaseDogeCoins3();
  } else if(doge.dankfedora === true && doge.dankerfedora === true && doge.dankestfedora === false && dogecoins >= 100000){
    buyMoreFedoras.onclick=
      dankest.style.visibility = 'visible';
      dogecoins = dogecoins - 100000;
      doge.dankestfedora = true;
      increaseDogeCoins4();
  } else if (doge.dankestfedora === true){
    buyMoreFedoras.onclick = alert("You have the dankest fedora already.");
  } else {
    buyMoreFedoras.onclick = alert("You don't have enough dogecoins.");
  }
}
function buyDanker(){
  if(doge.dankfedora === true && doge.dankerfedora === false){
    buyMoreFedoras.innerHTML = "Buy a Danker Fedora (10,000D)";
  } else if (doge.dankerfedora === true && doge.dankestfedora === false){
    buyMoreFedoras.innerHTML = "Buy the Dankest Fedora (100,000D)";
  }
  window.requestAnimationFrame(buyDanker);
}
buyDanker();

//These functions control the happiness of the doge.
document.getElementById("play").addEventListener("click", playDoge);
function playDoge(){
  if(doge.happiness === 4){
    doge.happiness--;
    doge.happiness--;
    doge.happiness--;
  } else if (doge.happiness > 1){
    doge.happiness--;
    doge.happiness--;
    doge.happiness--;
    doge.happiness--;
    doge.happiness--;
    doge.happiness--;
  }
  if(dogepic.style.transform === 'rotate(0deg)'){
      dogepic.style.transform = 'rotate(360deg)';
    } else {
      dogepic.style.transform = 'rotate(0deg)';
    }
}
function happyDoge(){
  if(counter % 60 === 0 &&
    doge.happiness < 31){
    doge.happiness++;
    doge.happiness++;
    doge.happiness++;
  } window.requestAnimationFrame(happyDoge);
}
happyDoge();
function rave(){
  if(doge.happiness === 1){
    document.body.style.backgroundImage = "url('http://i.imgur.com/jrSMOwd.gif')";
    document.getElementById("rainbowtoad").style.visibility = 'visible';
  } else {
    document.body.style.backgroundImage = "url('http://www.whitewave.com/images/aspect.gif')";
    document.getElementById("rainbowtoad").style.visibility = 'hidden';
  }
  window.requestAnimationFrame(rave);
}
rave();

//Hunger functions.//
mtnDewFeed.addEventListener ("click", feed);
function hunger(){
  if(counter % 60 === 0 && doge.hunger >= 1){
    doge.hunger--;
  }
  if(counter % 120 === 0){
    mtnDewFeed.style.transform = 'rotate(0deg)';
  }
  window.requestAnimationFrame(hunger);
  console.log(doge.hunger);
}
hunger();

function feed(){
  if(doge.hunger <= doge.maxhunger - 5){
    mtnDewFeed.onclick =
    doge.hunger++;
    doge.hunger++;
    doge.hunger++;
    doge.hunger++;
    doge.hunger++;
    mtnDewFeed.style.transform = 'rotate(240deg)';
  } else if (doge.hunger === doge.maxhunger - 4){
    doge.hunger++;
    doge.hunger++;
    doge.hunger++;
    doge.hunger++;
    mtnDewFeed.style.transform = 'rotate(240deg)';
  } else if (doge.hunger === doge.maxhunger - 3){
    doge.hunger++;
    doge.hunger++;
    doge.hunger++;
    mtnDewFeed.style.transform = 'rotate(240deg)';
  } else if (doge.hunger === doge.maxhunger - 2){
    doge.hunger++;
    doge.hunger++;
    mtnDewFeed.style.transform = 'rotate(240deg)';
  } else if (doge.hunger === doge.maxhunger - 1){
    doge.hunger++;
    mtnDewFeed.style.transform = 'rotate(240deg)';
  }
}
document.getElementById("mtnDewPotency").addEventListener ("click", increaseMaxHunger);
function increaseMaxHunger(){
  if(dogecoins >= doge.multipliers * 500){
    dogecoins = dogecoins - doge.multipliers * 500;
    doge.maxhunger++;
    doge.maxhunger++;
    doge.maxhunger++;
    doge.maxhunger++;
    doge.maxhunger++;
    doge.multipliers++;
  }
  document.getElementById("mtnDewPotency").innerHTML = "Increase Mountain Dew CoD Exp Multiplier " + "(" + doge.multipliers * 500 + ")";
}
function hungerDisplayHtml(){
  document.getElementById("hungerDisplay").innerHTML = "Seconds Until Doge Is Kill:" + " " + doge.hunger + "/" + doge.maxhunger;
  window.requestAnimationFrame(hungerDisplayHtml);
}
hungerDisplayHtml();
function dogeIsKill(){
  if(doge.hunger === 0){
    document.getElementById("background").style.visibility = 'visible';
  }
  window.requestAnimationFrame(dogeIsKill);
}
dogeIsKill();

//Misc items to buy. They don't do much.//
buyASnoop.addEventListener ("click", buySnoop);
function buySnoop(){
  if(doge.snooperino === false && dogecoins >= 42000){
    document.getElementById("snoopbuy").onclick =
      snoopdoge.style.visibility = 'visible';
      snoopdoge2.style.visibility = 'visible';
      dogecoins = dogecoins - 42000;
      doge.snooperino = true;
  } else if (doge.snooperino === true){
    alert('You already have snoop dogg');
  } else {
    alert("You don't have enough dogecoins.");
  }
}
buyNipponSteel.addEventListener ("click", buyNippon);
function buyNippon(){
  if(doge.nipponerino === false && dogecoins >= 500000){
    buyNipponSteel.onclick =
      gloriousNippon.style.visibility = 'visible';
      dogecoins = dogecoins - 500000;
      doge.nipponerino = true;
  } else if (doge.nipponerino === true){
    alert('You already have your glorious folded nippon steel');
  }
}

//Winning Function//
function winGame(){
  if(doge.dankestfedora === true && doge.nipponerino === true && doge.happiness === 1){
     euphoria();
  }
  window.requestAnimationFrame(winGame);
}
winGame();
function euphoria(){
  document.getElementById("euphoriapic").style.visibility = 'visible';
  alert('You Win!');
  doge.happiness = 2;
  doge.hunger = 999999;
}
