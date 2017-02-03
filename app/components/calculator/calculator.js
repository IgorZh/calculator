'use strict';

function CalculatorController(CalculationService) {
  var ctrl = this;

  ctrl.calculation = {
    operand1: 1,
    operand2: 2,
    operation: 'sum'
  };
  ctrl.operations = CalculationService.operations;
  ctrl.calculate = function () {
    var res = CalculationService.calc(ctrl.calculation.operation, ctrl.calculation.operand1, ctrl.calculation.operand2);

    ctrl.calculation.result = res === null ? 'Invalid calculation' : res;
    ctrl.onCalculated({calculation: Object.assign({}, ctrl.calculation)});
  };
}

angular.module('calcApp').component('calculator', {
  templateUrl: 'components/calculator/calculator.html',
  controller: ['CalculationService', CalculatorController],
  bindings: {
    calculation: '<',
    onCalculated: '&'
  }
});