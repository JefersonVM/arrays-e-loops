const nome = "Luiz Otávio Miranda";

let encontrado = false;

for (let i = 0; i < nome.length; i++) {
  if (nome[i] === "h") {
    encontrado = true;
    console.log("Encontrei a letra informada");
    break;
  }
}

if (!encontrado) {
  console.log("Não encontrei a letra informada");
}
