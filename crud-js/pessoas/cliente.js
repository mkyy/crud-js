import pessoa from "../pessoas/pessoa.js";

export default class cliente extends pessoa{

    atualEmployees = [];
    constructor(_nome) {
        super(_nome);
    }

    static getInstance(_nome){
        return new cliente(_nome);
    }

    setNewEmployee(employee_object){
        this.atualEmployees.push(employee_object);
    }

}