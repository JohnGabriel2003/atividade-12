function login() {
    const login = "aluno";
    const senha = 456;

    let login1 = prompt("Digite o seu login: ");
    let senha1 = parseInt(prompt("Digite a sua senha: "));

    if(login1 == login && senha1 == senha) {
        alert("Login realizado com sucesso!");
    }
    else {
        alert("Login Falhou! Nome ou Senha incorretos!");
    }
}