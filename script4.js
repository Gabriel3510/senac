document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let valido = true;

    document.getElementById("erroNome").textContent = "";
    document.getElementById("erroEmail").textContent = "";
    document.getElementById("erroSenha").textContent = "";

    if (nome.length < 3) {
        document.getElementById("erroNome").textContent = "Nome deve ter pelo menos 3 caracteres";
        valido = false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("erroEmail").textContent = "E-mail inválido";
        valido = false;
    }
    if (senha.length < 6) {
        document.getElementById("erroSenha").textContent = "Senha deve ter pelo menos 6 caracteres";
        valido = false;
    }

    if (valido) {
        alert("Cadastro realizado com sucesso!");
    }
});
