var button = document.querySelector("#enter");
var input = document.querySelector("#userInput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function deleteFunc(){
    var parent = event.target.parentNode;
    var grandParent = parent.parentNode;
    grandParent.removeChild(parent);

}

function toggleOn(){
    event.target.classList.toggle("done");
 }



for (i = 0; i < li.length; i++){
  var btn = document.createElement("BUTTON");
  btn.className = "delBtn";
  var btnName = document.createTextNode("Delete");
  btn.appendChild(btnName);
  li[i].appendChild(btn);
}



for(i = 0; i < li.length; i++){
  document.querySelectorAll(".delBtn")[i].addEventListener("click", deleteFunc);
}

function inputLength(){
  return input.value.length;
}

function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var btn = document.createElement("BUTTON");
  btn.className = "delBtn";
  var btnName = document.createTextNode("Delete");
  btn.appendChild(btnName);

  li.appendChild(btn);

  btn.addEventListener("click", deleteFunc);
}

function addListAfterClick(){
  if (inputLength() > 0){
    createListElement();
  }
}
 function addListAfterKeypress(event){
   if (inputLength() > 0 && event.keyCode === 13) {
     createListElement();
  }
 }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleOn);

