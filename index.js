function Pessoa(nome, sobrenome, idade, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.email = email;
}

function cadastrarPessoa() {
    const nome = prompt("Digite o nome:");
    const sobrenome = prompt("Digite o sobrenome:");
    const idade = prompt("Digite a idade:");
    const email = prompt("Digite o email:");

    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        email: email
    };

    console.log("Dados cadastrados:", pessoa);
    alert("Pessoa cadastrada com sucesso!");
}