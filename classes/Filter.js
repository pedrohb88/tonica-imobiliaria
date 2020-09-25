class Filter {

    constructor(data) {
        this.data = data;
    }

    bairro(bairro) {
        return this.data.filter(imovel => imovel.bairro === bairro);
    }

    vendido(vendido) {
        return this.data.filter(imovel => vendido === (imovel.proprietarioNovo != undefined));
    }
}