window.addEventListener("load", function () {
    alert('Olá, seja bem-vindo');
});

document.getElementById("btnEntrar").addEventListener("click", function () {
    var nome = document.getElementById("txtNome").value.trim();
    if (nome === "") {
        alert("Nome inválido. Favor inserir um nome.");
    } else {
        var vetPalavras = nome.split(" ");
        if (vetPalavras.length > 1) {
            var nomeSobrenome = `${vetPalavras[0]} ${vetPalavras[vetPalavras.length - 1]}`;
            localStorage.setItem("nome", nomeSobrenome);
            window.location.href = "menu.html";
        } else {
            alert("Nome inválido. Inserir o seu Nome + SOBRENOME separado por espaço.");
        }
    }
});
