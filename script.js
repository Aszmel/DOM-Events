var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", addEventAfterClick);

input.addEventListener("keypress", addEventAfterKey);

function inputLength() {
  return input.value.length;
}

function addListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addEventAfterClick() {
  if (inputLength() > 0) {
    addListElement();
  }
}

function addEventAfterKey(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    addListElement();
  }
}

//  Also alternative version is:

// source: <div id="one">one</div>
// var d1 = document.getElementById('one');
// d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

//  At this point, the new structure is:
// <div id="one">one</div
// <div id="two">two</div>
