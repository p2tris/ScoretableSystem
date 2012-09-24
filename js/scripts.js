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

// id must be unique from 1 to ... without any gaps
function givePoints() {
	$.getJSON('getDB.php', function(msg)
    {
		// how many rows are in the table
        tableRows = msg.length;
    }
	);
	var req = 'putPoints.php?';
	
	var i = 1;
	while (i<=tableRows) {
		
		var sumi = encodeURI(document.getElementById('points'+i).value);
		if (sumi == null || sumi == ""){
			sumi = 0;
		}
		// this is why id must be from 1 to ... without any gaps
		req += 'id'+i+'=' + i + '&punkte'+i+'='+ sumi + '&';
		i++;
	}
	http.open('post', req);
	http.onreadystatechange = insertReply;
	http.send(null);
}

function insertReply() {
	if(http.readyState == 4){
		showUser();
	}
}

// update sum when points are inserted
function updateSum(id, points){
	var total = "sum"+id.toString();
	var givenPoints = "points"+id.toString();
	document.getElementById(total).value = (document.getElementById(givenPoints).value -0) + parseInt(points);
}
	
var xmlhttp;

function showUser(){
	
	$('#insert_response tbody').remove();

	$.getJSON('getDB.php', function(data) {
		
        $('#insert_response').append("");
		
		//utf-8 json doesn't allow characters like õäöü etc. so necessary changes are made manualy
        $.each(data, function(i, item) {
			if (item.koht == "Polvamaa") {
				item.koht = "Põlvamaa";
			} else if (item.koht == "Vorumaa") {
				item.koht = "Võrumaa";
			} else if (item.koht == "Laane-Virumaa") {
				item.koht = "Lääne-Virumaa";
			} else if (item.koht == "Jogevamaa") {
				item.koht = "Jõgevamaa";
			} else if (item.koht == "Jarvamaa") {
				item.koht = "Järvamaa";
			} else if (item.koht == "Parnumaa") {
				item.koht = "Pärnumaa";
			} else if (item.koht == "Laanemaa") {
				item.koht = "Läänemaa";
			}
            $('#insert_response thead:last').after("<tbody><tr><td>" + item.koht + 
            		"</td><td><input name='points" + item.id + "' id='points" + item.id + "' onChange='updateSum("+item.id+", "+item.punktid+")'></td><td>" +
            		"<input name='sum"+ item.id +"' id='sum"+ item.id +"' readonly='readonly' value='"+item.punktid+"' />" +
            		"</td></tr></tbody>");
        });
    });
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
