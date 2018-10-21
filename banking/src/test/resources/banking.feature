Feature: gestion de compte bancaire

  Scenario: depot d'argent
    Given Ayant 100 euros dans mon compte
    When  Je dépose 10 euros
    Then J'ai 110 euros dans ma balance

  Scenario: retrait d'argent
    Given Ayant 100 euros dans mon compte
    When Je retire 10 euros
    Then J'ai 90 euros dans ma balance