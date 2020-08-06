function formatMoney(value){
    value = Math.ceil(value*100)/100;
    value = value.toFixed(2);
    return "₹ "+value;
}

function formatSplit(value){
    if(value === 1) return value+' Person'
    return value+' people';
}

function update(){
    let yourBill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;

    let tipValue = yourBill * (tipPercent/100);
    let tipEach = tipValue/split;
    let billEach = (yourBill + tipValue)/split;

    document.getElementById('tipPercent').innerHTML = tipPercent + '%';
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatMoney(yourBill+tipValue);
    document.getElementById('splitValue').innerHTML = formatSplit(split);
    document.getElementById('billEach').innerHTML = formatMoney(billEach);
    document.getElementById('tipEach').innerHTML = formatMoney(tipEach);
    
    
}
const container = document.getElementById('container');
container.addEventListener('input', update)