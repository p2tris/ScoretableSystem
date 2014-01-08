$(document).ready(function() {
	showUser();
});

function createObject() {
	var request_type;
	var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer"){
		request_type = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		request_type = new XMLHttpRequest();
	}
	return request_type;
}

var http = createObject();
	
var xmlhttp;

$tbid = 17;

function showUser(){
	
	$('#insert_response tbody').remove();

	$.getJSON('getDBFinal.php', function(data) {
		
        $('#insert_response').append("");
		
		//utf-8 json doesn't allow characters like ı‰ˆ¸ etc. so necessary changes are made manualy
        $.each(data, function(i, item) {
			if (item.koht == "Polvamaa") {
				item.koht = "Pılvamaa";
			} else if (item.koht == "Vorumaa") {
				item.koht = "Vırumaa";
			} else if (item.koht == "Laane-Virumaa") {
				item.koht = "L‰‰ne-Virumaa";
			} else if (item.koht == "Jogevamaa") {
				item.koht = "Jıgevamaa";
			} else if (item.koht == "Jarvamaa") {
				item.koht = "J‰rvamaa";
			} else if (item.koht == "Parnumaa") {
				item.koht = "P‰rnumaa";
			} else if (item.koht == "Laanemaa") {
				item.koht = "L‰‰nemaa";
			}
            $('#insert_response thead:last').after("<tbody id='tb" + $tbid + "' style='display: none;'><tr><td> " + $tbid + ".</td><td>" + item.koht + 
            		"</td><td>" +
            		"<input name='sum"+ item.id +"' id='sum"+ item.id +"' readonly='readonly' value='"+item.finals+"' class='form-control' size='3'/>" +
            		"</td></tr></tbody>");
            $tbid--;
        });
		
	});
}
$tbid2 = 17;
function getPoints() {

	if ($tbid2==1) {document.getElementById('tb'+$tbid2).style.background = 'gold';};
	if ($tbid2==2) {document.getElementById('tb'+$tbid2).style.background = 'silver';};

	document.getElementById('tb'+$tbid2).style.display = '';
	$tbid2--; 


	// In case of draws - manually can change inner html!
	//if ($tbid2==4) {var text = document.getElementById('tb'+$tbid2).firstChild.firstChild; text.innerHTML = "3.";};
}

function GetXmlHttpObject(){
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		return new XMLHttpRequest();
	}
	if (window.ActiveXObject){
		// code for IE6, IE5
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	return null;
}
