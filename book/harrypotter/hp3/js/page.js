var pages = new Array();
 pages[0]=['1_01','�ڣ��� èͷӥ�ʵ�','7181','�����������밢�ȿ�����ͽ'];
 pages[1]=['1_02','�ڣ��� �꼧����Ĵ����','8093'];
 pages[2]=['1_03','�ڣ��� ��ʿ��������','9145'];
 pages[3]=['1_04','�ڣ��� �Ƹ��ư�','10896'];
 pages[4]=['1_05','�ڣ��� ����','13769'];
 pages[5]=['1_06','�ڣ��� ��ӥ�Ͳ�Ҷ','13867'];
 pages[6]=['1_07','�ڣ��� �¹���Ĳ�����','9199'];
 pages[7]=['1_08','�ڣ��� �ַ�������','10774'];
 pages[8]=['1_09','�ڣ��� �����ʧ��','10864'];
 pages[9]=['1_10','�ڣ����� ����ͼ','14787'];
 pages[10]=['1_11','�ڣ����� �����','11703'];
 pages[11]=['1_12','�ڣ����� �ػ���','9967'];
 pages[12]=['1_13','�ڣ����� �����Ҷ�����Ŀ���','8693'];
 pages[13]=['1_14','�ڣ����� ˹���յĶʼ�','11088'];
 pages[14]=['1_15','�ڣ����� ���������','11322'];
 pages[15]=['1_16','�ڣ����� �������ݽ��ڵ�Ԥ��','9077'];
 pages[16]=['1_17','�ڣ����� è�����Ӻ͹�','8797'];
 pages[17]=['1_18','�ڣ����� ����������β�ͣ���Ű�ͼ�ͷ����','4585'];
 pages[18]=['1_19','�ڣ����� ����ħ������','10924'];
 pages[19]=['1_20','�ڣ����� ���ֵ���','4011'];
 pages[20]=['1_21','�ڣ����� ����������','15001'];
 pages[21]=['1_22','�ڣ����� �ּ�èͷӥ�ʵ�','9920'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '�����������밢�ȿ�����ͽ - ���ߣ�J.K.����';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '�����������밢�ȿ�����ͽ - ���ߣ�J.K.���� - ������ambrosio5';
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