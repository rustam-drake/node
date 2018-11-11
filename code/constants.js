var allowance = 11850;
var bandOne = 46350;
var bandTwo = 150000;
var bandOneTax = (bandOne - allowance) * .2
var bandTwoTax = (bandTwo - bandOne) * .4

exports.allowance = allowance
exports.bandOne = bandOne
exports.bandTwo = bandTwo
exports.bandOneTax = bandOneTax
exports.bandTwoTax = bandTwoTax
