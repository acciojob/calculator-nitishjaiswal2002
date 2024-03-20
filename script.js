//your code here
let currentVal='';
let operator='';
let result='';

function updateInput(val) {
	currentVal+=val;
document.getElementById('input').value=currentVal;
}

function clearInput(){
	currentVal='';
	operator='';
	result='';
document.getElementById('input').value='';
}

function calculate() {
	if(currentVal=== '')return;
	result= eval(currentVal);
	document.getElementById('input').value=result;
	currentVal=result.toString();
}

document.getElementById('block0').addEventListener('click',()=>updateInput('0'));
document.getElementById('block1').addEventListener('click',()=>updateInput('1'));
document.getElementById('block2').addEventListener('click',()=>updateInput('2'));
document.getElementById('block3').addEventListener('click',()=>updateInput('3'));
document.getElementById('block4').addEventListener('click',()=>updateInput('4'));
document.getElementById('block5').addEventListener('click',()=>updateInput('5'));
document.getElementById('block6').addEventListener('click',()=>updateInput('6'));
document.getElementById('block7').addEventListener('click',()=>updateInput('7'));
document.getElementById('block8').addEventListener('click',()=>updateInput('8'));
document.getElementById('block9').addEventListener('click',()=>updateInput('9'));
document.getElementById('plus').addEventListener('click',()=>updateInput('+'));
document.getElementById('minus').addEventListener('click',()=>updateInput('-'));
document.getElementById('multiply').addEventListener('click',()=>updateInput('*'));
document.getElementById('divide').addEventListener('click',()=>updateInput('/'));
document.getElementById('dot').addEventListener('click',()=>updateInput('.'));
document.getElementById('clr').addEventListener('click',clearInput);
document.getElementById('ans').addEventListener('click',calculate);











