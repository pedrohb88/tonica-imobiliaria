import Imovel from './Imovel.js';

class ImovelDBI {
    constructor() {
        this.imoveis = [];
    }

    insereImovel(imovel) {
        this.imoveis.push({...imovel});
    }

    //Recebe o id de um imóvel e tenta removê-lo, se um imóvel com aquele ID for encontrado e removido, a função retorna TRUE, caso contrário, FALSE
    removeImovel(id) {
        let wasRemoved = false;
        for (let i = 0; i < this.imoveis.length; i++) {
            if (this.imoveis[i].id == id) {
                this.imoveis.splice(i, 1);
                wasRemoved = true;
                break;
            }
        }

        return wasRemoved;
    }

    //Retorna o imóvel que com o id passado como argumento, returnua null caso não existe imóvel com o id passado
    buscaImovelPorId(id) {
        let imovel = null;

        for (let i = 0; i < this.imoveis.length; i++) {
            if (this.imoveis[i].id == id) {
                imovel = { ...this.imoveis[i] };
            }
        }

        return imovel;
    }

    //Retorna um array com todos os imóveis cadastrados
    buscaImoveis() {
        let imoveis = [];
        for (let i = 0; i < this.imoveis.length; i++) {
            imoveis.push({...this.imoveis[i]});
        }

        return imoveis;
    }
}

export default ImovelDBI;