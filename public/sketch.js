/*
    ~ * ~ * ~ * 
    CLIENT
    ~ * ~ * ~ * 
*/

//
//  SOCKET SERVER STUFF
//

//open and connect the input socket
let socket = io('/');

//listen for the confirmation of connection 
socket.on('connect', () => {
  console.log('now connected to server');
});

//
// MAIN
//

main();
instanceTest();

function main(){
  console.log('idk');
}

//
//  p5 Instances
//

// import pofla from "./modes/pointer-flocking.js"; //pofla????????

// let pointerFlocking = new p5(pofla, "test");

function instanceTest(){
  for (let i = 0; i < 300; i ++){
    let instanceTest = new p5(instest, "test");

  }
}




