var pages = new Array();
 pages[0]=['1_01','�ڣ��� ��ħ������','6443','����������������ʥ��'];
 pages[1]=['1_02','�ڣ��� ����','7606'];
 pages[2]=['1_03','�ڣ��� ��˼��һ���뿪','6603'];
 pages[3]=['1_04','�ڣ��� �߸�����','10487'];
 pages[4]=['1_05','�ڣ��� ׹�����ʿ','12287'];
 pages[5]=['1_06','�ڣ��� ��˯�µ�ʳʬ��','13174'];
 pages[6]=['1_07','�ڣ��� ����˼���˲����������','13739'];
 pages[7]=['1_08','�ڣ��� ����','13003'];
 pages[8]=['1_09','�ڣ��� ����֮��','8186'];
 pages[9]=['1_10','�ڣ����� �����еĹ���','12261'];
 pages[10]=['1_11','�ڣ����� ��¸','10439'];
 pages[11]=['1_12','�ڣ����� ħ����ǿȨ','11499'];
 pages[12]=['1_13','�ڣ����� ��ϳ���Ǽ�ίԱ��','10767'];
 pages[13]=['1_14','�ڣ����� С͵','7581'];
 pages[14]=['1_15','�ڣ����� �����ı���','13478'];
 pages[15]=['1_16','�ڣ����� ������ɽ��','8858'];
 pages[16]=['1_17','�ڣ����� ��ϣ�������','9962'];
 pages[17]=['1_18','�ڣ����� ����˼���˲��������ƽ�ͻ���','6262'];
 pages[18]=['1_19','�ڣ����� ��ɫ����¹','12028'];
 pages[19]=['1_20','�ڣ����� лŵ����˹�����ŵ�','8292'];
 pages[20]=['1_21','�ڣ����� ���ֵܵĴ�˵','9197'];
 pages[21]=['1_22','�ڣ����� ����ʥ��','11246'];
 pages[22]=['1_23','�ڣ����� �����ׯ԰','15910'];
 pages[23]=['1_24','�ڣ����� ħ��������','12900'];
 pages[24]=['1_25','�ڣ����� ����С��','8370'];
 pages[25]=['1_26','�ڣ����� �����','12642'];
 pages[26]=['1_27','�ڣ����� ��������֮��','4831'];
 pages[27]=['1_28','�ڣ����� ��ʧ�ľ���','8867'];
 pages[28]=['1_29','�ڣ����� ʧ�ٵĹ���','9191'];
 pages[29]=['1_30','�ڣ����� ������˹��˹���ձ�����','10105'];
 pages[30]=['1_31','�ڣ����� �����ִĵ�ս��','15986'];
 pages[31]=['1_32','�ڣ����� ��ħ��','10874'];
 pages[32]=['1_33','�ڣ����� �����ӡ��Ĺ���','16787'];
 pages[33]=['1_34','�ڣ����� �ּ�����','7148'];
 pages[34]=['1_35','�ڣ����� ����ʮ�ֳ�վ','9896'];
 pages[35]=['1_36','�ڣ����� ����һ��','13980'];
 pages[36]=['1_37','β�� ʮ�����','3216'];


function loadurl(url,num)
{
//alert(num);
	if (num == undefined)
	{
		parent.document.title = '����������������ʥ�� - ���ߣ�J.K.����';
		document.location = url;
	} 
	else
	{
		parent.txt = num;
		if (num == -1)
		{
			parent.document.title = '����������������ʥ�� - ���ߣ�J.K.���� - ������ambrosio5';
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