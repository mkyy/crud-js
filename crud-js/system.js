import motoboy from '../crud-js/pessoas/motoboy.js';
import cliente from '../crud-js/pessoas/cliente.js';
export default class system{

motoboys = [];
clientes = [];
static INSTANCE = new system();

constructor() {
    
}

// APLICANDO DESIGN PATTERN SINGLETON
static getInstance(){
    return system.INSTANCE;
}

// INSTANCIANDO MOTOBOY
getNewMotoboy(nome, idade){
    this.motoboys.push(motoboy.getInstance(nome, idade));
}

// GERANDO LISTA DE MOTOBOYS
getListMotoboys(){
    function imprimeLista(motoc){
        return console.log(motoc.getNome());
    }
    return this.motoboys.forEach(imprimeLista);
}

// ALTERANDO MOTOBOYS
changeNameMotoboy(oldName, newName){
    return this.motoboys.forEach((object, index) => {
        if(object.getNome() === oldName){
            this.motoboys[index].setName(newName);
        }
    });
}

// DELETANDO MOTOBOY
deleteMotoboy(nameToBeDeleted){
    this.motoboys.forEach((object, index) => {
        if(object.getNome() === nameToBeDeleted){
            this.motoboys.splice(index, 1);
        }
    });
}

//INSTANCIANDO CLIENTE
getNewClient(_nome){
    this.clientes.push(cliente.getInstance(_nome));
}

//GERANDO LISTA DE CLIENTES
getListClients(){
    function imprimeLista(client){
        return console.log(client.getNome());
    }
    return this.clientes.forEach(imprimeLista);
}

//ALTERANDO DADOS DE UM CLIENTE
changeNameClient(oldName, newName){
    return this.clientes.forEach((object, index) => {
        if(object.getNome() === oldName){
            this.clientes[index].setName(newName);
        }
    });
}

//DELETANDO CLIENTE
deleteClient(nameToBeDeleted){
    this.clientes.forEach((object, index) => {
        if(object.getNome() === nameToBeDeleted){
            this.clientes.splice(index, 1);
        }
    });
}

//RETORNANDO DADOS DE UM MOTOBOY
getMotoboyData(_nome){
    this.motoboys.forEach((object, index) => {
        if(object.getNome() === _nome){
            console.log(this.motoboys[index].getNome() + " tem " + this.motoboys[index].getIdade() + " anos.");
            console.log("Empresa em que trabalha: " + this.motoboys[index].getAtualClient());
        }
    });
}

//VINCULANDO MOTOBOY A UMA EMPRESA-CLIENTE
linkMotoboyToClient(motoboy_name, client_name){
    this.motoboys.forEach((object, index) => {
        if(object.getNome() === motoboy_name){
            this.motoboys[index].registerJob(client_name);

            //ADICIONANDO O MOTOBOY AO ARRAY FUNCIONARIOS DO CLIENTE
            this.clientes.forEach((object, index2) => {
                if(object.getNome() === client_name){
                    this.clientes[index2].setNewEmployee(this.motoboys[index]);
                }
            });
        }
    });
    
}

deleteMotoboyFromClient(motoboy_name, client_name){
    this.motoboys.forEach((object, index) => {
        if(object.getNome() === motoboy_name){
            this.motoboys[index].removeJob();

            //REMOVENDO O MOTOBOY AO ARRAY FUNCIONARIOS DO CLIENTE
            this.clientes.forEach((object, index2) => {
                if(object.getNome() === client_name){
                    this.clientes.splice(index2, 1);
                }
            });
        }
    });
}

}