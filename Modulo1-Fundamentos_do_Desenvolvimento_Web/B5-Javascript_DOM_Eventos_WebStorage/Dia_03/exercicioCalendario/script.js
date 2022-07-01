function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let paiUl = window.document.querySelector('ul#days');
for (let indice of decemberDaysList) {
  let itemLista = window.document.createElement('li');
  itemLista.classList = 'day';
  if (indice === 24 || indice === 25 || indice === 31) {
    itemLista.classList.add('holiday');
  }
  if (indice === 4 || indice === 11 || indice === 18 || indice === 25) {
    itemLista.classList.add('friday');
  };
  paiUl.appendChild(itemLista).innerText = indice;
};

function pedreiro(pai, tag, texto, id, classe) {
  let elementFather = window.document.querySelector(pai);
  let element = window.document.createElement(tag);
  element.innerText = texto;
  element.id = id;
  element.classList = classe;
  return elementFather.appendChild(element);
};
pedreiro('div.buttons-container', 'button', 'Feriados', 'btn-holiday');
pedreiro('div.buttons-container', 'button', 'Sextas-Feiras', 'btn-friday');

function feriados () {
  let holidays = window.document.querySelectorAll('li.holiday');
  for (let indice of holidays) {
    if (indice.style.backgroundColor === 'rgb(240, 225, 0)') {
      indice.style.background = 'rgb(238, 238, 238)';
    } else {
      indice.style.background = 'rgb(240, 225, 0)';
    };
  };
};

let btnHoliday = window.document.querySelector('button#btn-holiday');
btnHoliday.addEventListener('click', feriados);

function mudaSextas () {
  let sL = window.document.querySelectorAll('li.friday');
  let sextas = ['4', '11', '18', '25'];
  for (let i in sL) {
    if (sL[i].innerText === '4' || sL[i].innerText === '11' || sL[i].innerText === '18' || sL[i].innerText === '25') {
      sL[i].innerText = 'Folga!';
    } else if (sL[i].innerText === 'Folga!') {
      sL[i].innerText = sextas[i];
    };
  };
};

let btnFriday = window.document.querySelector('button#btn-friday');
btnFriday.addEventListener('click', mudaSextas);

function teste () {
  btnFriday.style.fontSize = '20px';
  btnFriday.style.transition = '0.1s';
};
function teste2 () {
  btnFriday.style.fontSize = '15px';
  btnFriday.style.transition = '0.1s';
}
btnFriday.addEventListener('mouseover', teste);
btnFriday.addEventListener('mouseout', teste2);