import ProprietarioDBI from './classes/ProprietarioDBI.js';
import ImovelDBI from './classes/ImovelDBI.js';
import Imovel from './classes/Imovel.js';
import Proprietario from './classes/Proprietario.js';

var proprietarioDBI = new ProprietarioDBI();

proprietarioDBI.insereProprietario(new Proprietario({ id: 0, nome: 'João Souza de Melo' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 1, nome: 'Joana Barros' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 2, nome: 'Pedro Schulz Rivera' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 3, nome: 'Ausberto Fermin' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 4, nome: 'Luís Antônio Cassaroli' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 5, nome: 'Henrique da Silva' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 6, nome: 'Ana Carolina Pontes' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 7, nome: 'Fernando Amaral' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 8, nome: 'Joaquina Corleone' }));
proprietarioDBI.insereProprietario(new Proprietario({ id: 9, nome: 'Maria Antonela' }));

var imovelDBI = new ImovelDBI();

imovelDBI.insereImovel(new Imovel({
    id: 0, rua: 'Augusto de Sá', bairro: 'Centro',
    numero: '112', cep: '290498-398', area: 172,
    descricao: 'Prédio, dois andares, três quartos, dois banheiros, garagem, branco',
    proprietarioAntigo: 0, proprietarioNovo: null, precoCompra: 320000,
    precoVenda: null, precoMinimoVenda: 350000
}));
imovelDBI.insereImovel(new Imovel({
    id: 1, rua: 'João Barros de Freitas', bairro: 'Centro',
    numero: '12', cep: '290495-121', area: 100,
    descricao: 'Casa, dois andares, três quartos, dois banheiros, garagem, terraço, branco',
    proprietarioAntigo: 1, proprietarioNovo: null, precoCompra: 270000,
    precoVenda: null, precoMinimoVenda: 300000
}));
imovelDBI.insereImovel(new Imovel({
    id: 2, rua: 'Barão de Mesquita', bairro: 'Cidade Nova',
    numero: '334', cep: '290496-012', area: 190,
    descricao: 'Prédio, três andares, quatro quartos, três banheiros, garagem, terraço, azul claro',
    proprietarioAntigo: 2, proprietarioNovo: null, precoCompra: 520000,
    precoVenda: null, precoMinimoVenda: 595000
}));
imovelDBI.insereImovel(new Imovel({
    id: 3, rua: 'Primeiro de Março', bairro: 'Pacoval',
    numero: '461', cep: '290491-122', area: 90,
    descricao: 'Casa, um andar, dois quartos, um banheiro, verde água',
    proprietarioAntigo: 3, proprietarioNovo: null, precoCompra: 120000,
    precoVenda: null, precoMinimoVenda: 153000
}));
imovelDBI.insereImovel(new Imovel({
    id: 4, rua: 'Evaristo da Veiga', bairro: 'Pedrinhas',
    numero: '938', cep: '290498-876', area: 172,
    descricao: 'Casa, três andares, quatro quartos, dois banheiros, garagem, branco',
    proprietarioAntigo: 4, proprietarioNovo: null, precoCompra: 300000,
    precoVenda: null, precoMinimoVenda: 325000
}));
imovelDBI.insereImovel(new Imovel({
    id: 5, rua: 'Correia Dutra', bairro: 'Centro',
    numero: '66', cep: '290498-133', area: 190,
    descricao: 'Prédio, dez andares, dois quartos por andar, garagem, branco',
    proprietarioAntigo: 5, proprietarioNovo: null, precoCompra: 2150000,
    precoVenda: null, precoMinimoVenda: 2350000
}));
imovelDBI.insereImovel(new Imovel({
    id: 6, rua: 'Dois de Dezembro', bairro: 'Centro',
    numero: '723', cep: '290497-567', area: 180,
    descricao: 'Casa, um andar, cinco quartos, dois banheiros, garagem, rosa claro',
    proprietarioAntigo: 6, proprietarioNovo: null, precoCompra: 200000,
    precoVenda: null, precoMinimoVenda: 220000
}));
imovelDBI.insereImovel(new Imovel({
    id: 7, rua: 'Vinícius de Moraes', bairro: 'São Lázaro',
    numero: '312', cep: '290498-132', area: 210,
    descricao: 'Prédio, sete andares, um quarto por andar, garagem, amarelo claro',
    proprietarioAntigo: 7, proprietarioNovo: null, precoCompra: 1320000,
    precoVenda: null, precoMinimoVenda: 1515000
}));
imovelDBI.insereImovel(new Imovel({
    id: 8, rua: 'Dezoito de Janeiro', bairro: 'Centro',
    numero: '018', cep: '290498-000', area: 500,
    descricao: 'Casa, cinco quartos, três banheiros, garagem, branco',
    proprietarioAntigo: 8, proprietarioNovo: null, precoCompra: 540000,
    precoVenda: null, precoMinimoVenda: 600000
}));
imovelDBI.insereImovel(new Imovel({
    id: 9, rua: 'Alberto Lamego', bairro: 'Parque Califórnia',
    numero: '345', cep: '290498-111', area: 80,
    descricao: 'Casa, um quarto, um banheiro, branco',
    proprietarioAntigo: 9, proprietarioNovo: null, precoCompra: 80000,
    precoVenda: null, precoMinimoVenda: 100000
}));

export {imovelDBI, proprietarioDBI};