var pages = new Array();
 pages[0]=['1_01','�ڣ��� ������������','12023','����������������'];
 pages[1]=['1_02','�ڣ��� һȺèͷӥ','13283'];
 pages[2]=['1_03','�ڣ��� ��ǲ����','11323'];
 pages[3]=['1_04','�ڣ��� ����Ī�㳡������','12398'];
 pages[4]=['1_05','�ڣ��� �����','12081'];
 pages[5]=['1_06','�ڣ��� �߹������ϵĲ����˼���','14834'];
 pages[6]=['1_07','�ڣ��� ħ����','9722'];
 pages[7]=['1_08','�ڣ��� ����','9044'];
 pages[8]=['1_09','�ڣ��� Τ˹�����˵ķ���','17635'];
 pages[9]=['1_10','�ڣ����� ¬�ȡ����ŵ�','12924'];
 pages[10]=['1_11','�ڣ����� ��Ժñ���¸�','12881'];
 pages[11]=['1_12','�ڣ����� ��ķ�������','18291'];
 pages[12]=['1_13','�ڣ����� ��������˹�ؽ���','18602'];
 pages[13]=['1_14','�ڣ����� �����ʹ�Ű�','16983'];
 pages[14]=['1_15','�ڣ����� �����ִĵĸ߼������','14925'];
 pages[15]=['1_16','�ڣ����� ����ͷ�ư�','12435'];
 pages[16]=['1_17','�ڣ����� �ڶ�ʮ�ĺŽ�����','12141'];
 pages[17]=['1_18','�ڣ����� �˲������','12203'];
 pages[18]=['1_19','�ڣ����� ʨ������','11684'];
 pages[19]=['1_20','�ڣ����� ����Ĺ���','10683'];
 pages[20]=['1_21','�ڣ����� ����','12903'];
 pages[21]=['1_22','�ڣ����� ʥâ��ħ���˲�ҽԺ','13902'];
 pages[22]=['1_23','�ڣ����� ��ղ����е�ʥ����','12765'];
 pages[23]=['1_24','�ڣ����� ���Է����','13850'];
 pages[24]=['1_25','�ڣ����� ���εļ׳�','13100'];
 pages[25]=['1_26','�ڣ����� �ξ�����','14204'];
 pages[26]=['1_27','�ڣ����� ���˺͸�����','15817'];
 pages[27]=['1_28','�ڣ����� ˹������ʹ��ļ���','17065'];
 pages[28]=['1_29','�ڣ����� ��ҵ��ѯ','15492'];
 pages[29]=['1_30','�ڣ����� ������','16860'];
 pages[30]=['1_31','�ڣ����� O.W.L����','15903'];
 pages[31]=['1_32','�ڣ����� �ӻ��й���','13174'];
 pages[32]=['1_33','�ڣ����� ս�������','8191'];
 pages[33]=['1_34','�ڣ����� ��������˾','10436'];
 pages[34]=['1_35','�ڣ����� �ᣱ˰�','16238'];
 pages[35]=['1_36','�ڣ����� ��Ψһ���µ���','8129'];
 pages[36]=['1_37','�ڣ����� ʧ���Ԥ��','16656'];
 pages[37]=['1_38','�ڣ����� �ڶ���ս��������','15894'];


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