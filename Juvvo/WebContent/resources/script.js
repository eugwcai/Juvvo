function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            //element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";

    element.style.display = 'inline-block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 10);
}

function showPara(obj){
  if(obj.value === "Yes"){
    document.getElementById("parasthesia").style.display = "inline-block";
    document.getElementById("sensation").required = true;
  }else{
    document.getElementById("parasthesia").style.display = "none";
    document.getElementById("sensation").required = false;
  }
}

function validationResult(){
  if(document.getElementById("firstName").value === ""){
    document.getElementById("firstName").style.borderColor = "red";
    document.getElementById("firstNameLabel").style.color = "red";
  }else{
    document.getElementById("firstName").style.borderColor = "#0799CC";
    document.getElementById("firstNameLabel").style.color = "#0799CC";
  }

  if(document.getElementById("lastName").value === ""){
    document.getElementById("lastName").style.borderColor = "red";
    document.getElementById("lastNameLabel").style.color = "red";
  }else{
    document.getElementById("lastName").style.borderColor = "#0799CC";
    document.getElementById("lastNameLabel").style.color = "#0799CC";
  }

  if(document.getElementById("age").value === ""){
    document.getElementById("age").style.borderColor = "red";
    document.getElementById("ageLabel").style.color = "red";
  }else{
    document.getElementById("age").style.borderColor = "#0799CC";
    document.getElementById("ageLabel").style.color = "#0799CC";
  }

  if(document.getElementById("gender").value === ""){
    document.getElementById("gender").style.borderColor = "red";
    document.getElementById("genderLabel").style.color = "red";
  }else{
    document.getElementById("gender").style.borderColor = "#0799CC";
    document.getElementById("genderLabel").style.color = "#0799CC";
  }

  if(document.getElementById("ethnicity").value === ""){
    document.getElementById("ethnicity").style.borderColor = "red";
    document.getElementById("ethnicityLabel").style.color = "red";
  }else{
    document.getElementById("ethnicity").style.borderColor = "#0799CC";
    document.getElementById("ethnicityLabel").style.color = "#0799CC";
  }

  if(document.getElementById("typeofInjury").value === ""){
    document.getElementById("typeofInjury").style.borderColor = "red";
    document.getElementById("typeofInjuryLabel").style.color = "red";
  }else{
    document.getElementById("typeofInjury").style.borderColor = "#0799CC";
    document.getElementById("typeofInjuryLabel").style.color = "#0799CC";
  }

  if(document.getElementById("presenceofHeadaches").value === ""){
    document.getElementById("presenceofHeadaches").style.borderColor = "red";
    document.getElementById("presenceofHeadachesLabel").style.color = "red";
  }else{
    document.getElementById("presenceofHeadaches").style.borderColor = "#0799CC";
    document.getElementById("presenceofHeadachesLabel").style.color = "#0799CC";
  }

  if(document.getElementById("duration").value === ""){
    document.getElementById("duration").style.borderColor = "red";
    document.getElementById("durationLabel").style.color = "red";
  }else{
    document.getElementById("duration").style.borderColor = "#0799CC";
    document.getElementById("durationLabel").style.color = "#0799CC";
  }

  if(document.getElementById("shoulderPain").value === ""){
    document.getElementById("shoulderPain").style.borderColor = "red";
    document.getElementById("shoulderPainLabel").style.color = "red";
  }else{
    document.getElementById("shoulderPain").style.borderColor = "#0799CC";
    document.getElementById("shoulderPainLabel").style.color = "#0799CC";
  }

  if(document.getElementById("radiculopathy").value === ""){
    document.getElementById("radiculopathy").style.borderColor = "red";
    document.getElementById("radiculopathyLabel").style.color = "red";
  }else{
    document.getElementById("radiculopathy").style.borderColor = "#0799CC";
    document.getElementById("radiculopathyLabel").style.color = "#0799CC";
    if(document.getElementById("radiculopathy").value === "Yes"){
      if(document.getElementById("sensation").value === ""){
        document.getElementById("sensation").style.borderColor = "red";
        document.getElementById("sensationLabel").style.color = "red";
      }else{
        document.getElementById("sensation").style.borderColor = "#0799CC";
        document.getElementById("sensationLabel").style.color = "#0799CC";
      } 
    }else{
      document.getElementById("sensation").style.borderColor = "#0799CC";
      document.getElementById("sensationLabel").style.color = "#0799CC";
    }
  }

return true;
/*
  if($('#myForm')[0].checkValidity()){
    return true;
  }else{
    document.getElementById("validation").style.display = "block";
    return false; 
  }*/
}

function showOutput() {
  if(document.getElementById("submitButt").value==="Submit"){
    if(validationResult()){
      var prov = document.getElementById("general");
      var out1 = document.getElementById("output1");
      
      fade(prov);
      setTimeout(function () {
          prov.style.display = "none";
          unfade(out1);
          out1.classList.add("output");
          document.getElementById("submitButt").value = "Reset";
      }, 800);
    }
  }else{
    location.reload();
  }
}

$(document).ready(function () {
  var xref = { 
     l1: {id: "l1", select: false, message: "You have selected L1"}
  };

    var image = $('img');
    image.mapster(
    {
         fillOpacity: 0.4,
         fillColor: "d42e16",
         strokeColor: "04B2E0",
         strokeOpacity: 0.8,
         strokeWidth: 2,
         stroke: true,
         isSelectable: true,
         isDeselectable: true,
         singleSelect: false,
         mapKey: 'name',
         listKey: 'name',
         onClick: function(e){
          xref[e.key]["select"] = !xref[e.key]["select"];
            /*if(xref[e.key]["select"]){
              var oldHTML = document.getElementById("selectText").innerHTML;
              document.getElementById("selectText").innerHTML = oldHTML + '<li style="margin: 5px" id="' + xref[e.key]["id"] + '">' + xref[e.key]["message"] + '</li>';
              document.getElementById(xref[e.key]["id"] + "Q").classList.remove("provQ");
            }else{
              document.getElementById(xref[e.key]["id"]).remove();
              document.getElementById(xref[e.key]["id"] + "Q").classList.add("provQ");
            } */

            if(xref[e.key]["select"]){
              //if(xref[e.key]["id"] == "shoulder"){
                //var oldHTML = document.getElementById("selectText").innerHTML;
                //document.getElementById("selectText").innerHTML = oldHTML + '<li style="margin: 5px" id="' + xref[e.key]["id"] + '">' + xref[e.key]["message"] + '</li>';
               // document.getElementById(xref[e.key]["id"] + "Q").classList.remove("provQ");
              //}
                if(xref[e.key]["id"] === "l1"){
                  var gen = document.getElementById("general");
                  var butt = document.getElementById("submitForm");
                  unfade(gen);
                  unfade(butt);
                }
            }else{
              if(xref[e.key]["id"] === "l1"){
                  document.getElementById("general").style.display = "none";
                  document.getElementById("submitButt").style.display = "none";
                }
              //document.getElementById(xref[e.key]["id"]).remove();
             // document.getElementById(xref[e.key]["id"] + "Q").classList.add("provQ");
            }
          }


         
   });
});