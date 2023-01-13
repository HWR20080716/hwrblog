var pages = new Array();
 pages[0]=['1_01','第１章 猫头鹰邮递','7181','哈利·波特与阿兹卡班囚徒'];
 pages[1]=['1_02','第２章 玛姬姑妈的大错误','8093'];
 pages[2]=['1_03','第３章 骑士公共汽车','9145'];
 pages[3]=['1_04','第４章 破釜酒吧','10896'];
 pages[4]=['1_05','第５章 摄魂怪','13769'];
 pages[5]=['1_06','第６章 猎鹰和茶叶','13867'];
 pages[6]=['1_07','第７章 衣柜里的博格特','9199'];
 pages[7]=['1_08','第８章 胖夫人逃走','10774'];
 pages[8]=['1_09','第９章 不祥的失败','10864'];
 pages[9]=['1_10','第１０章 活点地图','14787'];
 pages[10]=['1_11','第１１章 火弩箭','11703'];
 pages[11]=['1_12','第１２章 守护神','9967'];
 pages[12]=['1_13','第１３章 格兰芬多对拉文克劳','8693'];
 pages[13]=['1_14','第１４章 斯内普的妒忌','11088'];
 pages[14]=['1_15','第１５章 魁地奇决赛','11322'];
 pages[15]=['1_16','第１６章 特里劳妮教授的预言','9077'];
 pages[16]=['1_17','第１７章 猫，耗子和狗','8797'];
 pages[17]=['1_18','第１８章 月亮脸，虫尾巴，大脚板和尖头叉子','4585'];
 pages[18]=['1_19','第１９章 伏地魔的仆人','10924'];
 pages[19]=['1_20','第２０章 摄魂怪的吻','4011'];
 pages[20]=['1_21','第２１章 赫敏的秘密','15001'];
 pages[21]=['1_22','第２２章 又见猫头鹰邮递','9920'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '哈利·波特与阿兹卡班囚徒 - 作者：J.K.罗琳';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '哈利·波特与阿兹卡班囚徒 - 作者：J.K.罗琳 - 制作：ambrosio5';
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