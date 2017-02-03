'use strict';

function CalcHistoryController($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.calculations = [];

  ctrl.addCalculation = function (calculation) {
    ctrl.calculations.push(calculation);
  };
}

angular.module('calcApp').component('calcHistory', {
  templateUrl: 'components/calcHistory/calcHistory.html',
  controller: [CalcHistoryController]
});