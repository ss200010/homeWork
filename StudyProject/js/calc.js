var numberOne = 0;
var numberTwo = 0;
var operation ="";
var result = 0;
var input = $("#result")[0];

$("#calc").on( "click", " button", function(event){
	 if($(this).hasClass("number")){
		 enterNumbers(this);
	 }else if($(this).hasClass("operation")){
		 makeOperation(this);
	 }else if($(this).hasClass("plusMin")){
		 changeSign(this);
	 }else if($(this).hasClass("equal")){
		 showResult(this);
	 }else{
		 resetAll(this);
	 }	
});

function enterNumbers(event){
	$(input).val(function(i, val){
		return val + $(event).text();
	});
}

function makeOperation(event){
	if(!numberOne){
		numberOne = $(input).val();
	}

	if(numberOne && !operation){
		operation += $(event).text();
		$(input).val("");
	}else{
		operation = $(event).text();
		$(input).val("");
	}

	if($(event).attr("name") == "min" && !numberOne){
		$(input).val(function(i, val){
		return val + $(event).text();
		});
	}
}

function changeSign(event){
	$(input).val(function(i, val){
		if($(input).val()){
			return val * -1;
			numberOne = $(input).val();
		}else{
		}
	});
}
	
function showResult(event){
	numberTwo = $(input).val();
	if((+numberTwo) == 0 && operation == "/"){
		alert("Ты что творишь?На ноль делить нельзя!!!");
		 resetAll(this);
	}
	if(numberOne && numberTwo && operation){
		switch(operation) {
			case "-": result = ((+numberOne) - (+numberTwo));break;
			case "+": result = ((+numberOne) + (+numberTwo));break;
			case "/": result = ((+numberOne) / (+numberTwo));break;
			case "*": result = ((+numberOne) * (+numberTwo));break;
			default:break;
			
		}
		$(input).val(result);
	}
operation = "";
numberOne = result;
}

function resetAll(event){
	$(input).val("");
	operation = "";
	numberOne = 0;
	numberTwo = 0;
	result = 0;
}

