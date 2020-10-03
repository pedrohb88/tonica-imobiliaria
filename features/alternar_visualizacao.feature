Feature: Alternar visualização entre imóveis e proprietários
    O usuário pode clicar numa aba para alternar a visualização entre a lista de imóveis e de proprietários
    Scenario: Usuário clica na aba de proprietários, então a lista de proprietários é exibida
    Given A lista de imóveis está sendo exibida
    When Usuário clicar na aba de proprietários
    Then A lista de proprietários deve ser exibida