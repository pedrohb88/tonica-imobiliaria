const assert = require("assert");
const {
	Given,
	When,
	Then,
	After,
	setDefaultTimeout,
} = require("@cucumber/cucumber");
const { Builder, By, Key, until } = require("selenium-webdriver");

setDefaultTimeout(60 * 1000);

(async function () {
	let driver = new Builder().forBrowser("chrome").build();

	When("Usuário acessar o site", async () => {
		await driver.get("http://localhost/tonica-imobiliaria");
	});

	Then("A lista de imóveis deve ser exibida com {int} itens",
		async (itemsExpected) => {
			let tbody = await driver.findElement(By.css("tbody"));
			let trs = await tbody.findElements(By.css("tr"));

			assert.strictEqual(trs.length, itemsExpected);
		}
	);

	When('Usuário enviar formulário de adicionar imóvel', async () => {
	
		await driver.get('http://localhost/tonica-imobiliaria');
	
		this.data = {
			rua: "rua onze",
			bairro: "Bairro dezenove",
			numero: 10,
			cep: 28490000,
			area: 150,
			descricao: "Uma casa arejada com grandes janelas e um quintal",
			proprietarioAntigo: "João da Silva",
			precoCompra: 300000,
			precoMinimoVenda: 400000
		};

		this.dataOrder = ['rua', 'bairro', 'numero', 'cep', 'area', 'descricao', 'proprietarioAntigo', 'precoCompra', 'precoMinimoVenda'];
	
		try {
			Object.keys(this.data).forEach(async key => {
				await driver.findElement(By.xpath(`//form/div/input[@name = '${key}']`)).sendKeys(this.data[key]);
			});
	
			await driver.findElement(By.xpath(`//form/button[@type='submit']`)).click();
			
			let timeout = () => {
				return new Promise((res, rej) => {
					setTimeout(() => {
							res();
					}, 2000);
				});
			}

			await timeout();

		} catch(error) {
			console.log(error);
		}
	});
	
	Then('A lista de imóveis deve exibir o imóvel recém adicionado', async () => {
		
		let tbody = await driver.findElement(By.css('tbody'));
		let trs = await tbody.findElements(By.css('tr'));
	
		let tds = await trs[trs.length-1].findElements(By.css('td'));
		
		let j = 0;
		for(i = 0; i < this.dataOrder.length; i++){
			let val = this.data[this.dataOrder[i]];

			let tdText = await tds[j].getText();
			if(tdText == '-'){
				j++;
				tdText = await tds[j].getText();
			}
			j++;
			assert.strictEqual(tdText, val.toString());
		}

		assert.strictEqual(trs.length, 11);
	});

	Given('A lista de imóveis está sendo exibida', async () => {
		await driver.get("http://localhost/tonica-imobiliaria");

		let imoveisDisplay = await driver.findElement(By.id('imoveis')).getCssValue('display');
		
		assert.strictEqual(imoveisDisplay, 'block');
	});

	When('Usuário clicar na aba de proprietários', async () => {
		await driver.findElement(By.id('pr-select')).click();
	});

	Then('A lista de proprietários deve ser exibida', async () => {
		let proprietariosDisplay = await driver.findElement(By.id('proprietarios')).getCssValue('display');

		assert.notStrictEqual(proprietariosDisplay, 'none');
	});

	Given('Um bairro selecionado no filtro', async () => {
		await driver.get("http://localhost/tonica-imobiliaria");

		await driver.findElement(By.id('bairro-select')).click();

		await driver.findElement(By.id('option-Centro')).click();
	});

	When('Usuário enviar formulário de filtragem', async () => {
		await driver.findElement(By.id('button-submit-filter')).click();
	})

	Then('A lista de imóveis é atualizada segundo o filtro selecionado', async () => {
		
		let tbody = await driver.findElement(By.css("tbody"));
		let trs = await tbody.findElements(By.css("tr"));

		for(i = 0; i < trs.length; i++) {
			let tds = await trs[i].findElements(By.css('td'));
			let bairroTd = tds[1];
			let bairro = await bairroTd.getText();

			assert.strictEqual(bairro, 'Centro');
		}
	});
})();
