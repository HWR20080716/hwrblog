var pages = new Array();
 pages[0]=['1_01','�ڣ��� ���Ѳ������к�','8982','������������ħ��ʯ'];
 pages[1]=['1_02','�ڣ��� ������ʧ�Ĳ���','6762'];
 pages[2]=['1_03','�ڣ��� èͷӥ����','7697'];
 pages[3]=['1_04','�ڣ��� Կ�ױ���Ա','7594'];
 pages[4]=['1_05','�ڣ��� �Խ���','14011'];
 pages[5]=['1_06','�ڣ��� ��9��3/4վ̨��ʼ���ó�','13205'];
 pages[6]=['1_07','�ڣ��� ��Ժñ','9355'];
 pages[7]=['1_08','�ڣ��� ħҩ����ʦ','6196'];
 pages[8]=['1_09','�ڣ��� ��ҹ����','10702'];
 pages[9]=['1_10','�ڣ����� ��ʥ��ǰҹ','9023'];
 pages[10]=['1_11','�ڣ����� �ȵ������','7275'];
 pages[11]=['1_12','�ڣ����� ����˹ħ��','11646'];
 pages[12]=['1_13','�ڣ����� ��ɡ�����','6725'];
 pages[13]=['1_14','�ڣ����� Ų������������ŵ��','7174'];
 pages[14]=['1_15','�ڣ����� ����','10870'];
 pages[15]=['1_16','�ڣ����� ��Խ�����','14451'];
 pages[16]=['1_17','�ڣ����� ˫����','12461'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '������������ħ��ʯ - ���ߣ�J.K.����';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '������������ħ��ʯ - ���ߣ�J.K.���� - ������ambrosio5';
			document.location = "index.htm";
		}
		else
		{ 
			if (url == 'chapter.htm') parent.document.title = pages[parent.txt][1]; 
			else parent.document.title = pages[parent.txt][3] + " [�־��Ķ�]";
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