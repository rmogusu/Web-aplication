
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


function calculate() {
 var valid=true;
 var form = document.forms["mainForm"];
 var dd = form["century"].value;
 var mm = form["year"].value;
 var cc = form["month"].value;
 var yy = form["day"].value;
 var gender=form["gender"].value;

 if (dd <= 0 || dd > 31){
   alert ("Invalid . Enter valid one.");
   valid=false;
 }
 if (mm <= 0 || mm > 12){
   alert("Invalid . Enter valid one");
   valid=false;
 }

 if (valid) {
   var result = weekDay(dd,mm,cc,yy);
   result = result.toFixed(0);
   if (gender==='male') {
     alert ("Your Akan name is "+maleNames[result]);
     document.getElementById("akan").innerHTML="your Akan name is"+maleNames[result]
   }
   else{
     alert("You Akan name is "+femaleNames[result]);
     document.getElementById("akan").innerHTML="Your Akan name is"+femaleNames[result]
   }
 }
}
