Feature: Adicionar novo imóvel
    Tendo o formulário sido corretamente preenchido, quando for enviado então os dados do novo imóvel cadastrado devem aparecer na tabela
    Scenario: Usuário preenche o formulário corretamente, o envia, e o imóvel é exibido na tabela
    When Usuário enviar formulário de adicionar imóvel
    Then A lista de imóveis deve exibir o imóvel recém adicionado