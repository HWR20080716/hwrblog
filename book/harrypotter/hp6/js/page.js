var pages = new Array();
 pages[0]=['1_01','�ڣ��� ��һλ����','10148','�������������Ѫ����'];
 pages[1]=['1_02','�ڣ��� ֩��β��','10454'];
 pages[2]=['1_03','�ڣ��� Ҫ�벻Ҫ','9459'];
 pages[3]=['1_04','�ڣ��� ����˹��˹�������','12947'];
 pages[4]=['1_05','�ڣ��� �̵����','12818'];
 pages[5]=['1_06','�ڣ��� �����ƶ�Ȧ��','12639'];
 pages[6]=['1_07','�ڣ��� �������ֲ�','14252'];
 pages[7]=['1_08','�ڣ��� ˹������Ը�Գ�','8632'];
 pages[8]=['1_09','�ڣ��� ��Ѫ����','12532'];
 pages[9]=['1_10','�ڣ����� ������լ','12728'];
 pages[10]=['1_11','�ڣ����� ������������','10854'];
 pages[11]=['1_12','�ڣ����� �����͵���ʯ','11416'];
 pages[12]=['1_13','�ڣ����� ���ص���¶�','11597'];
 pages[13]=['1_14','�ڣ����� �����','13651'];
 pages[14]=['1_15','�ڣ����� �β����Ƶ�����','10835'];
 pages[15]=['1_16','�ڣ����� ��˪ʥ����','11452'];
 pages[16]=['1_17','�ڣ����� ����ļ���','11616'];
 pages[17]=['1_18','�ڣ����� ���յ�����','11890'];
 pages[18]=['1_19','�ڣ����� С����β��','11253'];
 pages[19]=['1_20','�ڣ����� ����ħ������','11703'];
 pages[20]=['1_21','�ڣ����� ���صķ���','10213'];
 pages[21]=['1_22','�ڣ����� ����֮��','10879'];
 pages[22]=['1_23','�ڣ����� ����','10166'];
 pages[23]=['1_24','�ڣ����� �����Ӱ','10384'];
 pages[24]=['1_25','�ڣ����� ��������Ԥ��','10354'];
 pages[25]=['1_26','�ڣ����� �Ҷ�','13133'];
 pages[26]=['1_27','�ڣ����� ��������е���¥','9816'];
 pages[27]=['1_28','�ڣ����� ��������','6714'];
 pages[28]=['1_29','�ڣ����� ������','11143'];
 pages[29]=['1_30','�ڣ����� ��ɫ��Ĺ','10865'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '�������������Ѫ���� - ���ߣ�J.K.����';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '�������������Ѫ���� - ���ߣ�J.K.���� - ������ambrosio5';
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