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

    validar() {
        let camposCaracteres = ["rua", "bairro", "descricao"];
        let camposCaracteresRanges = [[1, 50], [1, 20], [1, 100]];
        let camposNumericos = ["area", "cep", "numero", "proprietarioAntigo", "precoCompra", "precoMinimoVenda"];

        let imovel = this;
    
        for (let i = 0; i < camposCaracteres.length; i++) {
    
            //Testa se os campos de caractares possuem somente letras e espaços
            if (!/^[ a-z]+$/i.test(imovel[camposCaracteres[i]])) {
                return false;
            }
    
            //Testa se os campos de caracteres de quantidades adequadas de caractares
            if (imovel[camposCaracteres[i]].length < camposCaracteresRanges[i][0] ||
                imovel[camposCaracteres[i]].length > camposCaracteresRanges[i][1]) {
                return false;
            }
        }
    
        for (let i = 0; i < camposNumericos.length; i++) {
    
            //Testa se os números possuem pelo menos 1 algarísmo
            let numToString = "" + imovel[camposNumericos[i]];
            if (numToString.length < 1) {
                return false;
            }
    
            //Testa se os campos numericos possuem somente números
            if (!/^[0-9]+$/.test(imovel[camposNumericos[i]])) {
                return false;
            }
    
            //Testa se os valores nos campos numéricos são não negativos
            if (imovel[camposNumericos[i]] < 0) {
                return false;
            }
        }
    
        return true;
    }
}
