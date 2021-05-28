var br = "<br>"
var n =prompt("Enter a Table Number !")
var d="Showing the Table of Number "+n;
document.getElementById("jstableNumber").innerHTML = d
document.getElementById("top").innerHTML = n
function reload(){
    location.reload();
}


var one = (n + " X " + 1 + " &nbsp; " + " = " + " &nbsp; " + + n*1)+"<br/>"
var two = (n + " X " + 2 +  " &nbsp; " + " = " + " &nbsp; " + n*2)+"<br/>"
var three = (n + " X " + 3 +  " &nbsp; " + " = " + " &nbsp; " + n*3)+"<br/>"
var four = (n + " X " + 4 +  " &nbsp; " + " = " + " &nbsp; " + n*4)+"<br/>"
var five = (n + " X " + 5 +  " &nbsp; " + " = " + " &nbsp; " + n*5)+"<br/>"
var six = (n + " X " + 6 +  " &nbsp; " + " = " + " &nbsp; " + n*6)+"<br/>"
var seven = (n + " X " + 7 +  " &nbsp; " + " = " + " &nbsp; " + n*7)+"<br/>"
var eight = (n + " X " + 8 +  " &nbsp; " + " = " + " &nbsp; " + n*8)+"<br/>"
var nine = (n + " X " + 9 +  " &nbsp; " + " = " + " &nbsp; " + n*9)+"<br/>"
var ten = (n + " X " + 10 + " = " +  " &nbsp; " +  n*10)

Table = [one + two + three + four + five + six + seven + eight + nine + ten]
document.getElementById("finalTable").innerHTML=Table
