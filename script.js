
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
var days=["Sunday","Monday","Tuesday","Wensday","Thursday","Friday","Saturday"]

function dayOfTheWeek(dd,mm,cc,yy) {
 return ((((cc/4)-2*cc-1)+(5*yy/4)+(26*(mm+1)/10)+dd)%7)
}

function calculateBirthday(form){
 var dd = document.forms["myForm"]["date"].value;
 var mm = document.forms["myForm"]["month"].value;
 var cc = document.forms["myForm"]["century"].value;
 var yy = document.forms["myForm"]["year"].value;
 var gender=document.forms["myForm"]["gender"].value;
 var result= dayOfTheWeek(dd,mm,cc,yy).toFixed();
 // alert(result);
 //
 // if (dd <= 0 || dd > 31){
 //   alert ("Invalid date. Enter valid date.");
 //   valid=false;
 // }
 // if (mm <= 0 || mm > 12){
 //   alert("Invalid month. Enter valid month");
 //   valid=false;
 // }
 if(result == 0 && gender=="male"){
   alert('Your Akan Name is ' +maleNames[0] +' you were born on Sunday');
 }
 else if(result == 1 && gender=="male"){
   alert( 'Your Akan Name is ' + maleNames[1] +' you were born on Monday');
 }
 else if(result == 2 && gender=="male"){
   alert( 'Your Akan Name is ' + maleNames[2]+' you were born on Tuesday');
 }
 else if(result == 3 && gender=="male"){
   alert('Your Akan Name is ' +maleNames[3] +' you were born on Wednesday');
 }
 else if(result == 4 && gender=="male"){
   alert('Your Akan Name is ' + maleNames[4] +' you were born on Thursday');
 }
 else if(result == 5 && gender=="male"){
   alert('Your Akan Name is ' + maleNames[5] +' you were born on Friday');
 }
 else if(result == 6 && gender=="male"){
   alert('Your Akan Name is ' + maleNames[6] +' you were born on Saturday');
 }
 if(result == 0 && gender=="female"){
   alert('Your Akan Name is ' + femaleNames[0] +' you were born on Sunday');
 }
 else if(result == 1 && gender=="female"){
   alert('Your Akan Name is ' + femaleNames[1] +' you were born on Monday');
 }
 else if(result == 2 && gender=="female"){
   alert( 'Your Akan Name is ' + femaleNames[2] +' you were born on Tuesday');
 }
 else if(result == 3 && gender=="female"){
   alert('Your Akan Name is ' + femaleNames[3]+' you were born on Wednesday');
 }
 else if(result == 4 && gender=="female"){
   alert('Your Akan Name is ' + femaleNames[4] +' you were born on Thursday');
 }
 else if(result == 5 && gender=="female"){
   alert('Your Akan Name is ' + femaleNames[5] +' you were born on Friday');
 }
 else if(result == 6 && gender=="male"){
   alert('Your Akan Name is ' + maleNames[6] +' you were born on Saturday');
 }
 else {
   alert("not valid");

 }


 // if (valid) {
 //   var result = dayOfTheWeek(dd,mm,cc,yy);
 //   result = result.toFixed(0);
 //   if (gender==='male') {
 //     alert ("Your Akan name is "+maleNames[result]);
 //     document.getElementById("akan").innerHTML="Akan name is"+maleNames[result]
 //   }
 //   else{
 //     alert("You Akan name is "+femaleNames[result]);
 //     document.getElementById("akan").innerHTML="Akan name is"+femaleNames[result]
 //   }
 }
