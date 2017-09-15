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