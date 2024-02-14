function convertToFar() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerHTML = celsius + ' Celsius is = ' + fahrenheit.toFixed(2) + ' Fahrenheit';
    document.getElementById('explanation').innerHTML = 'How to Convert?  ' + '( ' + celsius + ' * 9/5 )' + ' + 32';
}

function convertToCel() {
    var fahrenheit = parseFloat(document.getElementById('celsius').value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('result').innerHTML = fahrenheit + ' Fahrenheit is = ' + celsius.toFixed(2) + ' Celsius';
    document.getElementById('explanation').innerHTML = 'How to Convert?  ' + '( ' + fahrenheit + ' - 32 )' + ' * 5/9';
}
