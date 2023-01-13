var pages = new Array();
 pages[0]=['1_01','第１章 达力遭遇摄魂怪','12023','哈利·波特与凤凰社'];
 pages[1]=['1_02','第２章 一群猫头鹰','13283'];
 pages[2]=['1_03','第３章 先遣警卫','11323'];
 pages[3]=['1_04','第４章 格里莫广场１２号','12398'];
 pages[4]=['1_05','第５章 凤凰社','12081'];
 pages[5]=['1_06','第６章 高贵的最古老的布莱克家族','14834'];
 pages[6]=['1_07','第７章 魔法部','9722'];
 pages[7]=['1_08','第８章 受审','9044'];
 pages[8]=['1_09','第９章 韦斯莱夫人的烦恼','17635'];
 pages[9]=['1_10','第１０章 卢娜·洛夫古德','12924'];
 pages[10]=['1_11','第１１章 分院帽的新歌','12881'];
 pages[11]=['1_12','第１２章 乌姆里奇教授','18291'];
 pages[12]=['1_13','第１３章 被多洛雷斯关禁闭','18602'];
 pages[13]=['1_14','第１４章 珀西和大脚板','16983'];
 pages[14]=['1_15','第１５章 霍格沃茨的高级调查官','14925'];
 pages[15]=['1_16','第１６章 在猪头酒吧','12435'];
 pages[16]=['1_17','第１７章 第二十四号教育今','12141'];
 pages[17]=['1_18','第１８章 邓布利多军','12203'];
 pages[18]=['1_19','第１９章 狮子与蛇','11684'];
 pages[19]=['1_20','第２０章 海格的故事','10683'];
 pages[20]=['1_21','第２１章 蛇眼','12903'];
 pages[21]=['1_22','第２３章 圣芒戈魔法伤病医院','13902'];
 pages[22]=['1_23','第２３章 封闭病房中的圣诞节','12765'];
 pages[23]=['1_24','第２４章 大脑封闭术','13850'];
 pages[24]=['1_25','第２５章 无奈的甲虫','13100'];
 pages[25]=['1_26','第２６章 梦境内外','14204'];
 pages[26]=['1_27','第２７章 马人和告密生','15817'];
 pages[27]=['1_28','第２８章 斯内普最痛苦的记忆','17065'];
 pages[28]=['1_29','第２９章 就业咨询','15492'];
 pages[29]=['1_30','第３０章 格洛普','16860'];
 pages[30]=['1_31','第３１章 O.W.Lｓ考试','15903'];
 pages[31]=['1_32','第３２章 从火中归来','13174'];
 pages[32]=['1_33','第３３章 战斗与飞行','8191'];
 pages[33]=['1_34','第３４章 神秘事务司','10436'];
 pages[34]=['1_35','第３５章 帷幔彼岸','16238'];
 pages[35]=['1_36','第３６章 他唯一害怕的人','8129'];
 pages[36]=['1_37','第３７章 失落的预言','16656'];
 pages[37]=['1_38','第３８章 第二场战争打响了','15894'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '哈利·波特与凤凰社 - 作者：J.K.罗琳';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '哈利·波特与凤凰社 - 作者：J.K.罗琳 - 制作：ambrosio5';
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