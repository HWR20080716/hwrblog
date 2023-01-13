var pages = new Array();
 pages[0]=['1_01','第１章 大难不死的男孩','8982','哈利·波特与魔法石'];
 pages[1]=['1_02','第２章 悄悄消失的玻璃','6762'];
 pages[2]=['1_03','第３章 猫头鹰传书','7697'];
 pages[3]=['1_04','第４章 钥匙保管员','7594'];
 pages[4]=['1_05','第５章 对角巷','14011'];
 pages[5]=['1_06','第６章 从9又3/4站台开始的旅程','13205'];
 pages[6]=['1_07','第７章 分院帽','9355'];
 pages[7]=['1_08','第８章 魔药课老师','6196'];
 pages[8]=['1_09','第９章 午夜决斗','10702'];
 pages[9]=['1_10','第１０章 万圣节前夜','9023'];
 pages[10]=['1_11','第１１章 魅地奇比赛','7275'];
 pages[11]=['1_12','第１２章 厄里斯魔镜','11646'];
 pages[12]=['1_13','第１３章 尼可·勒穆','6725'];
 pages[13]=['1_14','第１４章 挪威脊背龙——诺伯','7174'];
 pages[14]=['1_15','第１５章 禁林','10870'];
 pages[15]=['1_16','第１６章 穿越活板门','14451'];
 pages[16]=['1_17','第１７章 双面人','12461'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '哈利·波特与魔法石 - 作者：J.K.罗琳';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '哈利·波特与魔法石 - 作者：J.K.罗琳 - 制作：ambrosio5';
			document.location = "index.htm";
		}
		else
		{ 
			if (url == 'chapter.htm') parent.document.title = pages[parent.txt][1]; 
			else parent.document.title = pages[parent.txt][3] + " [分卷阅读]";
			document.location = url;
		}
	}
}

function loadtxt(i)
{
	document.write('<script language="JavaScript" src="../txt/'+pages[i][0]+'.txt"></script>');
}

function setCookies(cookieName,cookieValue, expirehours)
{
	var today = new Date();
	var expire = new Date();
	expire.setTime(today.getTime() + 3600000 * 356 * 24);
	document.cookie = cookieName+'='+escape(cookieValue)+';expires='+expire.toGMTString();
}

function ReadCookies(cookieName)
{
	var theCookie = '' + document.cookie;
	var i = theCookie.indexOf(cookieName);
	if (i == -1 || cookieName == '') return ''; 
	var j=theCookie.indexOf(';',i);
	if (j == -1) j = theCookie.length;
	return unescape(theCookie.substring(i + cookieName.length + 1,j));
}