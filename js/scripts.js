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
		
		var suma = encodeURI(document.getElementById('points'+i).value);
		if (suma == null || suma == ""){
			suma = 0;
		}
		
		var sumb = encodeURI(document.getElementById('points2t'+i).value);
		if (sumb == null || sumb == ""){
			sumb = 0;
		}
		// this is why id must be from 1 to ... without any gaps
		req += 'id'+i+'=' + i + '&punkte'+i+'='+ suma + '&punkte2t'+i+'='+ sumb +'&';
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
function updateSum2t(id, points2t){
	var total2t = "sum2t"+id.toString();
	var givenPoints2t = "points2t"+id.toString();
	document.getElementById(total2t).value = (document.getElementById(givenPoints2t).value -0) + parseInt(points2t);
}
	
var xmlhttp;

function showUser(){
	
	$('#insert_response tbody').remove();
	$('#insert_response2t tbody').remove();

	$.getJSON('getDB.php', function(data) {
		
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
            $('#insert_response thead:last').after("<tbody><tr><td>" + item.koht + 
            		"</td><td><input type ='text' name='points" + item.id + "' id='points" + item.id + 
					"' onChange='updateSum("+item.id+", "+item.punktid+")' class='form-control' size='1'></td><td>" +
            		"<input type ='text' name='sum"+ item.id +"' id='sum"+ item.id +"' readonly='readonly' value='"+Math.floor(item.punktid)+"' class='form-control' size='1' />" +
            		"</td></tr></tbody>");
        });
		
		$('#insert_response2t').append("");
				
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
            $('#insert_response2t thead:last').after("<tbody id='"+ item.punktid2t +"'><tr><td>" + item.koht + 
            		"</td><td><input type ='text' name='points2t" + item.id + "' id='points2t" + item.id + 
					"' onChange='updateSum2t("+item.id+", "+item.punktid2t+")' class='form-control' size='1'></td><td>" +
            		"<input type ='text' name='sum2t"+ item.id +"' id='sum2t"+ item.id +"' readonly='readonly' value='"+Math.floor(item.punktid2t)+"' class='form-control' size='1'/>" +
            		"</td></tr></tbody>");
        });
		keyMe();

    });
}

function keyMe(){
        var toSort = document.getElementById('tants2').children;
    toSort = Array.prototype.slice.call(toSort, 0);
    
    toSort.sort(function(a, b) {
        var aord = +a.id;
        var bord = +b.id;
        // two elements never have the same ID hence this is sufficient:
        return (aord <= bord) ? 1 : -1;
    });
    
    var parent = document.getElementById('tants2');
    parent.innerHTML = "";
    
    for(var i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }
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
