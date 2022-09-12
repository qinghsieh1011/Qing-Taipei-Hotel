// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");
// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

//隱藏房型，隱藏訂單名細
var r1=document.getElementById("room1");
	r1.hidden=true;	
var r2=document.getElementById("room2");
	r2.hidden=true;
var r3=document.getElementById("room3");
	r3.hidden=true;	
var r4=document.getElementById("room4");
	r4.hidden=true;	
var r5=document.getElementById("room5");
	r5.hidden=true;	
var r6=document.getElementById("room6");
	r6.hidden=true;	
var list=document.getElementById("chk-list");
	list.hidden=true;
//隱藏餐廳訂單名細
var resChkList=document.getElementById("res-chk-list");
	resChkList.hidden=true;



/*index*/

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
	
	
	
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}





/*餐廳訂位*/

function restaurant()
{
	alert("完成訂位！");
	
	resChkList.hidden=false;
	
	//餐廳選擇
 	var myselect=document.getElementById("select1");
	var myslectindex=document.getElementById("select1").selectedIndex;
	var selecttext=myselect.options[myslectindex].text;

	document.getElementById("res-chk").innerHTML = selecttext;
	
	//訂位日期
	var a=document.getElementById("res-date").value;
		document.getElementById("res-date-chk").innerHTML = a;
	
	//用餐時段
 	var myselect=document.getElementById("select2");
	var myslectindex=document.getElementById("select2").selectedIndex;
	var selecttext=myselect.options[myslectindex].text;

	document.getElementById("res-time-chk").innerHTML = selecttext;
	
	//成人數,兒童數
	var b=document.getElementById("res-adult").value;
		document.getElementById("res-adult-chk").innerHTML = b;
	var c=document.getElementById("res-child").value;
		document.getElementById("res-child-chk").innerHTML = c;
	
	//訂位人姓名
	var d=document.getElementById("res-name").value;
		document.getElementById("res-name-chk").innerHTML = d;
	//先生/女士
	var e=document.getElementById("sex1").checked;
	var f=document.getElementById("sex2").checked;
	
	if(e){
		document.getElementById("sexShow").innerHTML = "先生";
	}
	else if(f){
		document.getElementById("sexShow").innerHTML = "女士";
	}
	
	//訂位人電話
	var g=document.getElementById("res-phone").value;
		document.getElementById("res-phone-chk").innerHTML = g;
	
	//訂位人E-mail
	var h=document.getElementById("res-email").value;
		document.getElementById("res-email-chk").innerHTML = h;
	
	//用餐目的
 	var myselect=document.getElementById("select3");
	var myslectindex=document.getElementById("select3").selectedIndex;
	var selecttext=myselect.options[myslectindex].text;

	document.getElementById("res-purpose-chk").innerHTML = selecttext;
}


/*網路訂房*/

//隱藏房型，隱藏確認訂單

function search()
{	
	var a=document.getElementById("start-date").value;
	var b=document.getElementById("end-date").value;
	
	var d=document.getElementById("person-num").value;
		document.getElementById("person-chk").innerHTML = d;
	
	
	if (b<a)
	{
		alert("請輸入正確日期");
		a.value="";
		b.value="";
	}
	
	else if (a>="2020-01-01" && b<="2020-01-12")
		{
			r1.hidden=true;
			r2.hidden=true;
			r3.hidden=false;
			r4.hidden=false;
			r5.hidden=false;
			r6.hidden=true;
		}
	else if (a>="2020-01-13" && b<="2020-01-19")
		{
			r1.hidden=false;
			r2.hidden=false;
			r3.hidden=false;
			r4.hidden=true;
			r5.hidden=true;
			r6.hidden=false;
		}
	
	else if (a>="2020-01-20" && b<="2020-01-31")
		{
			r1.hidden=true;
			r2.hidden=true;
			r3.hidden=true;
			r4.hidden=true;
			r5.hidden=false;
			r6.hidden=false;
		}
	
	else if (a>="2020-02-01" && b<="2020-02-29")
		{
			r1.hidden=true;
			r2.hidden=false;
			r3.hidden=false;
			r4.hidden=false;
			r5.hidden=true;
			r6.hidden=false;
		}
	else
		{
			alert("查無空房");
			r1.hidden=true;
			r2.hidden=true;
			r3.hidden=true;
			r4.hidden=true;
			r5.hidden=true;
			r6.hidden=true;
		}
		
}
	
function roomChk1()
{
 	var c=document.getElementById("r1-chk");
		document.getElementById("room-chk").innerHTML = "豪華單人房-一大床(含早餐)";
		document.getElementById("room-chk-display").innerHTML = "豪華客房-一大床(含早餐)";

}
function roomChk2()
{
 	var c=document.getElementById("r2-chk");
		document.getElementById("room-chk").innerHTML = "豪華雙人房-一大床(含早餐)";
		document.getElementById("room-chk-display").innerHTML = "豪華雙人房-一大床(含早餐)";

}
function roomChk3()
{
 	var c=document.getElementById("r3-chk");
		document.getElementById("room-chk").innerHTML = "行政單人房-一大床(不含早餐)" ;
		document.getElementById("room-chk-display").innerHTML = "行政單人房-一大床(不含早餐)" ;
}
function roomChk4()
{
 	var c=document.getElementById("r4-chk");
		document.getElementById("room-chk").innerHTML = "行政雙人房-ㄧ大床(不含早餐)";
		document.getElementById("room-chk-display").innerHTML = "行政雙人房-ㄧ大床(不含早餐)";
	

}
function roomChk5()
{
 	var c=document.getElementById("r5-chk");
		document.getElementById("room-chk").innerHTML = "Ur套房-套房住宿專案";
		document.getElementById("room-chk-display").innerHTML = "Ur套房-套房住宿專案";

}
function roomChk6()
{
 	var c=document.getElementById("r6-chk");
		document.getElementById("room-chk").innerHTML = "總統套房-套房住宿專案";
		document.getElementById("room-chk-display").innerHTML = "總統套房-套房住宿專案";

}
	
function change()
{
 var c=document.getElementById('num').value;
document.getElementById('show').innerHTML=c;
}


//確認訂房(顯示下方訂單明細)
function book()
{
	//日期
 	var a=document.getElementById("start-date").value;
		document.getElementById("start-date-chk").innerHTML = a;
	var b=document.getElementById("end-date").value;
		document.getElementById("end-date-chk").innerHTML = b;

	//人數
	var d=document.getElementById("person-num").value;
		document.getElementById("person-chk").innerHTML = d;
	
	if (a=="" || b=="" || d=="")
	{
		alert("資料不能為空");
	}
	else
	{
		//alert完成訂房
		alert("完成訂房！");

		//顯示訂房明細
		var list=document.getElementById("chk-list");
		list.hidden=false;
	}
		
		
}	



/*會員登入*/

function login()
{
	var id=document.getElementById("account").value;
	var pwd=document.getElementById("password").value;
	
	
	if (id=="ur" && pwd=="123")
	{
		alert("登入成功");
		window.location.href="index.html";
	}
	else	{
		alert("登入失敗，請輸入正確的帳號及密碼");
		account.value="";
		password.value="";
	}
	
}


/*房型介紹*/

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}