<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Stylish Portfolio - Start Bootstrap Theme</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/stylish-portfolio.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
    	
    	
    	
    	
        $("#upperbackcb").change(function(){
            if($(this).is(':checked')) {
                $("#upperback").append('<p id="upperbacksymptoms" style="padding-left:30px; margin-bottom:-20px;">\
                    <input type="checkbox" id="upperbacksymptom1"/><label>Numbness</label></br>\
                    <input type="checkbox" id="upperbacksymptom2"/><label>Sharp Pain</label></br>\
                    <input type="checkbox" id="upperbacksymptom3"/><label>Soreness</label></br>\
                    <input type="checkbox" id="upperbacksymptom4"/><label>Throbbing</label></br></p>');
                   // <input type="checkbox" id="upperbacksymptom5"/><label>Other</label></p>');
            }else{
                $("#upperbacksymptoms").remove();
            }      
        });

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
        
        $(window).scroll(function() {
            sessionStorage.scrollTop = $(this).scrollTop();
        });

        
        if (sessionStorage.scrollTop != "undefined") {
        	$(window).scrollTop(sessionStorage.scrollTop);
       	}
       
    });
    </script>

    <script src="js/imagemapster.js"></script>   
    <script>
    var image = $('#myimage');

    image.mapster(
    {
        fillOpacity: 0.4,
        fillColor: "d42e16",
        stroke: true,
        strokeColor: "3320FF",
        strokeOpacity: 0.8,
        strokeWidth: 12,
        singleSelect: true,
        mapKey: 'name',
        listKey: 'name'
    }).mapster('set',true,'thigh');
    </script>

</head>

<body>

	<% session.invalidate(); %>
    <!-- Navigation -->
    <a id="menu-toggle" href="#" class="btn btn-dark btn-lg toggle"><i class="fa fa-bars"></i></a>
    <nav id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <a id="menu-close" href="#" class="btn btn-light btn-lg pull-right toggle"><i class="fa fa-times"></i></a>
            <li class="sidebar-brand">
                <a href="#top" onclick=$("#menu-close").click();>Start Bootstrap</a>
            </li>
            <li>
                <a href="#top" onclick=$("#menu-close").click();>Home</a>
            </li>
            <li>
                <a href="#about" onclick=$("#menu-close").click();>About</a>
            </li>
        </ul>
    </nav>

    <!-- Header -->
    <header id="top" class="header">
        <div class="text-vertical-center">
            <!--<h1>Start Bootstrap</h1>-->
            <img src="img/Juvvo.png">
            <p style="font-size:30px; font-family:cursive; font-style:italic;">"Physical therapy tool for diagnosis and treatment (motivation statement)"</p>
            <br>
            <a href="#about" class="btn btn-dark btn-lg">Get Started</a>
        </div>
    </header>

    <!-- About -->
    <section id="about" class="about">
        <div class="container">
            <h1>Select the body parts of interest.</h1></br>
            <form action="checkDiagnosis" method="post" id="myForm">
            <div class="row" style="width:80%; margin:0 auto;">
                <div class="diagnosis" style="float:left;">
                    
                        <span id="upperback"><input type="checkbox" name="checkedBody" id="upperbackcb" value="1"><label id="upperbacklabel">Upper Back</label></span></br>
                        <input type="checkbox" name="checkedBody" id="midback" value="2"><label>Mid Back</label></br>
                        <input type="checkbox" name="checkedBody" id="lowerback" value="3"><label>Lower Back</label></br>
                        <input type="checkbox" name="checkedBody" id="rightupperbuttocks" value="4"><label>Right Upper Buttocks</label></br>
                        <input type="checkbox" name="checkedBody" id="leftupperbuttocks" value="5"><label>Left Upper Buttocks</label></br>
                        <input type="checkbox" name="checkedBody" id="rightbigtoe" value="6"><label>Right Big Toe</label></br>
                    
                </div>

                <div id="dermatomeimage" style="float:right; ">
                    <img id="myimage" src="img/dermatomevF.png" usemap="#derma">
                    <map id="derma" name="derma">
                        <area  shape="poly" name="thigh" coords="282,546,273,577,270,611,264,644,254,689,248,729,275,732,303,739,329,740,354,745,362,743,364,708,364,688,364,678,354,653,348,634,348,623,355,626,362,623,368,618,372,607,372,593,372,584,352,581,324,575,304,569" href="#" />
                    </map>

                </div>
            </div>
            </br></br>

            <div style="text-align:center;">
                <input type="submit" class="btn btn-dark btn-lg" value="Submit" style="margin:auto;">
            </div>
            </form>
			<h1>${diagnosis}</h1>
            <% String diagnosis = (String)request.getAttribute("diagnosis");
            Integer id = (Integer)request.getAttribute("id");
			if(diagnosis == null || diagnosis.isEmpty()){}else{
            %>
            
            <%=diagnosis%>
            </br>
            </br>
            
            <%=id%>
            
            <% } %>
            

            
            
        </div>
    </section>


    <!-- Footer -->
    <footer  style="background-color:lightgray;">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 text-center">
                    <h4><strong>Start Bootstrap</strong>
                    </h4>
                    <p>3481 Melrose Place
                        <br>Beverly Hills, CA 90210</p>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-phone fa-fw"></i> (123) 456-7890</li>
                        <li><i class="fa fa-envelope-o fa-fw"></i> <a href="mailto:name@example.com">name@example.com</a>
                        </li>
                    </ul>
                    <br>
                    <ul class="list-inline">
                        <li>
                            <a href="#"><i class="fa fa-facebook fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-twitter fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-dribbble fa-fw fa-3x"></i></a>
                        </li>
                    </ul>
                    <hr class="small">
                    <p class="text-muted">Copyright &copy; Your Website 2014</p>
                </div>
            </div>
        </div>
        <a id="to-top" href="#top" class="btn btn-dark btn-lg"><i class="fa fa-chevron-up fa-fw fa-1x"></i></a>
    </footer>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script>
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        }
        // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', onMapClickHandler);
    </script>

</body>

</html>
