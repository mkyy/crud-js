import pessoa from "../pessoas/pessoa.js";

export default class motoboy extends pessoa{
    idade = 0;
    atualClient = "";
    constructor(_nome, idade){
        super(_nome);
        this.idade = idade;
    }

    // RETORNA UMA INSTANCIA DE UM MOTOBOY
    static getInstance(nome, idade){
        return new motoboy(nome, idade);
    }

    getIdade(){
        return this.idade;
    }

    getAtualClient(){
        return this.atualClient;
    }

    registerJob(company_name){
        this.atualClient = company_name;
    }

    removeJob(){
        this.atualClient = "";
    }

}