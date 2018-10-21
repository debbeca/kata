Feature: compute Taxes



  Scenario Outline: non imported products
    Given Un produit "<libelle>" de type "<type>"
    When  j'achete le produit à "<prix>"
    Then je paie une taxe de "<taxe>"

  Examples:
  |libelle    | type   |prix | taxe |
  |livre      |CULTURE |12.49|3.00  |
  |CD Musique |CULTURE |14.99|3.00  |
  |chocolat   |ALIEMENT|14.99|3.00  |


