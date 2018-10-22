Feature: Billing

  Background:
    Given :liste de course
        |libelle    | type   |prix  |
        |livre      |CULTURE |12.49 |
        |CD Musique |CULTURE |14.99|
        |chocolat   |ALIMENT|14.99 |
        |efferalgan |MEDICAMENT|3.99 |

  Scenario: Facturation
    Given ayant acheté ma liste de course
    When je passe à la caisse
    Then je paie 51,01
