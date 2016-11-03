//var formTest = document.forms.test;
var buttonResult  = $('button[name="result"]');
var radio1 = $('input[name="question1"]');
var radio2 = $('input[name="question2"]');
var radio3 = $('input[name="question3"]');
var check1 = $('input[name="question4"]');
var check2 = $('input[name="question5"]');
var phrase = "Ваш результат -";

	$("#test").on("click","button", function(){
		var finalResultTest = 0;
		var ending = "балл";
		var percent = 0;
		
		if($(radio1).eq(0).prop("checked")){
  		finalResultTest += 1;  	
  	}
		if(radio2.eq(2).prop("checked")){
  		finalResultTest += 1;  	
  	}
		if(radio3.eq(3).prop("checked")){
  		finalResultTest += 1;  	
  	}
		if( !(check1.eq(0).prop("checked") || check1.eq(3).prop("checked")) && (check1.eq(1).prop("checked") && check1.eq(2).prop("checked"))) {
  		finalResultTest += 1;
  	}
		if( !(check2.eq(2).prop("checked") || check2.eq(3).prop("checked")) && (check2.eq(0).prop("checked") && check2.eq(1).prop("checked"))) {
  		finalResultTest += 1;
  	}
	
  switch(finalResultTest){
  	case 0:ending += "ов"; break;
  	case 1:break;
  	case 2:
  	case 3:
  	case 4:ending += "а"; break;
  	default:ending += "ов";break;
  }

percent = (finalResultTest/5)*100;
alert(phrase +" "+finalResultTest +" "+ ending +" или "+ percent+"%");
finalResultTest = 0;
ending = "";
	
});
		


	