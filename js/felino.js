document.getElementById("gato01").addEventListener("click", function() {
    alert(`Oi ${localStorage.getItem("nome")}, tudo bem com você?`);
});


carinhos = 0;
carinhosElement = document.querySelector(".boxInterna:nth-child(2) p:last-child");
document.querySelector(".boxInterna:nth-child(2) img").addEventListener("click", function() {
    carinhos++;
    carinhosElement.textContent = "Carinhos: " + carinhos;
});

gato03Image = document.querySelector(".boxInterna:nth-child(3) img");
gato03Image.addEventListener("mouseover", function() {
    gato03Image.src = "Imagens/gato06.gif";
});

gato03Image.addEventListener("mouseout", function() {
    gato03Image.src = "Imagens/gato03.gif";
});

gato04Text = document.getElementById("gato4");
gato04Image = document.querySelector(".boxInterna:nth-child(4) img");
gato04Image.addEventListener("mouseover", function() {
    gato04Text.textContent = "Ai, pare de fazer cócegas!";
});

gato04Image.addEventListener("mouseout", function() {
    gato04Text.textContent = "la la la la...";
});

gerarNumeroSorteButton = document.querySelector(".boxInterna:nth-child(5) input[type='button']");
numeroSorteInput = document.querySelector(".boxInterna:nth-child(5) input[type='text']");

gerarNumeroSorteButton.addEventListener("click", function() {
    numeroSorte = Math.floor(Math.random() * 100) + 1;
    numeroSorteInput.value = numeroSorte;
});