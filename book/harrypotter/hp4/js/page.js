var pages = new Array();
 pages[0]=['1_01','第１章 里德尔府','8352','哈利·波特与阿兹卡班囚徒'];
 pages[1]=['1_02','第２章 伤疤','5522'];
 pages[2]=['1_03','第３章 邀请','6392'];
 pages[3]=['1_04','第４章 回到陋居','6440'];
 pages[4]=['1_05','第５章 韦斯莱魔法把戏','7919'];
 pages[5]=['1_06','第６章 门钥匙','5250'];
 pages[6]=['1_07','第７章 巴格曼和克劳奇','11515'];
 pages[7]=['1_08','第８章 魁地奇世界杯','12382'];
 pages[8]=['1_09','第９章 黑魔标记','15589'];
 pages[9]=['1_10','第１０章 魔法部乱成一团','6988'];
 pages[10]=['1_11','第１１章 登上霍格沃茨特快列车','7205'];
 pages[11]=['1_12','第１２章 三强争霸赛','11760'];
 pages[12]=['1_13','第１３章 疯眼汉穆迪','8672'];
 pages[13]=['1_14','第１４章 不可饶忿咒','10342'];
 pages[14]=['1_15','第１５章 布斯巴顿和德姆斯特朗','10847'];
 pages[15]=['1_16','第１６章 火焰杯','12846'];
 pages[16]=['1_17','第１７章 四位勇士','8748'];
 pages[17]=['1_18','第１８章 检测魔杖','14199'];
 pages[18]=['1_19','第１９章 匈牙利树蜂','13428'];
 pages[19]=['1_20','第２０章 第一个项目','14867'];
 pages[20]=['1_21','第２１章 家养小精灵解放阵线','11945'];
 pages[21]=['1_22','第２２章 意外的挑战','9690'];
 pages[22]=['1_23','第２３章 圣诞舞会','17129'];
 pages[23]=['1_24','第２４章 丽塔·斯基特的独家新闻','13144'];
 pages[24]=['1_25','第２５章 金蛋和魔眼','11743'];
 pages[25]=['1_26','第２６章 第二个项目','16071'];
 pages[26]=['1_27','第２７章 大脚板回来了','14705'];
 pages[27]=['1_28','第２８章 克劳奇先生疯了','15770'];
 pages[28]=['1_29','第２９章 噩梦','8314'];
 pages[29]=['1_30','第３０章 冥想盆','11769'];
 pages[30]=['1_31','第３１章 第三个项目','14618'];
 pages[31]=['1_32','第３２章 血，肉和骨头','3467'];
 pages[32]=['1_33','第３３章 食死徒','7645'];
 pages[33]=['1_34','第３４章 闪回咒','5077'];
 pages[34]=['1_35','第３５章 吐真剂','10787'];
 pages[35]=['1_36','第３６章 分道扬镳','13007'];
 pages[36]=['1_37','第３７章 开始','10472'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '哈利·波特与火焰杯 - 作者：J.K.罗琳';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '哈利·波特与火焰杯 - 作者：J.K.罗琳 - 制作：ambrosio5';
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