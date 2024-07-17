function clock(){
var daysName=["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
var monthsName= ["January","February","March","April","May","June","July","August","September","October","November","December"];
var today=new Date();
document.getElementById("date").innerHTML= (daysName[today.getDay()]+" "+today.getDate()+" "+monthsName[today.getMonth()]+" "+today.getFullYear());

var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
if(h>12){
    h=h-12;
    session="PM" //var session=(h<12)? "AM":"PM";
}
if(h==0){
    session="AM"
 }

hour=(h<10)?"0"+h:h;
minutes=(m<10)?"0"+m:m;
seconds=(s<10)?"0"+s:s;
document.getElementById("hr").innerHTML=hour;
document.getElementById("min").innerHTML=minutes;
document.getElementById("sec").innerHTML=seconds;
document.getElementById("session").innerHTML=session;
}var digitalClock=setInterval(clock,400);
