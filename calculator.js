/**
 * Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

Example:

Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.
 */

const Calculator = function() {
  this.evaluate = string => {
    const arr = string.split(' ')
    const importance = {
      '(': 3,
      '/': 2,
      '*': 2,
      '+': 1,
      '-': 1
    }
    const operationsSorted = arr.filter(el => !Number(el)).sort((a, b) => importance[b] - importance[a])
    let arrCopy = [...arr]
    let newArray = []
    // search for / or *
    operationsSorted.forEach((op, i) => {
      if (op === '*') {
        let indexOfOp = arrCopy.indexOf('*')
        arrCopy.splice(indexOfOp - 1, 3, Number(arrCopy[indexOfOp - 1]) * Number(arrCopy[indexOfOp + 1]))
      } else if (op === '/') {
        let indexOfOp = arrCopy.indexOf('/')
        arrCopy.splice(indexOfOp - 1, 3, Number(arrCopy[indexOfOp - 1]) / Number(arrCopy[indexOfOp + 1]))
      } 
    });

    // search for + or -
    operationsSorted.forEach((op, i) => {
      if (op === '+') {
        let indexOfOp = arrCopy.indexOf('+')
        arrCopy.splice(indexOfOp - 1, 3, Number(arrCopy[indexOfOp - 1]) + Number(arrCopy[indexOfOp + 1]))
      } else if (op === '-') {
        let indexOfOp = arrCopy.indexOf('-')
        arrCopy.splice(indexOfOp - 1, 3, Number(arrCopy[indexOfOp - 1]) - Number(arrCopy[indexOfOp + 1]))
      } 
    });

    return arrCopy
  }
};

var calculate = new Calculator()
console.log(calculate.evaluate("2 / 2 + 3 * 4 - 6"));