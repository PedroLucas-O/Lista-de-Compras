export class Mercadoria{
    constructor(
        public id:number,
        public descricao:string,
        public quantidadeEstoque:number,
        public quantidadeMinima:number
    ){}
}