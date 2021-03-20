/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/
const character='f';
const timesToReapet=5;
let myString="";

for(let i=0;i<timesToReapet;i++){
    myString+=character
}

console.log(myString)//"ffffff"