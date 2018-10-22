Feature: compute Taxes



  Scenario Outline: non imported products
    Given Un produit "<libelle>" de type "<type>"
    When  j'achete le produit à "<prix>"
    Then je paie une taxe de "<taxe>"

  Examples:
  |libelle    | type   |prix | taxe |
  |livre      |CULTURE |12.49|0.60  |
  |CD Musique |CULTURE |14.99|0.75  |
  |chocolat   |ALIMENT|14.99|3.00  |
  |efferalgan |MEDICAMENT|3.99|0.20 |

  Scenario Outline:  imported products
    Given Un produit "<libelle>" de type "<type>"
    When  j'achete le produit à "<prix>"
    And  le produit est importé
    Then je paie une taxe de "<taxe>"

  Examples:
  |libelle            | type   |prix | taxe |
  |Flocan parfun imp. |AUTRES  |27.99|  7.00|

