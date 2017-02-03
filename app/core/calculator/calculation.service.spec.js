'use strict';

describe('CalculationService', function () {
  beforeEach(module('core.calculator'));

  var service;

  beforeEach(inject(function (_CalculationService_) {
    service = _CalculationService_;
  }));

  it('return null if first operand not number', function () {
    expect(service.calc(service.operations.sum, 'not number', 2)).toBeNull();
  });

  it('return null if second operand not number', function () {
    expect(service.calc(service.operations.sum, 1, 'not number')).toBeNull();
  });

  it('return null if first operand Infinity', function () {
    expect(service.calc(service.operations.sum, Infinity, 1)).toBeNull();
  });

  it('return null if second operand Infinity', function () {
    expect(service.calc(service.operations.sum, 1, Infinity)).toBeNull();
  });

  it('return null if not existing operation', function () {
    expect(service.calc('not exists operation', 1, 2)).toBeNull();
  });


  describe('sum', function () {
    it('calc sum positive numbers', function () {
      expect(service.calc(service.operations.sum, 1, 2)).toEqual(3);
    });

    it('calc sum negative numbers', function () {
      expect(service.calc(service.operations.sum, -1, -2)).toEqual(-3);
    });
  });

  describe('subtract', function () {
    it('calc subtract positive numbers', function () {
      expect(service.calc(service.operations.subtract, 1, 2)).toEqual(-1);
    });

    it('calc subtract negative numbers', function () {
      expect(service.calc(service.operations.subtract, -1, -2)).toEqual(1);
    });
  });

  describe('divide', function () {
    it('calc divide positive numbers', function () {
      expect(service.calc(service.operations.divide, 1, 2)).toEqual(0.5);
    });

    it('calc divide negative numbers', function () {
      expect(service.calc(service.operations.divide, -1, -2)).toEqual(0.5);
    });
  });

  describe('divRemainder', function () {
    it('calc positive numbers', function () {
      expect(service.calc(service.operations.divRemainder, 3, 2)).toEqual(1);
    });

    it('calc negative numbers', function () {
      expect(service.calc(service.operations.divRemainder, -3, 2)).toEqual(-1);
    });
  });

  describe('maxPrime', function () {
    it('return null if first operand less then second', function () {
      expect(service.calc(service.operations.maxPrime, 3, 2)).toBeNull();
    });

    it('return null if second operand less then 3', function () {
      expect(service.calc(service.operations.maxPrime, 1, 2)).toBeNull();
    });

    it('find prime number', function () {
      expect(service.calc(service.operations.maxPrime, 3, 10)).toEqual(7);
    });

    it('return null because nothing find', function () {
      expect(service.calc(service.operations.maxPrime, 7, 10)).toBeNull();
    });
  });

});