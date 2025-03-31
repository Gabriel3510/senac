document.getElementById("adicionar").addEventListener("click", function() {
    let input = document.getElementById("item");
    let texto = input.value.trim();

    if (texto !== "") {
        let li = document.createElement("li");
        li.textContent = texto;

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function() {
            li.remove();
        };

        li.appendChild(botaoRemover);
        document.getElementById("lista").appendChild(li);
        input.value = "";
    }
});
