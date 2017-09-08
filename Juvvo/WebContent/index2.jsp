<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/imagemapster.js"></script>
    <script>
    $(document).ready(function(){

        /*$("#upperbackcb").change(function(){
            if($(this).is(':checked')) {
                $("#upperback").append('<p id="upperbacksymptoms" style="padding-left:30px; margin-bottom:-20px; margin-top:0;">\
                    <input type="checkbox" id="upperbacksymptom1"/><label>Numbness</label></br>\
                    <input type="checkbox" id="upperbacksymptom2"/><label>Sharp Pain</label></br>\
                    <input type="checkbox" id="upperbacksymptom3"/><label>Soreness</label></br>\
                    <input type="checkbox" id="upperbacksymptom4"/><label>Throbbing</label></br></p>');
                   // <input type="checkbox" id="upperbacksymptom5"/><label>Other</label></p>');
            }else{
                $("#upperbacksymptoms").remove();
            }      
        });*/

        /*$(document).on('click','#upperbacksymptom5', function(){
            if($("#upperbacksymptom5").is(':checked')) {
                $("#upperbacksymptoms").append('<input type="text" id="upperbacksymptomother" style="margin-left:5px;"/>')
            }else{
                $("#upperbacksymptomother").remove();
            }
        });*/
        
        $('#myForm').submit(function( event ) {
          var checked = $("input[type=checkbox]:checked").length;

          if(!checked) {
            alert("You must check at least one checkbox.");
            return false;
          }

        });
       
    });
    </script>


	<style>
	html,body {
		width: 100%;
		height: 100%;
		margin: 0px;
		padding: 0px;
	}
	</style>

</head>

<body>
	 <h1 style="text-align:center;">Juvvo Test</h1></br>
	 
 	 	<div class="page1" style="width:100%; height:100%;">
 	 	
     		<form action="checkDiagnosis" method="post" id="myForm" style="width:100%; height:100%;" >
	            <div class="row" style="min-width: 337px; width:60%; height:75%; margin:0 auto; border: 5px solid lightblue; padding:10px;">
	                <div class="diagnosis" style="display:none;">   
	                        <input type="checkbox" name="checkedBody" id="t12l1" value="1"><label>Upper thigh to groin region T12/L1</label></br>
	                        <input type="checkbox" name="checkedBody" id="l1l2" value="2"><label>Upper thigh L1/L2</label></br>
	                        <input type="checkbox" name="checkedBody" id="l2l3" value="3"><label>Lower to mid thigh L2/L3</label></br>
	                        <input type="checkbox" name="checkedBody" id="l3l4" value="4"><label>Knee to medial calf L3/L4</label></br>
	                        <input type="checkbox" name="checkedBody" id="l4l5" value="5"><label>Posteriolateral thigh L4/L5</label></br>
	                        <input type="checkbox" name="checkedBody" id="l5s1" value="6"><label>Posterior middle thigh L5/S1</label></br>
	                        <input type="checkbox" name="checkedBody" id="s1s2" value="7"><label>Posterio-medial thigh S1/S2</label></br>
	                </div>
					<div id="dermatomeimage" style=" text-align:center;">
		                <img id="derma" src="img/dermatomevF2.jpg" usemap="#derma" >
		                    

		                    <script>
							    $(document).ready(function () {
							     var image = $('#derma');
							       image.mapster(
							       {
							            fillOpacity: 0.4,
							            fillColor: "d42e16",
							            strokeColor: "3320FF",
							            strokeOpacity: 0.8,
							            strokeWidth: 4,
							            stroke: true,
							            isSelectable: true,
							            singleSelect: true,
							            mapKey: 'name',
							            listKey: 'name'
							        });
							   });
							   </script>
		                <map id="derma_map" name="derma">
						    <area name="l1" title="" href="#" shape="poly" coords="125,256,122,267,121,277,120,287,128,296,134,303,143,310,153,315,162,324,166,332,166,325,167,322,162,313,159,305,159,300,158,295,163,297,170,292,170,276,155,273,145,271,134,267" />
						    <area name="l2" title="" href="#" shape="poly" coords="120,289,117,303,115,311,120,319,125,326,135,335,146,346,156,357,163,370,164,377,166,362,167,349,166,339,166,334,161,326,153,317,142,312,133,305,127,298" />
						    <area name="l3" title="" href="#" shape="poly" coords="115,313,112,332,113,341,118,352,129,367,146,385,151,404,151,429,150,458,154,484,156,487,156,474,155,463,153,454,153,445,154,440,156,424,159,410,161,394,163,379,155,359,145,348,134,337,124,328,119,321" />
						    <area name="l4" title="" href="#" shape="poly" coords="111,337,108,359,117,378,123,387,124,406,126,428,126,454,129,469,134,503,141,514,140,555,141,573,135,584,129,592,125,596,120,605,121,610,128,609,132,606,136,602,138,595,140,587,141,584,145,580,148,572,147,558,146,551,145,541,148,526,149,514,149,507,150,502,155,489,149,460,149,430,149,405,144,386,129,369,118,354,113,343" />
						    <area name="l5" title="" href="#" shape="poly" coords="108,361,107,376,110,385,111,396,116,405,120,415,120,444,119,459,119,471,118,481,120,495,122,512,124,532,124,539,125,549,126,562,125,566,117,583,115,588,111,594,109,598,108,603,109,606,111,606,112,608,114,607,115,609,117,609,119,609,118,606,123,595,127,592,133,584,139,573,138,556,139,515,132,504,127,470,124,455,124,429,122,406,121,388,115,379" />
						    <area name="l6" title="" href="#" shape="poly" coords="123,568,120,575,115,584,110,592,109,596,107,601,106,604,105,599,108,591,112,586" />
						    <area name="l7" title="" href="#" shape="poly" coords="170,293,163,298,159,297,161,300,161,304,164,313,166,319,170,321" />
		                </map>
	                </div>
	            </div>
	
				</br>
	            <div style="width:100%; text-align:center;">
	                <input type="submit" value="Submit" style="margin:0 auto;" >
	            </div>
	        <!--
            	<% String diagnosis = (String)request.getAttribute("diagnosis");
            	Integer id = (Integer)request.getAttribute("id");
				if(diagnosis == null || diagnosis.isEmpty()){}else{
            	%>
            	<h1 style="text-align:center;">Diagnosis</h1>
            	<div id="diagnosis" style="width:60%; margin:0 auto; border:5px solid lightblue; padding:10px;">
            	<p style="font-style:italic;">Diagnosis:</p>
            	<%=diagnosis%>
            	</br>
            	<p style="font-style:italic;">ID: </p>
            	<%=id%>
            	<% } %>   -->
            	</div>   
        	</form>
      
		</div>
</body>

</html>
