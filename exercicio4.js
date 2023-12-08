const palavra = "cuscus";
let quantidade = 0;

for (let letra of palavra) {
  if (letra === "a") {
    quantidade++;
  }
}

if (quantidade > 0) {
    console.log(`A letra "a" aparece ${quantidade} vezes na palavra ${palavra}`);
    } else {
    console.log(`A letra "a" não aparece na palavra ${palavra}`);
    }