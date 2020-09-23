class Filter {

    constructor(data) {
        this.data = data;
    }

    static bairro(bairro) {
        return data.filter(imovel => imovel.bairro === bairro);
    }

    static vendido(vendido) {
        return data.filter(imovel => vendido === (imovel.proprietarioNovo != undefined));
    }
}