class pessoa{
nome = "";
constructor(_nome) {
    this.nome = _nome;
}

setName(name){
    this.nome = name;
}

getNome(){
    return this.nome;
}

}

export default pessoa;