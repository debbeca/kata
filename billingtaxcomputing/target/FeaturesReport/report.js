$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TaxComputing.feature");
formatter.feature({
  "line": 1,
  "name": "compute Taxes",
  "description": "",
  "id": "compute-taxes",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "non imported products",
  "description": "",
  "id": "compute-taxes;non-imported-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Un produit \"\u003clibelle\u003e\" de type \"\u003ctype\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "j\u0027achete le produit à \"\u003cprix\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je paie une taxe de \"\u003ctaxe\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "compute-taxes;non-imported-products;",
  "rows": [
    {
      "cells": [
        "libelle",
        "type",
        "prix",
        "taxe"
      ],
      "line": 11,
      "id": "compute-taxes;non-imported-products;;1"
    },
    {
      "cells": [
        "livre",
        "CULTURE",
        "12.49",
        "3.00"
      ],
      "line": 12,
      "id": "compute-taxes;non-imported-products;;2"
    },
    {
      "cells": [
        "CD Musique",
        "CULTURE",
        "14.99",
        "3.00"
      ],
      "line": 13,
      "id": "compute-taxes;non-imported-products;;3"
    },
    {
      "cells": [
        "chocolat",
        "ALIEMENT",
        "14.99",
        "3.00"
      ],
      "line": 14,
      "id": "compute-taxes;non-imported-products;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "non imported products",
  "description": "",
  "id": "compute-taxes;non-imported-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Un produit \"livre\" de type \"CULTURE\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "j\u0027achete le produit à \"12.49\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je paie une taxe de \"3.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "livre",
      "offset": 12
    },
    {
      "val": "CULTURE",
      "offset": 28
    }
  ],
  "location": "TaxComputingSteps.java:18"
});
formatter.result({
  "duration": 134581606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12.49",
      "offset": 23
    }
  ],
  "location": "TaxComputingSteps.java:21"
});
formatter.result({
  "duration": 718364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3.00",
      "offset": 21
    }
  ],
  "location": "TaxComputingSteps.java:24"
});
formatter.result({
  "duration": 4479586,
  "error_message": "java.lang.AssertionError: expected:\u003c3.0\u003e but was:\u003c2.498\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat bdd.acceptance.TaxComputingSteps.lambda$new$2(TaxComputingSteps.java:25)\n\tat ✽.Then je paie une taxe de \"3.00\"(TaxComputing.feature:8)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "non imported products",
  "description": "",
  "id": "compute-taxes;non-imported-products;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Un produit \"CD Musique\" de type \"CULTURE\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "j\u0027achete le produit à \"14.99\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je paie une taxe de \"3.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CD Musique",
      "offset": 12
    },
    {
      "val": "CULTURE",
      "offset": 33
    }
  ],
  "location": "TaxComputingSteps.java:18"
});
formatter.result({
  "duration": 162957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14.99",
      "offset": 23
    }
  ],
  "location": "TaxComputingSteps.java:21"
});
formatter.result({
  "duration": 156414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3.00",
      "offset": 21
    }
  ],
  "location": "TaxComputingSteps.java:24"
});
formatter.result({
  "duration": 426983,
  "error_message": "java.lang.AssertionError: expected:\u003c3.0\u003e but was:\u003c2.998\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat bdd.acceptance.TaxComputingSteps.lambda$new$2(TaxComputingSteps.java:25)\n\tat ✽.Then je paie une taxe de \"3.00\"(TaxComputing.feature:8)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "non imported products",
  "description": "",
  "id": "compute-taxes;non-imported-products;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Un produit \"chocolat\" de type \"ALIEMENT\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "j\u0027achete le produit à \"14.99\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je paie une taxe de \"3.00\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chocolat",
      "offset": 12
    },
    {
      "val": "ALIEMENT",
      "offset": 31
    }
  ],
  "location": "TaxComputingSteps.java:18"
});
formatter.result({
  "duration": 535860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14.99",
      "offset": 23
    }
  ],
  "location": "TaxComputingSteps.java:21"
});
formatter.result({
  "duration": 163448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3.00",
      "offset": 21
    }
  ],
  "location": "TaxComputingSteps.java:24"
});
formatter.result({
  "duration": 480572,
  "error_message": "java.lang.AssertionError: expected:\u003c3.0\u003e but was:\u003c2.998\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat bdd.acceptance.TaxComputingSteps.lambda$new$2(TaxComputingSteps.java:25)\n\tat ✽.Then je paie une taxe de \"3.00\"(TaxComputing.feature:8)\n",
  "status": "failed"
});
});