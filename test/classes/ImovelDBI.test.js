import ImovelDBI from '../../classes/ImovelDBI.js';

let imovelDBI = new ImovelDBI();

test('buscaImoveis deveria retornar a lista de imóveis vazia', () => {
    const imoveis = imovelDBI.buscaImoveis();

    expect(imoveis.length).toBeDefined();
    expect(imoveis.length).toBe(0);
});