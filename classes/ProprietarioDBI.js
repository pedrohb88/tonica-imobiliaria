class ProprietarioDBI {
    constructor() {
        this.proprietarios = [];
    }

    insereProprietario(proprietario) {
        this.proprietarios.push({...proprietario});
    }

    //Se um proprietario com aquele ID for encontrado e removido, a função retorna TRUE, caso contrário, FALSE
    removeProprietario(id) {
        let wasRemoved = false;
        for (let i = 0; i < this.proprietarios.length; i++) {
            if (this.proprietarios[i].id == id) {
                this.proprietarios.splice(i, 1);
                wasRemoved = true;
                break;
            }
        }

        return wasRemoved;
    }

    //Retorna null caso não existe proprietario com o id passado
    buscaProprietarioPorId(id) {
        let proprietario = null;

        for (let i = 0; i < this.proprietarios.length; i++) {
            if (this.proprietarios[i].id == id) {
                proprietario = { ...this.proprietarios[i] };
            }
        }

        return proprietario;
    }

    //Retorna um array com todos os proprietarios cadastrados
    buscaProprietarios() {
        let proprietarios = [];
        for (let i = 0; i < this.proprietarios.length; i++) {
            proprietarios.push({...this.proprietarios[i]});
        }

        return proprietarios;
    }
}

export default ProprietarioDBI;