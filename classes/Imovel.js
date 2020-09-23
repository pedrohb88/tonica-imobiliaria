class Imovel {
    constructor({id, rua, bairro, numero, cep, area, descricao, proprietarioAntigo, proprietarioNovo, precoCompra, precoVenda, precoMinimoVenda}){
        this.id = id;
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
        this.cep = cep;
        this.area = area;
        this.descricao = descricao;
        this.proprietarioAntigo = proprietarioAntigo;
        this.proprietarioNovo = proprietarioNovo;
        this.precoCompra = precoCompra;
        this.precoVenda = precoVenda;
        this.precoMinimoVenda = precoMinimoVenda;
    }
}
