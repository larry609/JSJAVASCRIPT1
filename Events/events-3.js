var myButton = document.getElementById("btnClickMe");

function handleClick() {
  alert("addEventListener clicked!");
}

function handleClick2() {
  alert("addEventListener2 clicked!");
}

myButton.addEventListener("click", handleClick, false);
myButton.addEventListener("click", handleClick2, false);
