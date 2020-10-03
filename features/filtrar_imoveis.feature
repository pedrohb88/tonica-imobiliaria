Feature: Filtrar imóveis
    O usuário pode filtrar a lista de imóveis com base em seu bairro e status de venda. 
    Scenario: O usuário seleciona um bairro e envia o formulário de filtro
    Given Um bairro selecionado no filtro
    When Usuário enviar formulário de filtragem
    Then A lista de imóveis é atualizada segundo o filtro selecionado