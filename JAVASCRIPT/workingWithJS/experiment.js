const monthlyRent = 500;

let yearlyRent = monthlyRent * 12;

console.log(yearlyRent); // cikti 6000 olur.

console.log(yearlyRent, monthlyRent); // cikti 6000 500

yearlyRent = 1;

console.log(yearlyRent); //cikti ilk satir 6000 ikinci satir 1 olur 
const firstName = "Brian"
const lastName = "Holt"
const sentence = `Hello ${firstName} ${lastName} ! How are you ?!`
console.log(sentence) //String

const num = 5.00001; //number
console.log(num + 1.123);

const isSkyBlue = true; //boolean
console.log(isSkyBlue) //true

let greeting;
//if statements
if (isSkyBlue) {
    console.log("The sky is Blue")
    greeting = "It must be nice weather"
    console.log('lol');
} else {
    console.log("The sky is not blue?")
    greeting = "It must be bad weater"
}
console.log(greeting)

if (2 + 2 === 4) { // ===
    console.log("Hooray! Math still works")
} else {
    console.log("Uh panic?")
}


//else if statment
const friendsAtYourParty = 10;
if (friendsAtYourParty === 0) {
    console.log("Cool ,now I have all the nachos to mayself")
} else if (friendsAtYourParty <= 4) {
    console.log("Perfect amount to play some Mario Kart")
} else {
    console.log("Woooooooo, play the dance musik")
}

//loop 
let atParty = 0;
atParty = atParty + 1
atParty = atParty + 1
console.log(atParty) //2

while (atParty < 10) {
    atParty = atParty + 1;
}
console.log(atParty) //10

//atPart+=1   ===>atParty=atParty+1

for (let i = 0; i <= 10; i++) {
    atParty++;
    console.log(atParty);
}
console.log(atParty);

//scope
let friendAtYourParty=0;
for(let i=0;i<10;i++){
    friendAtYourParty++
    console.log(friendAtYourParty)
}

///Math & substr
console.log(Math.round(5.9))//6

const names='Brian Holt'
console.log(names.substr(4,3))//n H
