
function mySubmit(button){
  //alert("ok");
  var prov = document.getElementById("provocative");
  var selected = document.getElementById("selected");
  var out1 = document.getElementById("output1");

  if(document.getElementById("button").value == "Submit"){
    fade(prov);
    fade(selected);
    setTimeout(function(){
      prov.style.display = "none";
      selected.style.display = "none";
      unfade(out1);
      out1.classList.add("output");
      document.getElementById("button").value = "Reset";
    },800);
  }else if(document.getElementById("button").value == "Reset"){
    fade(out1);
    setTimeout(function(){
      out1.style.display = "none";
      unfade(prov);
      unfade(selected);
      $("area").mapster("set", false);
      document.getElementById("selectText").innerHTML = "";

      var ul = document.getElementById("listQ");
      var items = ul.getElementsByTagName("li");
      for (var i = 0; i < items.length; ++i) {
        items[i].classList.add("provQ");
      }

      document.getElementById("button").value = "Submit";
    }, 800);
  }
}

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

$(document).ready(function () {
               // a cross reference of area names to text to be shown for each area

             var xref = { 
                 l1: {id: "l1", select: false, message: "You have selected L1"},
                 l2: {id: "l2", select: false, message: "You have selected L2"},
                 l3: {id: "l3", select: false, message: "You have selected L3"},
                 l4: {id: "l4", select: false, message: "You have selected L4"},
                 l5: {id: "l5", select: false, message: "You have selected L5"},      
                 s1: {id: "s1", select: false, message: "You have selected S1"},
                 s2: {id: "s2", select: false, message: "You have selected S2"},
                 s3: {id: "s3", select: false, message: "You have selected S3"},
                 s4: {id: "s4", select: false, message: "You have selected S4"},
                 s5: {id: "s5", select: false, message: "You have selected S5"}};

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
                        if(xref[e.key]["select"]){
                          var oldHTML = document.getElementById("selectText").innerHTML;
                          document.getElementById("selectText").innerHTML = oldHTML + '<li style="margin: 5px" id="' + xref[e.key]["id"] + '">' + xref[e.key]["message"] + '</li>';
                          document.getElementById(xref[e.key]["id"] + "Q").classList.remove("provQ");
                        }else{
                          document.getElementById(xref[e.key]["id"]).remove();
                          document.getElementById(xref[e.key]["id"] + "Q").classList.add("provQ");
                        } 
                      }


                     
               });
            });