/**
* Created with webpage
* User: dank
* Date: 2015-04-29
* Time: 05:15 PM
* To change this template use Tools | Templates.
*/
var userInput1=document.getElementById("userInput1");
var userInput2=document.getElementById("userInput2");
var userInput3=document.getElementById("userInput3");
var userInput4=document.getElementById("userInput4");
var display=document.getElementById("testDisplay");

//check1() checks each input field for certain digits and returns a message informing whether the inputs matched the digits or not//
function check1(){
  if(userInput1.value == 1 &&
     userInput2.value == 1 &&
     userInput3.value == 1 &&
     userInput4.value == 1){ document.getElementById("inputAnswer").innerHTML = "'It opened!'";
  }
  else {
  document.getElementById("inputAnswer").innerHTML = "'It's still locked shut.'";
  }
}

//journal() opens up the journal in a pop-up window//
function journal(url) {
  newwindow=window.open(url,'name','height=500,width=500');
  if (window.focus) {newwindow.focus();}
  return false;
}

//caseNotes() opens up another set of hints in a new pop-up window//
function caseNotes(url) {
  newwindow=window.open(url,'name','height=500,width=500');
  if (window.focus) {newwindow.focus();}
  return false;
}