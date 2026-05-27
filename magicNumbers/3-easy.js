const absoluteZero = 273.15;
freezingPoint = 0;
boilingTemperature = 100;

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
  return celsius + absoluteZero;
}

function kelvinToCelsius(kelvin) {
  return kelvin - absoluteZero;
}

function isBoilingPoint(celsius) {
  return celsius >= boilingTemperature;
}

function isFreezingPoint(celsius) {
  return celsius <= freezingPoint;
} // fiz ate esse aqui