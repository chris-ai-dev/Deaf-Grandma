function deafGrandma() {
// const prompt = require("prompt-sync")();
// var input = prompt("HEY KID!\n");
// console.log(input)


let count = 1;
let input = window.prompt('HEY KID!');
while(count < 2) {

  // if(count ===2) {
  //   alert("LATER, SKATER!");
  // }
  if(input ==="GOODBYE!") {
    input = window.prompt("LEAVING SO SOON?");
    count++;
    alert("LATER, SKATER!");
    break;
  }
  if(input === "") {
    input = window.prompt("WHAT?!");
  }else if(input !== input.toUpperCase()) {
    input = window.prompt("SPEAK UP, KID!");
  }else if(input === input.toUpperCase() && input !== "GOODBYE!" ) {
    input = window.prompt("NO, NOT SINCE 1946!");
  }
}
    
}

deafGrandma();