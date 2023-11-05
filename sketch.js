document.getElementById("calcButton").addEventListener("click", calculate);

function calculate() {
  var value1 = parseFloat(document.getElementById("value1").value);
  var uncertainty1 = parseFloat(document.getElementById("uncertainty1").value);
  var value2 = parseFloat(document.getElementById("value2").value);
  var uncertainty2 = parseFloat(document.getElementById("uncertainty2").value);
  var operator = document.getElementById("operator").value;

  var result;
  var resultUncertainty;

  if (operator === "add") {
    result = value1 + value2;
    resultUncertainty = uncertainty1 + uncertainty2;
  } else if (operator === "subtract") {
    result = value1 - value2;
    resultUncertainty = uncertainty1 + uncertainty2;
  } else if (operator === "multiply") {
    result = value1 * value2;
    resultUncertainty = ((uncertainty1 / value1) + (uncertainty2 / value2)) * result;
  } else if (operator === "divide") {
    result = value1 / value2;
    resultUncertainty = ((uncertainty1 / value1) + (uncertainty2 / value2)) * result;
  }

  document.getElementById("result").textContent = "Result: " + result + " ± " + resultUncertainty;
}
