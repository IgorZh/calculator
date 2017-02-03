'use strict';

function CalculatorController(CalculationService) {
  var ctrl = this;

  ctrl.calculation = {};
  ctrl.operations = CalculationService.operations;

  ctrl.calculate = function () {
    var res = CalculationService.calculate(
        ctrl.calculation.operation,
        ctrl.calculation.operand1,
        ctrl.calculation.operand2);

    ctrl.calculation.result = res === null ? 'Invalid calculation' : res;
    ctrl.onCalculated({calculation: Object.assign({}, ctrl.calculation)});
  };
}

angular.module('calcApp').component('calculator', {
  templateUrl: 'components/calculator/calculator.html',
  controller: ['CalculationService', CalculatorController],
  bindings: {
    onCalculated: '&'
  }
});