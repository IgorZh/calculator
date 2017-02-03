'use strict';

var baseOperations = {
  sum: 'sum',
  subtract: 'subtract',
  divide: 'divide',
  divRemainder: 'divRemainder',
  maxPrime: 'maxPrime'
};

angular.module('core.calculator').factory('CalculationService',
  function () {
    return {
      calc: function (operation, operand1, operand2) {
        if (!baseOperations.hasOwnProperty(operation))
          return null;

        if (!(
            angular.isNumber(operand1) &&
            angular.isNumber(operand2) &&
            isFinite(operand1) &&
            isFinite(operand2)
          ))
          return null;

        return calculations[operation](operand1, operand2);
      },
      operations: baseOperations
    };
  }
);

var calculations = {};

calculations[baseOperations.sum] = function (a, b) {
  return a + b;
};

calculations[baseOperations.subtract] = function (a, b) {
  return a - b;
};

calculations[baseOperations.divide] = function (a, b) {
  if (b === 0) return null;

  return a / b;
};

calculations[baseOperations.divRemainder] = function (a, b) {
  if (b === 0) return null;

  return a % b;
};

calculations[baseOperations.maxPrime] = function (a, b) {
  if (a < 0) a = 0;

  if (a >= b || b < 3) return null;

  for (var i = b - 1; i > a; i--) {
    if (isPrime(i))
      return i;
  }
  return null;
};

function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }
  return number > 1;
}