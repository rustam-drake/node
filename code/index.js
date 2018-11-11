var taxAllowance = require("./constants.js").allowance
var bandOne = require("./constants.js").bandOne
var bandTwo = require("./constants.js").bandTwo
var bandOneTax = require("./constants.js").bandOneTax
var bandTwoTax = require("./constants.js").bandTwoTax

exports.get = (event, context) => {
  // console.log("Hello World");
  // console.log(event);
  var params =  event.pathParameters.salary;
  var tax = taxCalculator(params);
  // console.log(params);
  // console.log(taxAllowance);
  var response = createResponse(200, tax);
  context.succeed(response);


};

// private

const taxCalculator = function(s) {
  if (s < taxAllowance) {
    return "No Tax";
  } else  if (s < bandOne) {
    var taxable = s -  taxAllowance;
    return "Tax : " + (taxable * 0.2);
  } else  if (s < bandTwo) {
    taxable = s - bandOne;
    var tax = taxable * 0.4 + bandOneTax;
    return "Tax : " + tax;
  } else  if (s >= bandTwo) {
    taxable = s - bandTwo;
    tax = taxable * 0.45 + bandOneTax + bandTwoTax;
    return "Tax : " + tax;
  } else {
    return "NO";
  }
};

const createResponse = (status, body) => {
  let response = {
    "statusCode": status,
    "headers": {
      "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, PUT",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*"
    },
    "body": typeof body !== 'string' ? JSON.stringify(body) : body
  };
  console.log(response);
  return response;
};
