document.getElementById("buscar").addEventListener("click", function() {
    let cidade = document.getElementById("cidade").value;
    let apiKey = "1961186fa8294b53801171435252803"; // Substituir pela chave da WeatherAPI
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let temperatura = data.current.temp_c;
            document.getElementById("resultado").textContent = `Temperatura: ${temperatura}°C`;
        })
        .catch(() => {
            document.getElementById("resultado").textContent = "Cidade não encontrada.";
        });
});
