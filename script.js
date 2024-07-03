console.log("Teste");

// Calculo
function calcular() {
  const sexo = document.querySelector("#sexo");
  console.log(sexo.value);
  const idade = document.querySelector("#idade");
  console.log(idade.value);
  const atividade = document.querySelector("input[name=atividade]:checked");
  console.log(atividade.value);
  const peso = document.querySelector("#peso");
  console.log(peso.value);
  const altura = document.querySelector("#altura");
  console.log(altura.value);

  if (idade.value && peso.value && altura.value) {
    if (atividade.value == "nenhuma") {
      var fator = 1;
    }
    if (atividade.value == "moderada") {
      var fator = 1.3;
    }
    if (atividade.value == "intensa") {
      var fator = 1.5;
    }

    if (sexo.value == "masculino") {
      console.log("MASCULINO");

      var caloriaTotal = Math.round(
        (88.362 +
          13.397 * peso.value +
          4.799 * altura.value -
          5.677 * idade.value) *
          fator
      );
    }
    if (sexo.value == "feminino") {
      console.log("FEMININO");
      var caloriaTotal = Math.round(
        (447.593 +
          9.247 * peso.value +
          3.098 * altura.value -
          4.33 * idade.value) *
          fator
      );
    }
    const respostaCaloria = document.querySelector("#caloriaTotal");
    const caloriaPerderMin = document.querySelector("#caloriaPerderMin");
    const caloriaPerderMax = document.querySelector("#caloriaPerderMax");
    const caloriaGanharMin = document.querySelector("#caloriaGanharMin");
    const caloriaGanharMax = document.querySelector("#caloriaGanharMax");
    const caloriaManter = document.querySelector("#caloriaManter");

    respostaCaloria.innerHTML = caloriaTotal;
    caloriaPerderMin.innerHTML = caloriaTotal - 400;
    caloriaPerderMax.innerHTML = caloriaTotal - 600;
    caloriaGanharMin.innerHTML = caloriaTotal + 400;
    caloriaGanharMax.innerHTML = caloriaTotal + 600;
    caloriaManter.innerHTML = caloriaTotal;
    console.log(caloriaTotal);
  } else {
    alert("Preencha todos os campos para prosseguir!");
    return;
  }
}

// Formulas

const perguntas = document.querySelectorAll("dt button");

console.log(perguntas);

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  const resposta2 = document.querySelector("dd" + "#" + controls);
  console.log(resposta2);
  resposta.classList.toggle("ativa");
  resposta2.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
