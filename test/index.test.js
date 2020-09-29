import Imovel from "./../classes/Imovel.js";
import ImovelDBI from "./../classes/ImovelDBI";

describe("Validar Imóvel - Teste de Classes de Equivalência", () => {
	let imovel;
	beforeEach(() => {
		imovel = new Imovel({
			rua: "Rua um",
			bairro: "Centro",
			numero: 120,
			cep: 123456000,
			descricao: "casa legal",
			area: 120,
			proprietarioAntigo: 0,
			precoCompra: 120000,
			precoMinimoVenda: 140000,
		});
	});

	test.each([
		["rua", "não deve ser vazio", ""],
		["bairro", "não deve ser vazio", ""],
		["descricao", "não deve ser vazio", ""],
		["area", "não deve ser vazia", ""],
		["precoCompra", "não deve ser vazio", ""],
		["proprietarioAntigo", "deve ter apenas números", "ab0"],
		["precoMinimoVenda", "deve ter apenas números", "lk09"],
		["precoCompra", "não deve ser negativo", -10000],
		["precoMinimoVenda", "não deve ser negativo", -5000],
	])(`Campo "%s" %s`, (field, message, value) => {
		imovel[field] = value;
		expect(imovel.validar()).toBe(false);
	});

	test("Imóvel deve ser válido", () => {
		expect(imovel.validar()).toBe(true);
	});
});

describe("Classe ImovelDBI - Teste de Caminho Básico", () => {
    
    let imovelDBI;
    beforeEach(() => {
        imovelDBI = new ImovelDBI();
        imovelDBI.insereImovel(new Imovel({
            id: 1, rua: 'Dezoito de Janeiro', bairro: 'Centro',
            numero: '018', cep: '290498-000', area: 500,
            descricao: 'Casa, cinco quartos, três banheiros, garagem, branco',
            proprietarioAntigo: 8, proprietarioNovo: null, precoCompra: 540000,
            precoVenda: null, precoMinimoVenda: 600000
        }));

    
    });

	describe("removeImovel(id)", () => {
        test('Deve remover um imóvel existente', () => {
            expect(imovelDBI.removeImovel(1)).toBe(true);
        });

        test('Deve falhar ao tentar remover um imóvel inexistente', () => {
            expect(imovelDBI.removeImovel(2)).toBe(false);
        });

        test('Deve falhar ao tentar remover imóvel da lista vazia', () => {
            const newDBI = new ImovelDBI();

            expect(newDBI.removeImovel(1)).toBe(false);
        });
    });

	describe("buscaImovelPorId()", () => {
        test('Deve retornar um imóvel com id correspondente', () => {
            const imovel = imovelDBI.buscaImovelPorId(1);
         
            expect(imovel).toBeTruthy();
            expect(imovel.id).toBe(1);
        });

        test('Deve retornar null ao buscar imóvel inexistente', () => {
            expect(imovelDBI.buscaImovelPorId(2)).toBe(null);
        });

        test('Deve retornar null ao buscar imóvel em lista vazia', () => {
            const newDBI = new ImovelDBI();

            expect(imovelDBI.buscaImovelPorId(2)).toBe(null);
        });
    });

	describe("buscaImoveis()", () => {
        test('Deve retornar um array contendo imóveis', () => {
            imovelDBI.insereImovel(new Imovel({
                id: 2, rua: 'dezenove de Janeiro', bairro: 'Centro',
                numero: '018', cep: '290498-000', area: 500,
                descricao: 'Casa, cinco quartos, três banheiros, garagem, branco',
                proprietarioAntigo: 8, proprietarioNovo: null, precoCompra: 540000,
                precoVenda: null, precoMinimoVenda: 600000
            }));

            const imoveis = imovelDBI.buscaImoveis();

            expect(imoveis.length).toBe(2);
            expect(imoveis[0].id).toBe(1);
            expect(imoveis[1].id).toBe(2);
        });

        test('Deve retornar um array vazio quando a lista de imóveis estiver vazia', () => {
            imovelDBI = new ImovelDBI();
            
            expect(imovelDBI.buscaImoveis().length).toBe(0);
        });
    });
});
