function convertDistancia() {
  const inputValue = document.getElementById("userInputDistancia").value;
  const unit = document.getElementById("unitDist").value;
  const milesToKm = (unit === "milesToKm");
  let result = 0;
  if(milesToKm) {
    result = inputValue*1.60934;
  } else {
    result = inputValue/1.60934;
  }
  let resultString = inputValue + " miles are " + result.toFixed(2) + " km";
  if(!milesToKm) {
    resultString = inputValue + " km are " + result.toFixed(2) + " miles";
  }
  console.log(resultString);
  const resultElement=document.getElementById("resultElementDist");
  resultElement.innerHTML=resultString;
}

function convertTemperatura() {
  const inputValue = document.getElementById("userInputTemperatura").value;
  const unit = document.getElementById("unitTemp").value;
  const celsiusToFahrenheit = (unit === "celsiusToFahrenheit");
  let result = 0;
  if(celsiusToFahrenheit) {
    result = inputValue*(9/5)+32;
  } else {
    result = (inputValue-32)*(5/9);
  }
  let resultString = inputValue + "°C are " + result.toFixed(2) + "°F";
  if(!celsiusToFahrenheit) {
    resultString = inputValue + "°F are " + result.toFixed(2) + "°C";
  }
  console.log(resultString);
  const resultElement=document.getElementById("resultElementTemp");
  resultElement.innerHTML=resultString;
}