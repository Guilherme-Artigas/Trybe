// Montagem do quadrado com cada pixel.
// Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, em que N é o número inserido no input. Ou seja, se o valor passado para o input for igual a 7, ao clicar no botão, será gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);
const ulPixelBoard = window.document.querySelector('ul#pixel-board');
// ulPixelBoard.style.border = '1px solid black';
ulPixelBoard.style.height = '100%';
ulPixelBoard.style.width = '100%';

for (let i = 1; i <= 900; i += 1) {
  const liItem = window.document.createElement('li');
  liItem.classList = 'pixel'
  ulPixelBoard.appendChild(liItem);
};
// Fim da montagem do quadrado com pixels
// Código para manipular paleta e o pixel board
const corPreta = window.document.querySelector('li.black');
corPreta.classList.add('selected');
const corBotleGreen = window.document.querySelector('li.bottleGreen');
const corOceanGreen = window.document.querySelector('li.oceanGreen');
const corOldGold = window.document.querySelector('li.oldGold');
const sItem = window.document.querySelectorAll('li.pixel');

let corSelecionada = 'black';

corPreta.addEventListener('click', function () {
  corSelecionada = 'black';
  corBotleGreen.classList.remove('selected');
  corOceanGreen.classList.remove('selected');
  corOldGold.classList.remove('selected');
  corPreta.classList.add('selected');
});
corBotleGreen.addEventListener('click', function () {
  corSelecionada = 'bottleGreen';
  corPreta.classList.remove('selected');
  corOceanGreen.classList.remove('selected');
  corOldGold.classList.remove('selected');
  corBotleGreen.classList.add('selected');
});
corOceanGreen.addEventListener('click', function () {
  corSelecionada = 'oceanGreen';
  corPreta.classList.remove('selected');
  corBotleGreen.classList.remove('selected');
  ulPixelBoard.classList.remove('selected');
  corOceanGreen.classList.add('selected');
});
corOldGold.addEventListener('click', function () {
  corSelecionada = 'oldGold';
  corPreta.classList.remove('selected');
  corBotleGreen.classList.remove('selected');
  corOceanGreen.classList.remove('selected');
  corOldGold.classList.add('selected');
});
ulPixelBoard.addEventListener('click', function (evento) {
  evento.target.className = 'pixel ' + corSelecionada;
});
// Fim do código para manipular paleta e o pixel board
// 
const botaoLimpa = window.document.querySelector('button#clear-board');
botaoLimpa.addEventListener('click', function () {
  for (let i of sItem) {
    i.className = 'pixel white';
  };
});
