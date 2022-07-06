// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function (arg1) {
  arg1.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', function (arg1) {
  arg1.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', function (arg1) {
  if (arg1.key === 'a') {
    // ok
  } else {
    arg1.preventDefault();
  };
});