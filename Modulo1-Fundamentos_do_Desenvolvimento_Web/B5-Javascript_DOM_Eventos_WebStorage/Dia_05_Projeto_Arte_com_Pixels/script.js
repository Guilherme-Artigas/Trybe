const ulPixelBoard = window.document.querySelector('ul#pixel-board');
for (let i = 1; i <= 25; i += 1) {
  const itemLista = window.document.createElement('li');
  itemLista.className = 'pixel white';
  itemLista.style.height = '42px';
  itemLista.style.width = '42px';
  ulPixelBoard.appendChild(itemLista);
}

let selected = 'black';

const corPreto = window.document.querySelector('li.black');
const corbottleGreen = window.document.querySelector('li.bottleGreen');
const coroceanGreen = window.document.querySelector('li.oceanGreen');
const corblueVioletWheel = window.document.querySelector('li.blueVioletWheel');

corPreto.addEventListener('click', function () {
  corbottleGreen.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  corPreto.classList.add('selected');
  selected = 'black';
});
corbottleGreen.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  corbottleGreen.classList.add('selected');
  selected = 'bottleGreen';
});
coroceanGreen.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  corbottleGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  coroceanGreen.classList.add('selected');
  selected = 'oceanGreen';
});
corblueVioletWheel.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  corbottleGreen.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.add('selected');
  selected = 'blueVioletWheel';
});

ulPixelBoard.addEventListener('click', function (arg1) {
  arg1.target.className = 'pixel ' + selected;
})