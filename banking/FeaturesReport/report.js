$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("banking.feature");
formatter.feature({
  "line": 1,
  "name": "gestion de compte bancaire",
  "description": "",
  "id": "gestion-de-compte-bancaire",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "depot d\u0027argent",
  "description": "",
  "id": "gestion-de-compte-bancaire;depot-d\u0027argent",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Ayant 100 euros dans mon compte",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Je dépose 10 euros",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "J\u0027ai 110 euros dans ma balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 6
    }
  ],
  "location": "GestionCompte.ayantEurosDansMonCompte(Double)"
});
formatter.result({
  "duration": 392896238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    }
  ],
  "location": "GestionCompte.jeDeposeEuros(Double)"
});
formatter.result({
  "duration": 173139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "110",
      "offset": 5
    }
  ],
  "location": "GestionCompte.jAiEurosDansMaBalance(Double)"
});
formatter.result({
  "duration": 2390993,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "retrait d\u0027argent",
  "description": "",
  "id": "gestion-de-compte-bancaire;retrait-d\u0027argent",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Ayant 100 euros dans mon compte",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Je retire 10 euros",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "J\u0027ai 90 euros dans ma balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 6
    }
  ],
  "location": "GestionCompte.ayantEurosDansMonCompte(Double)"
});
formatter.result({
  "duration": 164795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    }
  ],
  "location": "GestionCompte.jeRetireEuros(Double)"
});
formatter.result({
  "duration": 135479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 5
    }
  ],
  "location": "GestionCompte.jAiEurosDansMaBalance(Double)"
});
formatter.result({
  "duration": 127397,
  "status": "passed"
});
});