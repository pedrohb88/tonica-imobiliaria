const INF = 999999;

let form = $('#add-form');
let filterForm = $('#filter-form');
let imoveis = $("#imoveis");
let proprietarios = $("#proprietarios");

let listaImoveis = imovelDBI.imoveis;

$('document').ready(function () {

	form.submit(formSubmit);
	filterForm.submit(filterSubmit);
	popularSelect();
	popularImoveis();
	popularProprietarios();
});

function filterSubmit(e) {
	e.preventDefault();

	let data = new FormData(document.getElementById('filter-form'));
	let imoveis = imovelDBI.imoveis;

	for (var pair of data.entries()) {
		let key = pair[0];
		let value = pair[1];

		if (key === 'bairro' && value !== '')
			imoveis = new Filter(imoveis).bairro(value);
		if (key === 'vendido' && value === 'on')
			imoveis = new Filter(imoveis).vendido(true);
	}
	listaImoveis = imoveis;
	popularImoveis();
}

function formSubmit(e) {
	e.preventDefault();

	let data = new FormData(document.getElementById('add-form'));
	let imovel = {};
	for (var pair of data.entries()) {

		if (pair[0] === 'proprietarioAntigo') {
			let idProprietario = proprietarioDBI.proprietarios.length;

			proprietarioDBI.insereProprietario(new Proprietario({
				id: idProprietario,
				nome: pair[1]
			}));
			pair[1] = idProprietario;
		}

		if (pair[1] !== '')
			imovel[pair[0]] = pair[1];
	}

	let novoImovel = new Imovel(imovel);
	console.log(novoImovel.validar());
	imovelDBI.insereImovel(novoImovel);
	listaImoveis = imovelDBI.imoveis;
	popularSelect();
	popularImoveis();
	popularProprietarios();
}

function mostrarProprietarios() {
	imoveis.hide();
	proprietarios.show();
	document.getElementById("im-select").style.border = "3px solid white";
	document.getElementById("pr-select").style.border = "3px solid #01949A";
}
function mostrarImoveis() {
	imoveis.show();
	proprietarios.hide();
	document.getElementById("im-select").style.border = "3px solid #01949A";
	document.getElementById("pr-select").style.border = "3px solid white";
}

function popularSelect() {
	let bairrosSelect = $('select[name=bairro]');
	bairrosSelect.html(`
	<option value="" disabled selected>Bairro</option>
	<option value="">Todos</option>
	`);

	let bairros = [];

	imovelDBI.imoveis.forEach(imovel => {
		if (bairros.indexOf(imovel.bairro) === -1) {
			bairros.push(imovel.bairro);

			let option = $(`<option value="${imovel.bairro}">${imovel.bairro}</option>`);
			bairrosSelect.append(option);
		}
	});
}

function popularImoveis() {

	let tbody = imoveis.find("tbody");
	tbody.html('');

	listaImoveis.forEach((imovel) => {
		let tds = "";


		Object.keys(imovel).forEach((key) => {
			if (key === "id") return;

			let value = '-';

			if (imovel[key] !== undefined && imovel[key] !== null) {
				if (key === 'proprietarioAntigo' || key === 'proprietarioNovo') {
					value = proprietarioDBI.buscaProprietarioPorId(imovel[key]).nome;
				} else {
					value = imovel[key];
				}
			}
			tds += `<td>${value}</td>`;
		});

		let tr = $(`<tr>${tds}</tr>`);

		tbody.append(tr);
	});



}
function popularProprietarios() {
	let listaProprietarios = proprietarioDBI.proprietarios;
	let tbody = proprietarios.children("tbody");
	tbody.html('');

	listaProprietarios.forEach((proprietario) => {
		let tds = "";

		Object.keys(proprietario).forEach((key) => {
			if (key === "id") return;

			tds += `<td>${proprietario[key] ? proprietario[key] : "-"}</td>`;
		});

		let tr = $(`<tr>${tds}</tr>`);

		tbody.append(tr);
	});
}