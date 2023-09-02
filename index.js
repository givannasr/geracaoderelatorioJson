let url = "dados/alunos.json";
var table;
function criaTabela() {
    table =
        `<tr>
 <th>nome</th>
 <th>sobrenome</th>
 <th>idade</th>
 <th>sexo</th>
 <th>cidade</th>
 <th>estado</th>
</tr>`;
};

function dadosJson() {
    $.getJSON(url)
    
        .done(function (data) {
        document.getElementById("titulo").innerHTML = "Retornar dados com JQUERY:<br>";
        document.getElementById("desc-tabela1").innerHTML = `${data['nomeEscola']} ${data['cidade']}`;
        alu = data.alunos;
        $.each(alu, function () {
            table += `<tr>
                <td>${this['nome']}</td>
                <td>${this['sobrenome']}</td>
                <td>${this['idade']}</td>
                <td>${this['sexo']}</td>
                <td>${this['cidade']}</td>
                <td>${this['estado']}</td>
                </tr>`;
        })
        document.getElementById("tb1-alunos").innerHTML = table;
    })
        .fail(function () {
            alert("Ocorreu um erro de leitura do arquivo JSON");
        })
}

dadosJson();
