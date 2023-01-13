var pages = new Array();
 pages[0]=['1_01','第１章 另一位部长','10148','哈利·波特与混血王子'];
 pages[1]=['1_02','第２章 蜘蛛尾巷','10454'];
 pages[2]=['1_03','第３章 要与不要','9459'];
 pages[3]=['1_04','第４章 霍拉斯·斯拉格霍恩','12947'];
 pages[4]=['1_05','第５章 黏痰过多','12818'];
 pages[5]=['1_06','第６章 德拉科兜圈子','12639'];
 pages[6]=['1_07','第７章 鼻涕虫俱乐部','14252'];
 pages[7]=['1_08','第８章 斯内普如愿以偿','8632'];
 pages[8]=['1_09','第９章 混血王子','12532'];
 pages[9]=['1_10','第１０章 冈特老宅','12728'];
 pages[10]=['1_11','第１１章 赫敏出手相助','10854'];
 pages[11]=['1_12','第１２章 银器和蛋白石','11416'];
 pages[12]=['1_13','第１３章 神秘的里德尔','11597'];
 pages[13]=['1_14','第１４章 福灵剂','13651'];
 pages[14]=['1_15','第１５章 牢不可破的誓言','10835'];
 pages[15]=['1_16','第１６章 冰霜圣诞节','11452'];
 pages[16]=['1_17','第１７章 混沌的记忆','11616'];
 pages[17]=['1_18','第１８章 生日的意外','11890'];
 pages[18]=['1_19','第１９章 小精灵尾巴','11253'];
 pages[19]=['1_20','第２０章 伏地魔的请求','11703'];
 pages[20]=['1_21','第２１章 神秘的房间','10213'];
 pages[21]=['1_22','第２２章 葬礼之后','10879'];
 pages[22]=['1_23','第２３章 魂器','10166'];
 pages[23]=['1_24','第２４章 神锋无影','10384'];
 pages[24]=['1_25','第２５章 被窃听的预言','10354'];
 pages[25]=['1_26','第２６章 岩洞','13133'];
 pages[26]=['1_27','第２７章 被闪电击中的塔楼','9816'];
 pages[27]=['1_28','第２８章 王子逃逸','6714'];
 pages[28]=['1_29','第２９章 凤凰挽歌','11143'];
 pages[29]=['1_30','第３０章 白色坟墓','10865'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '哈利·波特与混血王子 - 作者：J.K.罗琳';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '哈利·波特与混血王子 - 作者：J.K.罗琳 - 制作：ambrosio5';
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