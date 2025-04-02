document.getElementById("btnMensagem").addEventListener("click", function() {
    let nome = prompt("Qual é o seu nome?");
    if (nome) {
        alert("Olá, " + nome + "! Bem-vindo!");
    } else {
        alert("Você não digitou seu nome.");
    }
});
