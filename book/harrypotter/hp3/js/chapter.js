var prevpage = -1;
var nextpage = -1;

if (parent.txt == undefined)
{
	parent.txt = Number(ReadCookies("index"));
	parent.document.title = ReadCookies("title");
}
index = parent.txt;

switch(index)
{
	case 0: nextpage = 1; break;
	case pages.length - 1: prevpage = index - 1; break;
	default: prevpage = index - 1; nextpage = index + 1;
}

function next(a,b,c,j)
{
	var s = "";
	if(prevpage != -1 && a != "") document.write("<A href='javascript:loadurl(\"chapter.htm\",prevpage)'>"+a+"</A>");
	if(j > 0) for(i = 1;i <= j;i++) s = s + "&nbsp;";
	if(b != "") document.write(s+"<a href=javascript:loadurl(\"index.htm\")>"+b+"</A>"+s);
	if(nextpage != -1 && c != "") document.write("<A href='javascript:loadurl(\"chapter.htm\",nextpage)'>"+c+"</A>");
}

function gotoNextPage()
{
	if (window.event.keyCode ==13) loadurl("index.htm",-1);
	if (window.event.keyCode == 37 && prevpage != -1) loadurl("chapter.htm",prevpage);
	if (window.event.keyCode == 39 && nextpage != -1) loadurl("chapter.htm",nextpage);
}

document.onkeydown=gotoNextPage;