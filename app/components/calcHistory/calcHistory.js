'use strict';

function CalcHistoryController() {
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