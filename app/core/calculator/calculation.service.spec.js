'use strict';

describe('CalculationService', function () {
  beforeEach(module('core.calculator'));

  var service;

  beforeEach(inject(function (_CalculationService_) {
    service = _CalculationService_;
  }));

  it('should return null if first operand not number', function () {
    expect(service.calculate(service.operations.sum, 'not number', 2)).toBeNull();
  });

  it('should return null if second operand not number', function () {
    expect(service.calculate(service.operations.sum, 1, 'not number')).toBeNull();
  });

  it('should return null if first operand Infinity', function () {
    expect(service.calculate(service.operations.sum, Infinity, 1)).toBeNull();
  });

  it('should return null if second operand Infinity', function () {
    expect(service.calculate(service.operations.sum, 1, Infinity)).toBeNull();
  });

  it('should return null if not existing operation', function () {
    expect(service.calculate('not exists operation', 1, 2)).toBeNull();
  });


  describe('sum', function () {
    it('should calculate sum of positive numbers', function () {
      expect(service.calculate(service.operations.sum, 1, 2)).toEqual(3);
    });

    it('should calculate sum of negative numbers', function () {
      expect(service.calculate(service.operations.sum, -1, -2)).toEqual(-3);
    });
  });

  describe('subtract', function () {
    it('should calculate subtract of positive numbers', function () {
      expect(service.calculate(service.operations.subtract, 1, 2)).toEqual(-1);
    });

    it('should calculate subtract of negative numbers', function () {
      expect(service.calculate(service.operations.subtract, -1, -2)).toEqual(1);
    });
  });

  describe('divide', function () {
    it('should calculate divide of positive numbers', function () {
      expect(service.calculate(service.operations.divide, 1, 2)).toEqual(0.5);
    });

    it('should calculate divide of negative numbers', function () {
      expect(service.calculate(service.operations.divide, -1, -2)).toEqual(0.5);
    });
  });

  describe('divRemainder', function () {
    it('should calculate divide remainder of positive number', function () {
      expect(service.calculate(service.operations.divRemainder, 3, 2)).toEqual(1);
    });

    it('should calculate divide remainder of negative number', function () {
      expect(service.calculate(service.operations.divRemainder, -3, 2)).toEqual(-1);
    });
  });

  describe('maxPrime', function () {
    it('should return null if first operand less then second', function () {
      expect(service.calculate(service.operations.maxPrime, 3, 2)).toBeNull();
    });

    it('should return null if second operand less then 3', function () {
      expect(service.calculate(service.operations.maxPrime, 1, 2)).toBeNull();
    });

    it('should find prime number', function () {
      expect(service.calculate(service.operations.maxPrime, 3, 10)).toEqual(7);
    });

    it('should return null because nothing find', function () {
      expect(service.calculate(service.operations.maxPrime, 7, 10)).toBeNull();
    });
  });

});