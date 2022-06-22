const peca = '';
if (peca.toLowerCase() === 'peao') {
  console.log('Peão -> Se move somente para frente, uma casa por vez.');
} else if (peca.toLowerCase() === 'bispo') {
  console.log('Bispo -> Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.');
} else if (peca.toLowerCase() === 'torre') {
  console.log('Torre -> A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.');
} else if (peca.toLowerCase() === 'cavalo') {
  console.log('Cavalo -> O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.');
} else if (peca.toLowerCase() === 'rainha') {
  console.log('Rainha -> Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.');
} else if (peca.toLowerCase() === 'rei') {
  console.log('Rei -> O rei pode se mover para qualquer casa adjacente.');
} else {
  console.log('ERRO, Peça não encontrada!');
};
