/*
  🚀 Crie uma página com um contador de cliques

  Sua página deve conter:

  Um botão ao qual será associado um event listener;
  Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
  Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/
const btn = window.document.querySelector('button#butão');
let contadoraDeClicks = null;
btn.addEventListener('click', () => {
  contadoraDeClicks += 1;
  window.document.querySelector('span#recebe').innerHTML = contadoraDeClicks;
});