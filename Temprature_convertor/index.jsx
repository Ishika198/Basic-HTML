function convert(){
    var fromunit = document.getElementById('fromunit').value;
    var tounit = document.getElementById('tounit').value;
    var Temprature = parseFloat(document.getElementById('Temprature').value);
    var convertedValue;
    var resultUnit;
    if (fromunit === tounit) {
    convertedValue = parseFloat(Temprature);
    resultUnit = fromunit;
    }
    else{
    switch(fromunit){
        case 'C':
            if(tounit === 'F'){
                convertedValue = (Temprature* 9/5) + 32;
                resultUnit = 'F';
            }
            else if(tounit === 'K'){
                convertedValue = Temprature + 273.15;
                resultUnit = 'K';
            }
            else{
                convertedValue = Temprature;
                resultUnit = 'C';
            }
            break;
        case 'F':
            if(tounit === 'C'){
                convertedValue = (Temprature - 32 ) * 5/9;
                resultUnit = 'C';
            }
            else if(tounit === 'K'){
                convertedValue = (Temprature - 32) * 5/9 + 273.15;
                resultUnit = 'K';
            }
            else{
                convertedValue = Temprature;
                resultUnit = 'F';
            }
            break;
        case 'K':
            if(tounit === 'C'){
                convertedValue = Temprature - 273.15;
                resultUnit = 'C';
            }
            else if(tounit === 'F'){
                convertedValue = 9/5*(Temprature - 273.15) + 32;
                resultUnit = 'F';
            }
            else{
                convertedValue = Temprature;
                resultUnit = 'K';
            }
            break;
    }
}
    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
}