tday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
tmonth=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

function GetClock(){
	var d=new Date();
	var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
	if(nyear<1000) nyear+=1900;
	var nhour=d.getHours();
	var nmin=d.getMinutes();
	var nsec=d.getSeconds();
	var ap = "PM";

	if(nhour==0){ap=" AM";nhour=12;}
	else if(nhour<12){ap=" AM";}
	else if(nhour==12){ap=" PM";}
	else if(nhour>12){ap=" PM";nhour-=12;}

	if(nhour<=9) nhour="0"+nhour;
	if(nmin<=9) nmin="0"+nmin;
	if(nsec<=9) nsec="0"+nsec;
	if(ndate<=9) ndate="0"+ndate;

	document.getElementById('subcontainer1').innerHTML=""+nhour+":"+nmin+":"+nsec+ " " + ap+ "<br />"; 
	document.getElementById('subcontainer2').innerHTML=""+tday[nday]+", "+ndate + " " + tmonth[nmonth]+" "+nyear+"";
}

window.onload=function(){
	if(document.getElementById('subcontainer1')){
		GetClock();
		setInterval(GetClock,1000);
	}
};

$(document).ready(function(){
		$("#visitor_type").change(function() {
			$("#visitor_type").css("color","#1e1e1e");
		});
		$("#badge_number2").change(function() {
			$("#badge_number2").css("color","#1e1e1e");
		});
		$("#citizenship_4").change(function() {
			$("#citizenship_4").css("color","#1e1e1e");
			if($("#citizenship_4").val() === "Other"){
				$("#other_citizenship").removeAttr("disabled");
				$("#other_citizenship").attr("required","true");
				$("#other_citizenship").css("border", "2px solid #0799CC");
			}else{
				$("#other_citizenship").val("");
				$("#other_citizenship").attr("disabled", "true");
				$("#other_citizenship").css("border", "2px solid #d3d3d3");
				
			}
		});	
});