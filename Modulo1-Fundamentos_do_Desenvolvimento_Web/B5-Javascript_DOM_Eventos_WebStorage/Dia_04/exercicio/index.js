// Funcionalidade que altera a cor de fundo da página.
const colorName = window.document.querySelector('input#background');
function corFundo () {
  window.document.querySelector('body').style.background = colorName.value;
};
colorName.addEventListener('keyup', corFundo);

// Funcionalidade que altera a cor da letra.
const fontColor = window.document.querySelector('input#color');
function corLetra () {
  window.document.querySelector('body').style.color = fontColor.value;
};
fontColor.addEventListener('keyup', corLetra);

// Funcionalidade que altera o tamanho da fonte.
const tamanhoFonte = window.document.querySelector('input#fontSize');
function sizeFont () {
  window.document.querySelector('body').style.fontSize = tamanhoFonte.value + 'px';
};
tamanhoFonte.addEventListener('change', sizeFont);

// Funcionalidade que altera o espaçamento entre as linhas.
const entreLinhas = window.document.querySelector('input#lineHeight');
function espacoEntreLinhas () {
  window.document.querySelector('body').style.lineHeight = entreLinhas.value + 'px';
};
entreLinhas.addEventListener('change', espacoEntreLinhas);

// Funcionalidade que altera a fonte.
const fontFamily = window.document.querySelector('input#fontFamily');
function familiaFont () {
  window.document.querySelector('body').style.fontFamily = fontFamily.value;
};
fontFamily.addEventListener('change', familiaFont);



localStorage.setItem('pageBack', colorName.value); // salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
window.document.querySelector('body').style.background = localStorage.getItem('pageBack');