Feature: Visualizar lista de imóveis
    Ao abrir o site, uma lista com todos os imóveis registrados no sistema e seus respectivos atributos deve ser exibida para o usuário em uma tabela.
    Scenario: Usuário acessa o site e a lista de imóveis é mostrada 
    When Usuário acessar o site
    Then A lista de imóveis deve ser exibida com 10 itens