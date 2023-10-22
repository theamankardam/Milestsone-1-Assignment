const celsiusTemperature = 45;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`Temperature in Fahrenheit : ${fahrenheitTemperature}`);


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}