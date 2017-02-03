'use strict';

describe('calculator', function () {

  beforeEach(module('calcApp'));

  describe('CalculatorController', function () {
    var ctrl, callback, calculationService;

    beforeEach(inject(function ($componentController) {
      callback = jasmine.createSpy('callback');
      calculationService = {
        calculate: function () {
        }
      };

      spyOn(calculationService, 'calculate').and.returnValue(1);

      ctrl = $componentController('calculator',
        {CalculationService: calculationService},
        {onCalculated: callback});
    }));

    it('should pass calculation to callback', function () {
      ctrl.calculate();

      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledWith({calculation: ctrl.calculation});
    });

    it('should call calculation service', function () {
      var calc = {
        operand1: 1,
        operand2: 2,
        operation: 'sum'
      };

      ctrl.calculation = calc;
      ctrl.calculate();

      expect(calculationService.calculate).toHaveBeenCalled();
      expect(calculationService.calculate).toHaveBeenCalledWith(calc.operation,
        calc.operand1,
        calc.operand2);
    });

    it('should set calculation service result', function () {
      ctrl.calculate();

      expect(calculationService.calculate).toHaveBeenCalled();
      expect(ctrl.calculation.result).toEqual(1);
    });
  });
});
