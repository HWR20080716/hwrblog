var pages = new Array();
 pages[0]=['1_01','�ڣ��� ����������','4849','����������������'];
 pages[1]=['1_02','�ڣ��� ��ȵľ���','5631'];
 pages[2]=['1_03','�ڣ��� ª��','8545'];
 pages[3]=['1_04','�ڣ��� ���������','11365'];
 pages[4]=['1_05','�ڣ��� ������','10059'];
 pages[5]=['1_06','�ڣ��� �����ޡ������','8752'];
 pages[6]=['1_07','�ڣ��� ����ֺ�ϸ��','8873'];
 pages[7]=['1_08','�ڣ��� �ɳ����','9799'];
 pages[8]=['1_09','�ڣ��� ǽ�ϵ���','11313'];
 pages[9]=['1_10','�ڣ����� ʧ�ص�������','11338'];
 pages[10]=['1_11','�ڣ����� �������ֲ�','12676'];
 pages[11]=['1_12','�ڣ����� ��������','11727'];
 pages[12]=['1_13','�ڣ����� �����ռ�','11640'];
 pages[13]=['1_14','�ڣ����� ������������','8364'];
 pages[14]=['1_15','�ڣ����� �������','9551'];
 pages[15]=['1_16','�ڣ����� ����','12344'];
 pages[16]=['1_17','�ڣ����� ˹�����ֵļ̳���','12301'];
 pages[17]=['1_18','�ڣ����� ��ȵı���','8647'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '���������������� - ���ߣ�J.K.����';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '���������������� - ���ߣ�J.K.���� - ������ambrosio5';
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