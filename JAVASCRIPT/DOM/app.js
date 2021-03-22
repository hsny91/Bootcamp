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

const input = document.querySelector('.input-to-copy');
  const paragraph = document.querySelector('.p-to-copy-to');

  input.addEventListener("keyup", function() {
    paragraph.innerText  = input.value;
  })

  const input2 = document.querySelector('.color-input');
  const paragraph2 = document.querySelector('.color-box');

  input2.addEventListener("change", function() {
    paragraph2.style.backgroundColor  = input2.value;
  });
  //event deligation
  document.querySelector('.button-container').addEventListener('click', function(event) {
      if(event.target.tagName==="BUTTON"){
        alert(`You clicked on button ${event.target.innerText}`);
        event.currentTarget.style.backgroundColor="orange"
      }
    
  });