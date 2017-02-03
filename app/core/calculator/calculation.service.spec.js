'use strict';

describe('CalculationService', function () {
  beforeEach(module('core.calculator'));

  var service;

  beforeEach(inject(function (_CalculationService_) {
    service = _CalculationService_;
  }));

  it('return null if first operand not number', function () {
    expect(service.calculate(service.operations.sum, 'not number', 2)).toBeNull();
  });

  it('return null if second operand not number', function () {
    expect(service.calculate(service.operations.sum, 1, 'not number')).toBeNull();
  });

  it('return null if first operand Infinity', function () {
    expect(service.calculate(service.operations.sum, Infinity, 1)).toBeNull();
  });

  it('return null if second operand Infinity', function () {
    expect(service.calculate(service.operations.sum, 1, Infinity)).toBeNull();
  });

  it('return null if not existing operation', function () {
    expect(service.calculate('not exists operation', 1, 2)).toBeNull();
  });


  describe('sum', function () {
    it('calculate sum positive numbers', function () {
      expect(service.calculate(service.operations.sum, 1, 2)).toEqual(3);
    });

    it('calculate sum negative numbers', function () {
      expect(service.calculate(service.operations.sum, -1, -2)).toEqual(-3);
    });
  });

  describe('subtract', function () {
    it('calculate subtract positive numbers', function () {
      expect(service.calculate(service.operations.subtract, 1, 2)).toEqual(-1);
    });

    it('calculate subtract negative numbers', function () {
      expect(service.calculate(service.operations.subtract, -1, -2)).toEqual(1);
    });
  });

  describe('divide', function () {
    it('calculate divide positive numbers', function () {
      expect(service.calculate(service.operations.divide, 1, 2)).toEqual(0.5);
    });

    it('calculate divide negative numbers', function () {
      expect(service.calculate(service.operations.divide, -1, -2)).toEqual(0.5);
    });
  });

  describe('divRemainder', function () {
    it('calculate positive numbers', function () {
      expect(service.calculate(service.operations.divRemainder, 3, 2)).toEqual(1);
    });

    it('calculate negative numbers', function () {
      expect(service.calculate(service.operations.divRemainder, -3, 2)).toEqual(-1);
    });
  });

  describe('maxPrime', function () {
    it('return null if first operand less then second', function () {
      expect(service.calculate(service.operations.maxPrime, 3, 2)).toBeNull();
    });

    it('return null if second operand less then 3', function () {
      expect(service.calculate(service.operations.maxPrime, 1, 2)).toBeNull();
    });

    it('find prime number', function () {
      expect(service.calculate(service.operations.maxPrime, 3, 10)).toEqual(7);
    });

    it('return null because nothing find', function () {
      expect(service.calculate(service.operations.maxPrime, 7, 10)).toBeNull();
    });
  });

});