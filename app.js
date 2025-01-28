alert('Bem vindos ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto =  parseInt (Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;
//Enquanto não acertar n ganha
while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); 
    // Se o chute for igual ao número secreto 
    if (chute == numeroSecreto) {
      break
    } else { 
      if (chute > numeroSecreto) {
      alert (`O número Secreto é menor que ${chute}`);
    } else {
      alert(`O número Secreto é maior que ${chute}`);
     }
   // tentativas = tentativas + 1;
    tentativas++;
    }
  }
let palavraTentativa =  tentativas >1? 'tentativas' : 'tentativa';
  alert(`Parabéns você conseguiu, descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); 
  //if (tentativas > 1) {
 // alert(`Parabéns você conseguiu, descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//}else {
  //alert(`Parabéns você conseguiu, descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`); }
