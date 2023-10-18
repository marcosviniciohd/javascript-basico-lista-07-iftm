window.addEventListener("load", function () {
    var nome = localStorage.getItem("nome");
    if (nome) {
        var vetNomes = nome.split(" ");
        if (vetNomes.length > 1) {
            document.getElementById("painelSucesso").classList.remove("invisivel");
            document.getElementById("painelSucesso").classList.add("visivel");
            document.getElementById("nomeUsuario").textContent = nome;
        } else {
            showMsgErro("Não existe nenhum nome. Clique no link abaixo para inserir um nome.");
        }
    } else {
        showMsgErro("Nome inválido. É necessário informar NOME + SOBRENOME. Clique no link abaixo para inserir um NOME COMPLETO.");
    }
});

function showMsgErro(msg) {
    document.getElementById("painelErro").classList.remove("invisivel");
    document.getElementById("painelErro").classList.add("visivel");
    document.getElementById("msgErro").innerHTML = msg;
}

document.getElementById("entrarComoConvidado").addEventListener("click", function () {
    window.location.href = "felinos.html";
});