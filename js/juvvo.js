$( document ).ready(function() {
    var back_symptoms_dict;
    var ankle_symptoms_dict;
    var shoulder_symptoms_dict;
    var elbow_symptoms_dict;
    var knee_symptoms_dict;
    var quad_symptoms_dict;
    d3.csv("./data/back_symptoms.csv").then(function(data) {
        back_symptoms_dict = data;
    });
    d3.csv("./data/ankle_symptoms.csv").then(function(data) {
        ankle_symptoms_dict = data;
    }); 
    d3.csv("./data/shoulder_symptoms.csv").then(function(data) {
        shoulder_symptoms_dict = data;
    });
    d3.csv("./data/elbow_symptoms.csv").then(function(data) {
        elbow_symptoms_dict = data;
    });
    d3.csv("./data/knee_symptoms.csv").then(function(data) {
    knee_symptoms_dict = data;
    });
    d3.csv("./data/quad_symptoms.csv").then(function(data) {
    quad_symptoms_dict = data;
    });

    $("#back-submit-symptoms").on("click", function(){
        var bas = $("#back-acute-symptom").find(":selected").val();
        var bals = $("#back-anterior-leg-symptom").find(":selected").val();
        var bps = $("#back-posterior-leg-symptom").find(":selected").val();
        var blls = $("#back-lateral-leg-symptom").find(":selected").val();
        var bbs = $("#back-bathroom-symptom").find(":selected").val();
        for(var i = 0; i < back_symptoms_dict.length; i++){
            if(back_symptoms_dict[i]["Acute"] == bas && back_symptoms_dict[i]["Anterior Leg/Upper Thigh"] == bals && 
                back_symptoms_dict[i]["Posterior Leg"] == bps && back_symptoms_dict[i]["Lateral Leg"] == blls && 
                back_symptoms_dict[i]["Bathroom Trouble"] == bbs){
                console.log(back_symptoms_dict[i]["Output"]);
                $("#output").text(back_symptoms_dict[i]["Output"]);
            }
        }
    });

    $("#ankle-submit-symptoms").on("click", function(){
        var aas = $("#ankle-acute-symptom").find(":selected").val();
        var asws = $("#ankle-swelling-symptom").find(":selected").val();
        var abs = $("#ankle-bruising-symptom").find(":selected").val();
        var awbs = $("#ankle-weight-bearing-symptom").find(":selected").val();
        var alp = $("#ankle-loud-pop-symptom").find(":selected").val();
        var ass = $("#ankle-stiffness-symptom").find(":selected").val();
        for(var i = 0; i < ankle_symptoms_dict.length; i++){
            if(ankle_symptoms_dict[i]["Acute"] == aas && ankle_symptoms_dict[i]["Swelling"] == asws && 
                ankle_symptoms_dict[i]["Bruising/Tenderness"] == abs && ankle_symptoms_dict[i]["Can you bear weight comfortably?"] == awbs && 
                ankle_symptoms_dict[i]["Did you hear a loud pop?"] == alp && ankle_symptoms_dict[i]["Stiffness"] == ass ){
                console.log(ankle_symptoms_dict[i]["Output"]);
                $("#output").text(ankle_symptoms_dict[i]["Output"]);
            }
        }
    });

    $("#shoulder-submit-symptoms").on("click", function(){
        var sas = $("#shoulder-acute-symptom").find(":selected").val();
        var sbps = $("#shoulder-bony-prominence-symptom").find(":selected").val();
        var sacs = $("#shoulder-across-symptom").find(":selected").val();
        var srs = $("#shoulder-ram-symptom").find(":selected").val();
        var sbrs = $("#shoulder-bruising-symptom").find(":selected").val();
        var sbgs = $("#shoulder-buldge-symptom").find(":selected").val();
        var sos = $("#shoulder-overhead-symptom").find(":selected").val();
        for(var i = 0; i < shoulder_symptoms_dict.length; i++){
            if(shoulder_symptoms_dict[i]["Acute"] == sas && shoulder_symptoms_dict[i]["Pain on bony prominence of shoulder?"] == sbps && 
                shoulder_symptoms_dict[i]["Pain while moving across body?"] == sacs && shoulder_symptoms_dict[i]["Did you fall on your shoulder, or ram it against something?"]
                == srs && shoulder_symptoms_dict[i]["Bruising"] == sbrs && shoulder_symptoms_dict[i]["Buldge near shoulder?"] == sbgs 
                && shoulder_symptoms_dict[i]["Pain with overhead activities"] == sos ){
                console.log(shoulder_symptoms_dict[i]["Output"]);
                $("#output").text(shoulder_symptoms_dict[i]["Output"]);
            }
        }

    });

    $("#elbow-submit-symptoms").on("click", function(){
        var eas = $("#elbow-acute-symptom").find(":selected").val();
        var efs = $("#elbow-front-symptom").find(":selected").val();
        var ets = $("#elbow-tenderness-symptom").find(":selected").val();
        var ethrs = $("#elbow-throwing-symptom").find(":selected").val();
        var ebs = $("#elbow-bruising-symptom").find(":selected").val();
        var eds = $("#elbow-deformity-symptom").find(":selected").val();
        var ess = $("#elbow-stiffness-symptom").find(":selected").val();
        var ers = $("#elbow-radiating-symptom").find(":selected").val();
        var egs = $("#elbow-gripping-symptom").find(":selected").val();
        var ascs = $("#elbow-activity-symptom").find(":selected").val();
        for(var i = 0; i < elbow_symptoms_dict.length; i++){
            if(elbow_symptoms_dict[i]["Acute"] == eas && elbow_symptoms_dict[i]["Pain at front of elbow while straight"] == efs && 
                elbow_symptoms_dict[i]["Tenderness inside elbow"] == ets && elbow_symptoms_dict[i]["Do you play a throwing sport?"]
                == ethrs && elbow_symptoms_dict[i]["Bruising?"] == ebs && elbow_symptoms_dict[i]["Extreme Pain with obvious deformity"] == eds 
                && elbow_symptoms_dict[i]["Stiffness"] == ess 
                && elbow_symptoms_dict[i]["Pain that radiates into wrist"] ==ers && elbow_symptoms_dict[i]["Trouble Gripping?"] == egs && elbow_symptoms_dict[i]["Pain increases with activity but lessens with rest"] == ascs){
                console.log(elbow_symptoms_dict[i]["Output"]);
                $("#output").text(elbow_symptoms_dict[i]["Output"]);
            }
        }

    });

    $("#knee-submit-symptoms").on("click", function(){
	    var kas = $("#knee-acute-symptom").find(":selected").val();
	    var kss = $("#knee-swelling-symptom").find(":selected").val();
	    var kus = $("#knee-unstable-symptom").find(":selected").val();
	    var kws = $("#knee-weight-symptom").find(":selected").val();
	    var kps = $("#knee-pop-symptom").find(":selected").val();
	    var ksfs = $("#knee-stiffness-symptom").find(":selected").val();
	    var ksds = $("#knee-side-symptom").find(":selected").val();
	    var kcs = $("#knee-central-symptom").find(":selected").val();
	    var kbs = $("#knee-back-symptom").find(":selected").val();
	    var kms = $("#knee-medial-symptom").find(":selected").val();
	    var kls = $("#knee-lower-symptom").find(":selected").val();
	    var ksts = $("#knee-stairs-symptom").find(":selected").val();
	    for(var i = 0; i < knee_symptoms_dict.length; i++){
	        if(knee_symptoms_dict[i]["Acute"] == kas && knee_symptoms_dict[i]["Swelling"] == kss && 
	            knee_symptoms_dict[i]["Does your knee feel unstable?"] == kus && knee_symptoms_dict[i]["Can you bear weight comfortably?"]
	            == kws && knee_symptoms_dict[i]["Did you hear a loud pop?"] == kps && knee_symptoms_dict[i]["Stiffness"] == ksfs 
	            && knee_symptoms_dict[i]["Pain on the side of the knee"] == ksds 
	            && knee_symptoms_dict[i]["Pain more centrally located in the knee"] ==kcs && knee_symptoms_dict[i]["Pain in the back of the knee"] == kbs && knee_symptoms_dict[i]["Pain in he medial side of knee"] == kms && knee_symptoms_dict[i]["Pain lower part of knee"] == kls && 
	            knee_symptoms_dict[i]["Pain walking up or down stairs"] == ksts){
	            console.log(knee_symptoms_dict[i]["Output"]);
	            $("#output").text(knee_symptoms_dict[i]["Output"]);
	        }
	    }

    });

        $("#submit-symptoms").on("click", function(){
        var lookUpKey = "";
        var qas = $("#quad-acute-symptom").find(":selected").val();
        var qts = $("#quad-tearing-symptom").find(":selected").val();
        var qws = $("#quad-weight-symptom").find(":selected").val();
        var qis = $("#quad-indentation-symptom").find(":selected").val();
        var qbss = $("#quad-bruising-swelling-symptom").find(":selected").val();
        var qss = $("#quad-strength-symptom").find(":selected").val();
        for(var i = 0; i < quad_symptoms_dict.length; i++){
            if(quad_symptoms_dict[i]["Acute"] == qas && quad_symptoms_dict[i]["Did you hear a popping or tearing sensation"] == qts && 
                quad_symptoms_dict[i]["Trouble Bearing weight"] == qws && quad_symptoms_dict[i]["Noticable muscle indentation above knee cap"]
                == qis && quad_symptoms_dict[i]["Swelling/Brusing"] == qbss && quad_symptoms_dict[i]["Loss of Strength?"] == sbgs){
                console.log(quad_symptoms_dict[i]["Output"]);
                $("#output").text(quad_symptoms_dict[i]["Output"]);
            }
        }


    });


    $("#nav-back").on("click",function(){
        $("#nav-back").addClass("active");
        $("#nav-ankle").removeClass("active");
        $("#nav-shoulder").removeClass("active");
        $("#nav-elbow").removeClass("active");
        $("#nav-knee").removeClass("active");
        $("#nav-quad").removeClass("active");
        $("#back").css('display','block');
        $("#shoulder").css('display','none');
        $("#elbow").css('display','none');
        $("#ankle").css('display','none');
        $("#knee").css('display','none');
        $("#quad").css('display','none');
        $("#output").text("");
    });

    $("#nav-ankle").on("click",function(){
        $("#nav-ankle").addClass("active");
        $("#nav-back").removeClass("active");
        $("#nav-shoulder").removeClass("active");
        $("#nav-elbow").removeClass("active");
        $("#nav-knee").removeClass("active");
        $("#nav-quad").removeClass("active");
        $("#ankle").css('display','block');
        $("#back").css('display','none');
        $("#shoulder").css('display','none');
        $("#elbow").css('display','none');
        $("#knee").css('display','none');
        $("#quad").css('display','none');
        $("#output").text("");
    });

    $("#nav-shoulder").on("click",function(){
        $("#nav-shoulder").addClass("active");
        $("#nav-back").removeClass("active");
        $("#nav-ankle").removeClass("active");
        $("#nav-elbow").removeClass("active");
        $("#nav-knee").removeClass("active");
        $("#nav-quad").removeClass("active");
        $("#shoulder").css('display','block');
        $("#ankle").css('display','none');
        $("#back").css('display','none');
        $("#elbow").css('display','none');
        $("#knee").css('display','none');
        $("#quad").css('display','none');
        $("#output").text("");
    });

     $("#nav-elbow").on("click",function(){
        $("#nav-elbow").addClass("active");
        $("#nav-back").removeClass("active");
        $("#nav-ankle").removeClass("active");
        $("#nav-shoulder").removeClass("active");
        $("#nav-knee").removeClass("active");
        $("#nav-quad").removeClass("active");
        $("#elbow").css('display','block');
        $("#ankle").css('display','none');
        $("#back").css('display','none');
        $("#shoulder").css('display','none');
        $("#knee").css('display','none');
        $("#quad").css('display','none');
        $("#output").text("");
    });

     $("#nav-knee").on("click",function(){
        $("#nav-knee").addClass("active");
        $("#nav-back").removeClass("active");
        $("#nav-ankle").removeClass("active");
        $("#nav-shoulder").removeClass("active");
        $("#nav-elbow").removeClass("active");
        $("#nav-quad").removeClass("active");
        $("#knee").css('display','block');
        $("#elbow").css('display','none');
        $("#ankle").css('display','none');
        $("#back").css('display','none');
        $("#shoulder").css('display','none');
        $("#quad").css('display','none');
        $("#output").text("");
    });

        $("#nav-quad").on("click",function(){
        $("#nav-quad").addClass("active");
        $("#nav-back").removeClass("active");
        $("#nav-ankle").removeClass("active");
        $("#nav-shoulder").removeClass("active");
        $("#nav-knee").removeClass("active");
        $("#nav-elbow").removeClass("active");
        $("#quad").css('display','block')
        $("#elbow").css('display','none');
        $("#ankle").css('display','none');
        $("#back").css('display','none');
        $("#shoulder").css('display','none');
        $("#knee").css('display','none');
        $("#output").text("");
    });


});
