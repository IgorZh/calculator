'use strict';

describe('calcHistory', function () {

  beforeEach(module('calcApp'));

  describe('CalcHistoryController', function () {
    var ctrl;

    beforeEach(inject(function ($componentController) {
      ctrl = $componentController('calcHistory');
    }));

    it('should add calculation', function () {
      expect(ctrl.calculations.length).toEqual(0);

      ctrl.addCalculation({});
      expect(ctrl.calculations.length).toEqual(1);
    });
  });
});