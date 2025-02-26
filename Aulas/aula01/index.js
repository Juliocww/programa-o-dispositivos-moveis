// variáveis 
let variavel_local = 10; // number
const constante = []; // array 
const objeto = {}; // objeto
const msg = "Texto"; // string
let status = false; // bool

// funções 
function soma(a, b) {
  return a + b;
}
let resultado = soma(1, 2);  // Alterado para 'let' para permitir modificação

const multiplica = (a, b) => { 
  return a * b;  // Função 'multiplica' retorna o resultado
};

resultado = multiplica(1, 2);  // Atribuição funciona corretamente agora

// Função de tempo com setInterval
function tempo(duracao) {
  console.log("Iniciando o temporizador...");
  
  // Este setInterval será chamado após o 'duracao' em milissegundos
  setTimeout(() => {  // Mudança para setTimeout para executar uma vez após a duração
    console.log('Esperou...'); // Exibe "Esperou..." após a duração do setTimeout
  }, duracao);

  console.log("passou o tempo"); // Exibe isso imediatamente após chamar a função
}

// Chamando a função tempo com 3000ms de duração
tempo(3000);
