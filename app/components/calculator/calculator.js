'use strict';

function CalculatorController(CalculationService) {
  this.operations = CalculationService.operations;

  this.calculate = function () {
    var res = CalculationService.calc(this.operation, this.operand1, this.operand2);

    this.result = res === null ? 'Invalid calculation' : res;
  };
}

angular.module('core.calculator').component('calculator', {
  templateUrl: 'components/calculator/calculator.html',
  controller: ['CalculationService', CalculatorController]
});