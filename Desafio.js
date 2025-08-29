let readline = require('readline-sync');

console.log("===== Olá! Seja bem-vindo à Farmácia Softex! =====\n");

let cadastro = readline.question("Deseja criar seu cadastro para comprar? (s/n) ");

if (cadastro != "n") {
    console.log("Vamos iniciar seu cadastro! ");

    let nome = readline.question("Insira seu nome: ");
    let cpf = readline.question("Insira seu CPF: ");
    let datadenascimento = readline.question("Insira sua data de nascimento: ");
    let cep = readline.question("Insira seu CEP: ");
    let email = readline.question("Insira seu Email:  ");
    let telefone = readline.question("Insira seu Telefone: ");

    console.log("Agora vamos criar sua senha de acesso!");
    let senha = readline.question("Insira uma senha de acesso: ");

    console.log("Perfeito, " + nome + " Seu cadastro foi realizado com sucesso.");
    console.log("\n________Farmacia Softex_________");

    console.log("___________SUAS INFORMAÇÕES__________\n");
    console.log("Nome: " + nome);
    console.log("CPF: " + cpf);
    console.log("Data de nascimento: " + datadenascimento);
    console.log("CEP: " + cep);
    console.log("Email: " + email);
    console.log("Telefone: " + telefone);
    console.log("Senha: " + senha);

    let listaRemedios = [
        "1-Losartana (R$ 12,50)",
        "2-Dipirona sódica (R$ 10,70)",
        "3-Hidroclorotiazida (R$ 18,20)",
        "4-Nimesulida (R$ 22,50)",
        "5-Buscopan (R$ 7,50)"
    ];

    let carrinho = [];

    let menu = readline.question("Deseja iniciar sua compra? (sim/não) ");

    while (menu == "sim") {
        console.log(listaRemedios);
        let escolhaproduto = readline.question("Escolha seu produto na lista acima");
        let qtdproduto = readline.question("Quantas unidades vc vai querer? ");

        switch (escolhaproduto) {
            case "1":
                carrinho.push({ produto: listaRemedios[0], qtd: qtdproduto, preco: 12.50});
                console.log("Valor a pagar: R$ " + (qtdproduto * 12.5));
                break;
            case "2":
                carrinho.push({ produto: listaRemedios[1], qtd: qtdproduto, preco: 10.70});
                console.log("Valor a pagar: R$ " + (qtdproduto * 10.7));
                break;
            case "3":
                carrinho.push({ produto: listaRemedios[2], qtd: qtdproduto, preco: 18.20});
                console.log("Valor a pagar: R$ " + (qtdproduto * 18.2));
                break;
            case "4":
                carrinho.push({ produto: listaRemedios[3], qtd: qtdproduto, preco: 22.50});
                console.log("Valor a pagar: R$  " + (qtdproduto * 22.5));
                break;
            case "5":
                carrinho.push({produto:listaRemedios[4], qtd: qtdproduto, preco: 7.50});
                console.log("Valor a pagar: R$ " + (qtdproduto * 7.5));
                break;
            default:
                console.log("Opção não aceita");
        }

        menu = readline.question("Vc ainda deseja comprar? ");
        if (menu == "nao") {
            console.log("\nCompra finalizada com sucesso!");
            break;
        }
    }
console.log("\n========= RESUMO DA COMPRA =========\n");

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++) {
    let item = carrinho[i];
    let valorTotalItem = item.qtd * item.preco;
    totalCompra += valorTotalItem;
    console.log(
        item.produto + 
        " | Qtd: " + item.qtd + 
        " | Unitário: R$ " + item.preco +
        " | Total: R$ " + valorTotalItem
    );
}

console.log("------------------------------------");
console.log("TOTAL A PAGAR: R$ " + totalCompra);
console.log("------------------------------------\n");
console.log("\n========= PAGAMENTO =========\n");

let pagamento = readline.question("Escolha a forma de pagamento (1-Dinheiro / 2-Cartão): ");

if (pagamento == "1") {
    console.log("Você escolheu pagar em Dinheiro.");
} else {
    console.log("Você escolheu pagar com Cartão.");
}

console.log("Compra finalizada com sucesso! Obrigado pela preferência.\n");

} else {
    console.log("Tudo bem, estamos a disposição.");
}
