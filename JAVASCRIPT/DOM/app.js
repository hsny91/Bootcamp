let h2s=document.querySelectorAll('h2')

const elementsToChange = document.querySelectorAll('.js-target');
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerHTML = "Modified by JavaScript!";
}


//event Listener
const button = document.querySelector('.event-button');
button.addEventListener('click', function () {
  alert("Hey there!");
});