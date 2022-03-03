import rlsync from "readline-sync";
import __system from '../crud-js/system.js';

const SYSTEM = __system.getInstance();
let option;
let optionCrud;
let motoboy_name;
let client_name;
do{
console.log("################-SISTEMA MOTOBOYS-################");
console.log("0 - CRUD Motoboy");
console.log("1 - CRUD Cliente");
console.log("2 - Exibir dados de um motoboy");
console.log("3 - Vincular motoboy a empresa cliente");
console.log("4 - Remover motoboy de uma empresa cliente");
console.log("9 - SAIR");
console.log(`\ndigite uma opcao para continuar: `);
option = rlsync.questionInt();

switch(option){
    case 0:
        console.log("\n0 - Cadastrar novo motoboy");
        console.log("1 - Listar todos os motoboys");
        console.log("2 - Atualizar dados de um motoboy");
        console.log("3 - Excluir motoboy do sistema");
        console.log("9 - RETORNAR");
        console.log(`\ndigite uma opcao para continuar: `)
        optionCrud = rlsync.questionInt();

        switch(optionCrud){
            case 0:
                let newName = rlsync.question("Insira o nome do motoboy: ");
                let newAge = rlsync.question("Insira a idade do motoboy: ");
                SYSTEM.getNewMotoboy(newName, newAge);
                console.log("Motoboy criado com sucesso! ")
                break;
            case 1:
                SYSTEM.getListMotoboys();
                break;
            case 2:
                let oldName = rlsync.question("Insira o nome do motoboy que deseja alterar: ")
                let nameToBeChanged = rlsync.question("Novo nome: ")
                SYSTEM.changeNameMotoboy(oldName, nameToBeChanged);
                console.log("Nome alterado com sucesso! ")
                break;
            case 3:
                let nameToBeDeleted = rlsync.question("Digite o nome do motoboy a ser excluido: ");
                SYSTEM.deleteMotoboy(nameToBeDeleted);
                console.log("Motoboy excluido com sucesso! ")
                break;
        }
    break;
    case 1:
        console.log("\n0 - Cadastrar novo cliente");
        console.log("1 - Listar todos os clientes");
        console.log("2 - Atualizar dados de um cliente");
        console.log("3 - Excluir cliente do sistema");
        console.log("9 - RETORNAR");
        console.log(`\ndigite uma opcao para continuar: `)
        optionCrud = rlsync.questionInt();

        switch(optionCrud){

            case 0:
                let newName = rlsync.question("Insira o nome do cliente: ");
                SYSTEM.getNewClient(newName);
                console.log("Cliente criado com sucesso! ")
            break;
            case 1:
                SYSTEM.getListClients();
            break;
            case 2:
                let oldName = rlsync.question("Insira o nome do cliente que deseja alterar: ")
                let nameToBeChanged = rlsync.question("Novo nome: ")
                SYSTEM.changeNameClient(oldName, nameToBeChanged);
                console.log("Nome alterado com sucesso! ")
            break;
            case 3:
                let nameToBeDeleted = rlsync.question("Digite o nome do cliente a ser excluido: ");
                SYSTEM.deleteClient(nameToBeDeleted);
                console.log("Cliente excluido com sucesso! ")
            break;
        }

    break;
    case 2:
        motoboy_name = rlsync.question("Digite o nome do motoboy a ser pesquisado: ");
        SYSTEM.getMotoboyData(motoboy_name);
    break;
    case 3:
        motoboy_name = rlsync.question("Digite o nome do motoboy a ser cadastrado na empresa: ");
        client_name = rlsync.question("Digite o nome da empresa: ");
        SYSTEM.linkMotoboyToClient(motoboy_name, client_name);
        console.log("Motoboy vinculado a " + client_name);
    break;
    case 4:
        motoboy_name = rlsync.question("Digite o nome do motoboy a ser REMOVIDO da empresa: ");
        client_name = rlsync.question("Digite o nome da empresa: ");
        SYSTEM.deleteMotoboyFromClient(motoboy_name, client_name);
        console.log("Motoboy foi REMOVIDO da empresa " + client_name);
    break;    
}
}while(option != 9);