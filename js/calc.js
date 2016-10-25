var formCalc = document.forms.calc;
var numberOne = 0;
var numberTwo = 0;
var operation ="";
var result = 0;
var input = document.querySelector('input[name="result"]');
console.log(input);

formCalc.onclick = function(event) {
  var target = event.target; // где был клик?
		switch(target.className){
			case "number": enterNumbers(target);break;
			case "operation": makeOperation(target);break;
			case  "plusMin": changeSign(target);break;
			case "equal": showResult(target);break;
			case "reset": resetAll(target);break;
			default: break;
		}
};

function enterNumbers(target){
		input.value += target.textContent;
}


function makeOperation(target){
	if(!numberOne){
		numberOne = +input.value;
	}

	if(numberOne && !operation){
		operation += target.textContent;
		input.value = "";
	}else{
		operation = target.textContent;
		input.value = "";
	}

	if(target.name == "min" && !numberOne){
		input.value += target.textContent;
		numberOne = +input.value;
		
	}
}

function changeSign(target){
	input.value = +(input.value) * -1; 
	numberOne = input.value;
	
}
	
function showResult(target){
	numberTwo = +input.value;
	if((+numberTwo) == 0){
		alert("Ты что творишь?На ноль делить нельзя!!!");
		 resetAll(target);
	}
	if(numberOne && numberTwo && operation){
		switch(operation) {
			case "-": result = ((+numberOne) - (+numberTwo));break;
			case "+": result = ((+numberOne) + (+numberTwo));break;
			case "/": result = ((+numberOne) / (+numberTwo));break;
			case "*": result = ((+numberOne) * (+numberTwo));break;
			default:break;
			
		}
	input.value = result;
	}
operation = "";	
}

function resetAll(target){
	input.value = "";
	operation = "";
	numberOne = 0;
	numberTwo = 0;
	result = 0;
}

