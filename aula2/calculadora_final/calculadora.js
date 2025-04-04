function calculadora() {
    const valor1 = parseFloat(prompt("Digite o primeiro número:"));
    const operacao = prompt("Digite a operação (+, -, *, /):");
    const valor2 = parseFloat(prompt("Digite o segundo número:"));
  
    // Verifica se os números são válidos
    if (isNaN(valor1) || isNaN(valor2)) {
      alert("Por favor, insira números válidos.");
      return;
    }
  
    let resultado;
  
    // Executa a operação de acordo com a entrada do usuário
    switch (operacao) {
      case "+":
        resultado = valor1 + valor2;
        break;
      case "-":
        resultado = valor1 - valor2;
        break;
      case "*":
        resultado = valor1 * valor2;
        break;
      case "/":
        if (valor2 === 0) {
          alert("Divisão por zero não é permitida!");
          return;
        }
        resultado = valor1 / valor2;
        break;
      default:
        alert("Operação inválida!");
        return;
    }
  
    alert("O resultado é: " + resultado);
  }
  
  // Executa a calculadora
  calculadora();
  