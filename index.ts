// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Teste</h1>`;

let x = 10;

let texto: string = `Testando um texto com concatenacao de numero ${x}`;

console.log('O valor de x é: ' + x);
console.log(texto);
