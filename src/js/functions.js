var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var dadoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    dadoResultado.innerHTML = "Parabéns, você acertou!";
  } else if (chute > 10 || chute < 0) {
    dadoResultado.innerHTML = "Insira um número de 0 a 10.";
  } else {
    dadoResultado.innerHTML = "Errou! Tente outra vez.";
  }
}