<!-- Hide
var timerID = null
var timerRunning = false
function MakeArray(size)
{
this.length = size;
for(var i = 1; i <= size; i++)
{
this[i] = "";
}
return this;
}
function stopclock (){
if(timerRunning)
clearTimeout(timerID);
timerRunning = false
}
function showtime () {
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var timeValue = "";
timeValue += ((hours <= 12) ? hours : hours - 12);
timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
timeValue += (hours < 12) ? " AM" : " PM";
document.jsfrm.face.value = timeValue;
timerID = setTimeout("showtime()",1000);
timerRunning = true
}
function startclock () {
stopclock();
showtime()
}
document.write("<form name='jsfrm'>")
document.write("<input type=text name='face' value='' class=time>")
document.write("</form>")
//-->
