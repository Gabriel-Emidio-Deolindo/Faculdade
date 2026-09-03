/*Função tradicional
function calcularQuadrado(numero) {
    return numero * numero;
}
//Mesma função com Arrow Function:

// Arrow function com sintaxe completa
const calcularQuadrado = (numero) => {
    return numero * numero;
};

// Arrow function com retorno implícito (mais concisa)
const calcularQuadrado = (numero) => numero * numero;

// Se tivesse apenas um parâmetro, poderia até remover os parênteses
const calcularQuadrado = numero => numero * numero;

//Arquivo script1.js completo com Arrow Function:

// Substituindo a função tradicional por arrow function
*/
const calcularQuadrado = (numero) => numero * numero;

document.getElementById('numeroForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtém o valor do número digitado
    const numero = parseFloat(document.getElementById('numero').value);
    
    // Chama a função arrow para calcular o quadrado
    const resultado = calcularQuadrado(numero);
    
    // Exibe o resultado na página
    document.getElementById('resultado').textContent = `O quadrado é: ${resultado}`;
});
