const assert = require('assert');
const {Given, When, Then, After, setDefaultTimeout} = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require("selenium-webdriver");

setDefaultTimeout(60 * 1000);

When('Usuário abre o site', async () => {
	this.driver = new Builder()
	.forBrowser('chrome')
	.build();


	await this.driver.get('http://localhost/tonica-imobiliaria');
});

Then('Título da página deve ser {string}', async (expected) => {
	const title = await this.driver.getTitle();
	assert.strictEqual(title, expected);

	this.driver.close();
});




