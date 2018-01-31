function helloIronhack() {
  return "Hello Ironhackers!";
}

function sumArray(array) {
  // return 0;
    // return array.length < 1 ? 0 : array[0];
    if (array.length<1){
      return 0;
    } else if(array.length === 1){
      return array[0];
    } else {
      return array[0] + array[1];
    }
}