let body = document.getElementsByTagName("body")[0];
let form = document.getElementsByTagName("form")[0];
let submitBtn = document.querySelector("#sumbit-btn");

submitBtn.addEventListener("click", (element) => {
  element.preventDefault();
  let fontSize = document.querySelector("#fontsize");
  let colorInput = document.querySelector("#fontcolor");

  console.log(fontSize.value);
  console.log(colorInput.value);
  body.style.backgroundColor = `${colorInput.value}`;
  body.style.fontSize = `${fontSize.value}px`
})