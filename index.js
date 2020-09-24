let imoveis = $("#imoveis");
let proprietarios = $("#proprietarios");


$('document').ready(function() {
    popularImoveis();
    popularProprietarios();
});



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
