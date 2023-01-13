var currentpos,timer,speed;
function initialize()
{timer=setInterval("scrollwindow()",speed);}
function sc()
{clearInterval(timer);}
function scrollwindow()
{currentpos=document.body.scrollTop;
window.scroll(0,++currentpos);
if(currentpos!=document.body.scrollTop)
sc();}
document.onmousedown=sc
document.ondblclick=initialize

var dsize=15;
function reduce()
{
dsize--;
txt.style.fontSize=+dsize+'pt';
parent.zihao=dsize;
}
function enlarge()
{
dsize++;
txt.style.fontSize=+dsize+'pt';
parent.zihao=dsize;
}
function loadchapter()
{
shizi.selectedIndex=parent.shizi;
float.style.visibility=shizi.options[shizi.selectedIndex].value;
gunsu.selectedIndex=parent.gunsu;
speed=gunsu.options[gunsu.selectedIndex].value;
beijing.selectedIndex=parent.beijing;
bkk.style.background=beijing.options[beijing.selectedIndex].value;
zise.selectedIndex=parent.zise;
txt.style.color=zise.options[zise.selectedIndex].value;
ziti.selectedIndex=parent.ziti;
txt.style.fontFamily=ziti.options[ziti.selectedIndex].value;
var pat=/[0-9]+/gi;
if(pat.exec(parent.zihao))
{
dsize=parent.zihao;
txt.style.fontSize=+dsize+'pt';
}
}

var key=new Array();
key[',']="javascript:reduce()";
key['.']="javascript:enlarge()";
function getKey(keyStroke)
{
isNetscape=(document.layers);
eventChooser=(isNetscape)?keyStroke.which:event.keyCode;
which=String.fromCharCode(eventChooser).toLowerCase();
for(var i in key)if(which==i)window.location=key[i];
}
document.onkeypress=getKey;