var pages = new Array();
 pages[0]=['1_01','�ڣ��� ��¶���','8352','�����������밢�ȿ�����ͽ'];
 pages[1]=['1_02','�ڣ��� �˰�','5522'];
 pages[2]=['1_03','�ڣ��� ����','6392'];
 pages[3]=['1_04','�ڣ��� �ص�ª��','6440'];
 pages[4]=['1_05','�ڣ��� Τ˹��ħ����Ϸ','7919'];
 pages[5]=['1_06','�ڣ��� ��Կ��','5250'];
 pages[6]=['1_07','�ڣ��� �͸����Ϳ�����','11515'];
 pages[7]=['1_08','�ڣ��� ���������籭','12382'];
 pages[8]=['1_09','�ڣ��� ��ħ���','15589'];
 pages[9]=['1_10','�ڣ����� ħ�����ҳ�һ��','6988'];
 pages[10]=['1_11','�ڣ����� ���ϻ����ִ��ؿ��г�','7205'];
 pages[11]=['1_12','�ڣ����� ��ǿ������','11760'];
 pages[12]=['1_13','�ڣ����� ���ۺ��µ�','8672'];
 pages[13]=['1_14','�ڣ����� �����ķ���','10342'];
 pages[14]=['1_15','�ڣ����� ��˹�Ͷٺ͵�ķ˹����','10847'];
 pages[15]=['1_16','�ڣ����� ���汭','12846'];
 pages[16]=['1_17','�ڣ����� ��λ��ʿ','8748'];
 pages[17]=['1_18','�ڣ����� ���ħ��','14199'];
 pages[18]=['1_19','�ڣ����� ����������','13428'];
 pages[19]=['1_20','�ڣ����� ��һ����Ŀ','14867'];
 pages[20]=['1_21','�ڣ����� ����С����������','11945'];
 pages[21]=['1_22','�ڣ����� �������ս','9690'];
 pages[22]=['1_23','�ڣ����� ʥ�����','17129'];
 pages[23]=['1_24','�ڣ����� ������˹���صĶ�������','13144'];
 pages[24]=['1_25','�ڣ����� �𵰺�ħ��','11743'];
 pages[25]=['1_26','�ڣ����� �ڶ�����Ŀ','16071'];
 pages[26]=['1_27','�ڣ����� ��Ű������','14705'];
 pages[27]=['1_28','�ڣ����� ��������������','15770'];
 pages[28]=['1_29','�ڣ����� ج��','8314'];
 pages[29]=['1_30','�ڣ����� ڤ����','11769'];
 pages[30]=['1_31','�ڣ����� ��������Ŀ','14618'];
 pages[31]=['1_32','�ڣ����� Ѫ����͹�ͷ','3467'];
 pages[32]=['1_33','�ڣ����� ʳ��ͽ','7645'];
 pages[33]=['1_34','�ڣ����� ������','5077'];
 pages[34]=['1_35','�ڣ����� �����','10787'];
 pages[35]=['1_36','�ڣ����� �ֵ�����','13007'];
 pages[36]=['1_37','�ڣ����� ��ʼ','10472'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '��������������汭 - ���ߣ�J.K.����';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '��������������汭 - ���ߣ�J.K.���� - ������ambrosio5';
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