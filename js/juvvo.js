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
        var bas = $("#back-acute-symptom").is(':checked') ? 1 : 0;
        var bals = $("#back-anterior-leg-symptom").is(':checked') ? 1 : 0;
        var bps = $("#back-posterior-leg-symptom").is(':checked') ? 1 : 0;
        var blls = $("#back-lateral-leg-symptom").is(':checked') ? 1 : 0;
        var bbs = $("#back-bathroom-symptom").is(':checked') ? 1 : 0;
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
        var aas = $("#ankle-acute-symptom").is(':checked') ? 1 : 0;
        var asws = $("#ankle-swelling-symptom").is(':checked') ? 1 : 0;
        var abs = $("#ankle-bruising-symptom").is(':checked') ? 1 : 0;
        var awbs = $("#ankle-weight-bearing-symptom").is(':checked') ? 1 : 0;
        var alp = $("#ankle-loud-pop-symptom").is(':checked') ? 1 : 0;
        var ass = $("#ankle-stiffness-symptom").is(':checked') ? 1 : 0;
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
        var sas = $("#shoulder-acute-symptom").is(':checked') ? 1 : 0;
        var sbps = $("#shoulder-bony-prominence-symptom").is(':checked') ? 1 : 0;
        var sacs = $("#shoulder-across-symptom").is(':checked') ? 1 : 0;
        var srs = $("#shoulder-ram-symptom").is(':checked') ? 1 : 0;
        var sbrs = $("#shoulder-bruising-symptom").is(':checked') ? 1 : 0;
        var sbgs = $("#shoulder-buldge-symptom").is(':checked') ? 1 : 0;
        var sos = $("#shoulder-overhead-symptom").is(':checked') ? 1 : 0;
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
        var eas = $("#elbow-acute-symptom").is(':checked') ? 1 : 0;
        var efs = $("#elbow-front-symptom").is(':checked') ? 1 : 0;
        var ets = $("#elbow-tenderness-symptom").is(':checked') ? 1 : 0;
        var ethrs = $("#elbow-throwing-symptom").is(':checked') ? 1 : 0;
        var ebs = $("#elbow-bruising-symptom").is(':checked') ? 1 : 0;
        var eds = $("#elbow-deformity-symptom").is(':checked') ? 1 : 0;
        var ess = $("#elbow-stiffness-symptom").is(':checked') ? 1 : 0;
        var ers = $("#elbow-radiating-symptom").is(':checked') ? 1 : 0;
        var egs = $("#elbow-gripping-symptom").is(':checked') ? 1 : 0;
        var ascs = $("#elbow-activity-symptom").is(':checked') ? 1 : 0;
        for(var i = 0; i < elbow_symptoms_dict.length; i++){
            if(elbow_symptoms_dict[i]["Acute"] == eas && elbow_symptoms_dict[i]["Pain at front of elbow while straight"] == efs && 
                elbow_symptoms_dict[i]["Tenderness inside elbow"] == ets && elbow_symptoms_dict[i]["Do you play a throwing sport?"]
                == ethrs && elbow_symptoms_dict[i]["Bruising"] == ebs && elbow_symptoms_dict[i]["Extreme Pain with obvious deformity"] == eds 
                && elbow_symptoms_dict[i]["Stiffness"] == ess 
                && elbow_symptoms_dict[i]["Pain that radiates into wrist"] ==ers && elbow_symptoms_dict[i]["Trouble Gripping"] == egs && elbow_symptoms_dict[i]["Pain increases with activity but lessens with rest"] == ascs){
                console.log(elbow_symptoms_dict[i]["Output"]);
                $("#output").text(elbow_symptoms_dict[i]["Output"]);
            }
        }

    });

    $("#knee-submit-symptoms").on("click", function(){
	    var kas = $("#knee-acute-symptom").is(':checked') ? 1 : 0;
	    var kss = $("#knee-swelling-symptom").is(':checked') ? 1 : 0;
	    var kus = $("#knee-unstable-symptom").is(':checked') ? 1 : 0;
	    var kws = $("#knee-weight-symptom").is(':checked') ? 1 : 0;
	    var kps = $("#knee-pop-symptom").is(':checked') ? 1 : 0;
	    var ksfs = $("#knee-stiffness-symptom").is(':checked') ? 1 : 0;
	    var ksds = $("#knee-side-symptom").is(':checked') ? 1 : 0;
	    var kcs = $("#knee-central-symptom").is(':checked') ? 1 : 0;
	    var kbs = $("#knee-back-symptom").is(':checked') ? 1 : 0;
	    var kms = $("#knee-medial-symptom").is(':checked') ? 1 : 0;
	    var kls = $("#knee-lower-symptom").is(':checked') ? 1 : 0;
	    var ksts = $("#knee-stairs-symptom").is(':checked') ? 1 : 0;

         $("#output").text("testing");

	    for(var i = 0; i < knee_symptoms_dict.length; i++){
	        if(    knee_symptoms_dict[i]["Acute"] == kas 
                && knee_symptoms_dict[i]["Swelling"] == kss 
                && knee_symptoms_dict[i]["Does your knee feel unstable?"] == kus 
                && knee_symptoms_dict[i]["Can you bear weight comfortably?"] == kws 
                && knee_symptoms_dict[i]["Did you hear a loud pop?"] == kps 
                && knee_symptoms_dict[i]["Stiffness"] == ksfs 
	            && knee_symptoms_dict[i]["Pain on the side of the knee"] == ksds 
	            && knee_symptoms_dict[i]["Pain more centrally located in the knee"] ==kcs 
                && knee_symptoms_dict[i]["Pain in the back of the knee"] == kbs 
                && knee_symptoms_dict[i]["Pain in he medial side of knee"] == kms 
                && knee_symptoms_dict[i]["Pain lower part of knee"] == kls 
                && knee_symptoms_dict[i]["Pain walking up or down stairs"] == ksts){
	            console.log(knee_symptoms_dict[i]["Output"]);
	            $("#output").text(knee_symptoms_dict[i]["Output"]);
	        }
	    }

    });

    $("#quad-submit-symptoms").on("click", function(){
        var lookUpKey = "";
        var qas = $("#quad-acute-symptom").is(':checked') ? 1 : 0;
        var qts = $("#quad-tearing-symptom").is(':checked') ? 1 : 0;
        var qws = $("#quad-weight-symptom").is(':checked') ? 1 : 0;
        var qis = $("#quad-indentation-symptom").is(':checked') ? 1 : 0;
        var qbss = $("#quad-bruising-swelling-symptom").is(':checked') ? 1 : 0;
        var qss = $("#quad-strength-symptom").is(':checked') ? 1 : 0;
        for(var i = 0; i < quad_symptoms_dict.length; i++){
            if(quad_symptoms_dict[i]["Acute"] == qas 
                && quad_symptoms_dict[i]["Did you hear a popping or tearing sensation"] == qts 
                && quad_symptoms_dict[i]["Trouble Bearing weight"] == qws 
                && quad_symptoms_dict[i]["Noticable muscle indentation above knee cap"] == qis 
                && quad_symptoms_dict[i]["Swelling/Brusing"] == qbss 
                && quad_symptoms_dict[i]["Loss of Strength"] == qss){
                console.log(quad_symptoms_dict[i]["Output"]);
                $("#output").text(quad_symptoms_dict[i]["Output"]);
            }
        }
    });
});
