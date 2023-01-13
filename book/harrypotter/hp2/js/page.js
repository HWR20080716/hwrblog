var pages = new Array();
 pages[0]=['1_01','第１章 最糟糕的生日','4849','哈利·波特与密室'];
 pages[1]=['1_02','第２章 多比的警告','5631'];
 pages[2]=['1_03','第３章 陋居','8545'];
 pages[3]=['1_04','第４章 在丽痕书店','11365'];
 pages[4]=['1_05','第５章 打人柳','10059'];
 pages[5]=['1_06','第６章 吉德罗·洛哈特','8752'];
 pages[6]=['1_07','第７章 泥巴种和细语','8873'];
 pages[7]=['1_08','第８章 忌辰晚会','9799'];
 pages[8]=['1_09','第９章 墙上的字','11313'];
 pages[9]=['1_10','第１０章 失控的游走球','11338'];
 pages[10]=['1_11','第１１章 决斗俱乐部','12676'];
 pages[11]=['1_12','第１２章 复方汤剂','11727'];
 pages[12]=['1_13','第１３章 绝密日记','11640'];
 pages[13]=['1_14','第１４章 康奈利·福吉','8364'];
 pages[14]=['1_15','第１５章 阿拉戈克','9551'];
 pages[15]=['1_16','第１６章 密室','12344'];
 pages[16]=['1_17','第１７章 斯莱特林的继承人','12301'];
 pages[17]=['1_18','第１８章 多比的报偿','8647'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '哈利·波特与密室 - 作者：J.K.罗琳';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '哈利·波特与密室 - 作者：J.K.罗琳 - 制作：ambrosio5';
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