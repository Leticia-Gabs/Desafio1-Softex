let readline = require('readline-sync');

let comprar = readline.question("Olá você deseja realizar uma compra?(S|N) ");

if (comprar != "N") {
    console.log("Vamos iniciar seu cadastro: ");

    let nome = readline.question("Insira seu nome: ");
    let cpf = readline.question("Insira seu CPF: ");
    let datadenascimento = readline.question("Insira sua data de nascimento: ");
    let cep = readline.question("Insira seu CEP: ");
    let email = readline.question("Insira seu Email:  ");
    let telefone = readline.question("Insira seu Telefone: ");

    console.log("Agora vamos criar sua senha de acesso: ");
    let senha = readline.question("Insira uma senha de acesso: ");

    console.log("Perfeito, " + nome + " Seu cadastro foi realizado com sucesso.");
    console.log("________Farmacia Softex_________");

    console.log("Escolha uma categoria: ");

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
        "5-Buscopan (R$ 7,50)",
        "6-ENCERRAR COMPRA!"
    ];

    let menu = readline.question("Vc deseja comprar?");

    let carrinho = [];

    while (menu == "sim") {
        console.log(listaRemedios);
        let escolhaproduto = readline.question("Escolha seu produto");
        let qtdproduto = readline.question("Quantas unidades? ");

        switch (escolhaproduto) {
            case "1":
                carrinho.push({ produto: listaRemedios[0], qtd: qtdproduto, preco: 12.5});
                console.log("Valor a pagar: R$ " + (qtdproduto * 12.5));
                break;
            case "2":
                carrinho.push({ produto: listaRemedios[1], qtd: qtdproduto, preco: 10.7});
                console.log("Valor a pagar: R$ " + (qtdproduto * 10.7));
                break;
            case "3":
                carrinho.push({ produto: listaRemedios[2], qtd: qtdproduto, preco: 18.2});
                console.log("Valor a pagar: R$ " + (qtdproduto * 18.2));
                break;
            case "4":
                carrinho.push({ produto: listaRemedios[3], qtd: qtdproduto, preco: 22.5});
                console.log("Valor a pagar: R$  " + (qtdproduto * 22.5));
                break;
            case "5":
                carrinho.push({produto:listaRemedios[4], qtd: qtdproduto, preco: 7.5});
                console.log("Valor a pagar: R$ " + (qtdproduto * 7.5));
                break;
            default:
                console.log("Opção não aceita");
        }

        menu = readline.question("Vc ainda deseja comprar?");
        if (menu == "nao") {
            console.log("\nCompra finalizada com sucesso!");
            break;
        }
    }
console.log("_________ RESUMO DA COMPRA _________");

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++) {
    let item = carrinho[i];
    let valorTotalItem = item.qtd * item.preco;
    totalCompra += valorTotalItem;
    console.log(item.produto + " - Quantidade: " + item.qtd + " - Valor total: R$ " + valorTotalItem.toFixed(2));
}

console.log("\nTotal a pagar: R$ " + totalCompra.toFixed(2));
} else {
    console.log("Tudo bem, estamos a disposição.");
}
