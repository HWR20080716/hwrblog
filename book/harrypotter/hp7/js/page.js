var pages = new Array();
 pages[0]=['1_01','第１章 黑魔王崛起','6443','哈利·波特与死亡圣器'];
 pages[1]=['1_02','第２章 回忆','7606'];
 pages[2]=['1_03','第３章 德思礼一家离开','6603'];
 pages[3]=['1_04','第４章 七个波特','10487'];
 pages[4]=['1_05','第５章 坠落的勇士','12287'];
 pages[5]=['1_06','第６章 穿睡衣的食尸鬼','13174'];
 pages[6]=['1_07','第７章 阿不思·邓布利多的遗嘱','13739'];
 pages[7]=['1_08','第８章 婚礼','13003'];
 pages[8]=['1_09','第９章 藏身之处','8186'];
 pages[9]=['1_10','第１０章 克利切的故事','12261'];
 pages[10]=['1_11','第１１章 贿赂','10439'];
 pages[11]=['1_12','第１２章 魔法即强权','11499'];
 pages[12]=['1_13','第１３章 麻瓜出身登记委员会','10767'];
 pages[13]=['1_14','第１４章 小偷','7581'];
 pages[14]=['1_15','第１５章 妖精的报复','13478'];
 pages[15]=['1_16','第１６章 戈德里克山谷','8858'];
 pages[16]=['1_17','第１７章 巴希达的秘密','9962'];
 pages[17]=['1_18','第１８章 阿不思·邓布利多的生平和谎言','6262'];
 pages[18]=['1_19','第１９章 银色的牝鹿','12028'];
 pages[19]=['1_20','第２０章 谢诺菲留斯·洛夫古德','8292'];
 pages[20]=['1_21','第２１章 三兄弟的传说','9197'];
 pages[21]=['1_22','第２２章 死亡圣器','11246'];
 pages[22]=['1_23','第２３章 马尔福庄园','15910'];
 pages[23]=['1_24','第２４章 魔杖制作人','12900'];
 pages[24]=['1_25','第２５章 贝壳小崖','8370'];
 pages[25]=['1_26','第２６章 古灵阁','12642'];
 pages[26]=['1_27','第２７章 最后的隐藏之处','4831'];
 pages[27]=['1_28','第２８章 丢失的镜子','8867'];
 pages[28]=['1_29','第２９章 失踪的冠冕','9191'];
 pages[29]=['1_30','第３０章 西弗勒斯·斯内普被赶跑','10105'];
 pages[30]=['1_31','第３１章 霍格沃茨的战斗','15986'];
 pages[31]=['1_32','第３２章 老魔杖','10874'];
 pages[32]=['1_33','第３３章 “王子”的故事','16787'];
 pages[33]=['1_34','第３４章 又见禁林','7148'];
 pages[34]=['1_35','第３５章 国王十字车站','9896'];
 pages[35]=['1_36','第３６章 百密一疏','13980'];
 pages[36]=['1_37','尾声 十九年后','3216'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '哈利·波特与死亡圣器 - 作者：J.K.罗琳';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '哈利·波特与死亡圣器 - 作者：J.K.罗琳 - 制作：ambrosio5';
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