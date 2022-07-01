// Funcionalidade que altera a cor de fundo da página.
const colorName = window.document.querySelector('input#background');
const corpo = window.document.querySelector('body');
function corFundo () {
  corpo.style.background = colorName.value;
  localStorage.setItem('corFundo', colorName.value);
};
colorName.addEventListener('keyup', corFundo);

// Funcionalidade que altera a cor da letra.
const fontColor = window.document.querySelector('input#color');
function corLetra () {
  corpo.style.color = fontColor.value;
  localStorage.setItem('corLetra', fontColor.value);
};
fontColor.addEventListener('keyup', corLetra);

// Funcionalidade que altera o tamanho da fonte.
const tamanhoFonte = window.document.querySelector('input#fontSize');
function sizeFont () {
  corpo.style.fontSize = tamanhoFonte.value + 'px';
  localStorage.setItem('fontSize', tamanhoFonte.value + 'px');
};
tamanhoFonte.addEventListener('change', sizeFont);

// Funcionalidade que altera o espaçamento entre as linhas.
const entreLinhas = window.document.querySelector('input#lineHeight');
function espacoEntreLinhas () {
  corpo.style.lineHeight = entreLinhas.value + 'px';
  localStorage.setItem('alturaLinhas', entreLinhas.value + 'px');
};
entreLinhas.addEventListener('keyup', espacoEntreLinhas);

// Funcionalidade que altera a fonte.
const fontFamily = window.document.querySelector('input#fontFamily');
function familiaFont () {
  corpo.style.fontFamily = fontFamily.value;
  localStorage.setItem('ff', fontFamily.value);
};
fontFamily.addEventListener('change', familiaFont);

function renderizacao () {
  corpo.style.background = localStorage.getItem('corFundo');
  corpo.style.color = localStorage.getItem('corLetra');
  corpo.style.fontSize = localStorage.getItem('fontSize');
  corpo.style.lineHeight = localStorage.getItem('alturaLinhas');
  corpo.style.fontFamily = localStorage.getItem('ff');
};

window.onload = function () {
  renderizacao();
};

// localStorage.setItem('', '');
// localStorage.getItem('');