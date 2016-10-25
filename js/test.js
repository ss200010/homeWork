var formTest = document.forms.test;
var finalResultTest = 0;
var buttonResult  = document.querySelector('button[name="result"]');
var radio1 = formTest.elements.question1;
var radio2 = formTest.elements.question2;
var radio3 = formTest.elements.question3;
var check1 = formTest.elements.question4;
var check2 = formTest.elements.question5;
var phrase = "Ваш результат -";
var ending = "балл";
var percent = 0;
		
buttonResult.onclick = function() {
  if(radio1[0].checked){
  	finalResultTest += 1;  	
  }
  if(radio2[2].checked){
  	finalResultTest += 1;  	
  }
  if(radio3[3].checked){
  	finalResultTest += 1;  	
  }
  if( !(check1[0].checked || check1[3].checked) && (check1[1].checked && check1[2].checked)) {
  	finalResultTest += 1;
  }

  if( !(check2[2].checked || check2[3].checked) && (check2[0].checked && check2[1].checked)) {
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
	
};		
		
		


	