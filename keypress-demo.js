// Så här namnges konstanter i JavaScript.
const CAR_STEP_SIZE = 20;

let span = document.getElementById("result");
let car = document.getElementById("car");

document.body.onkeydown = function (event) {
  span.innerText = event.key;

  if (event.key === "ArrowDown") {
    // Flytta bilen nedåt i sidan. I positiv riktning i Y-led i sidans koordinatsystem.
    moveY(car, CAR_STEP_SIZE);
  }
  if (event.key === "ArrowUp") {
    moveY(car, -CAR_STEP_SIZE);
  }
  if (event.key === "ArrowRight") {
    moveX(car, CAR_STEP_SIZE);
  }
  if (event.key === "ArrowLeft") {
    moveX(car, -CAR_STEP_SIZE);
  }
  if (event.key === "a") {      
    rotate(car, 90);
  }
  if (event.key === "s") {
    rotate(car, -90);
  }
};

function moveY(element, distance) {
  // top är t.ex. 100px
  let top = getComputedStyle(element).top;

  // ta bort "px" från slutet av top, genom att ersätta det med en tom sträng
  top = top.replace("px", "");

  // top är en sträng, för att kunna lägga till distance måste vi konvertera den till ett tal.
  // för att få ett heltal så avrundar vi top.
  let newTop = Math.round(Number(top)) + distance;

  //när man ska sätta nytt värde på top ska det vara en sträng med enhet.
  element.style.top = newTop + "px";
}
function moveX(element, distance) {
  let left = getComputedStyle(element).left;

  left = left.replace("px", "");

  let newLeft = Math.round(Number(left)) + distance;

  element.style.left = newLeft + "px";
}

let car_rotation = 0;

function rotate(element, degrees) {
  var s = "rotate(" + (degrees + car_rotation) + "deg)";
  car_rotation += degrees;
  if (element.style) {
    // regular DOM Object
    element.style.MozTransform = s;
    element.style.WebkitTransform = s;
    element.style.OTransform = s;
    element.style.MSTransform = s;
    element.style.transform = s;
  } else if (element.css) {
    // JQuery Object
    element.css("-moz-transform", s);
    element.css("-webkit-transform", s);
    element.css("-o-transform", s);
    element.css("-ms-transform", s);
    element.css("transform", s);
  }
  element.setAttribute("rotation", d);
}
