let form = $('form');
let imoveis = $("#imoveis");
let proprietarios = $("#proprietarios");

$('document').ready(function() {

	form.submit(formSubmit);
    popularImoveis();
	popularProprietarios();
});

function formSubmit(e) {
	e.preventDefault();

	let data = new FormData(document.getElementById('form'));
	let imovel = {};
	for (var pair of data.entries()) {
		if(pair[1] !== '')
			imovel[pair[0]] = pair[1];
	}

	imovelDBI.insereImovel(new Imovel(imovel));
	popularImoveis();
}

function mostrarProprietarios() {
	imoveis.hide();
    proprietarios.show();
    document.getElementById("im-select").style.border="3px solid white";
    document.getElementById("pr-select").style.border="3px solid #01949A";

    
}
function mostrarImoveis() {
	imoveis.show();
    proprietarios.hide();
    document.getElementById("im-select").style.border="3px solid #01949A";
    document.getElementById("pr-select").style.border="3px solid white";
}

function popularImoveis() {
	let listaImoveis = imovelDBI.imoveis;
	let tbody = imoveis.children("tbody");
	tbody.html('');

	listaImoveis.forEach((imovel) => {
		let tds = "";

		Object.keys(imovel).forEach((key) => {
			if (key === "id") return;

			tds += `<td>${imovel[key] ? imovel[key] : "-"}</td>`;
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
