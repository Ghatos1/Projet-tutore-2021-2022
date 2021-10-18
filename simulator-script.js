$(document).ready(function () {
    //résout les problèmes liées au rechargement de la page (ex: menu déroulant disant "berline" alors qu'on voie le scooter apparaitre)
    var vehicle_type = 2;
    var vehicle_speed = 1;
    var vehicle_load = 1;
    var is_seatbelt_on = false;
    $("#vehicle").attr("src", "images/sedan_spr.svg");
    $("#car-type").val("berline");
    $("#car-crash, #crash-HUD").hide();

    //s"exécute quand un menu défilant est sélectionée
    $(".dropbtn").on("click", function(){
        
        // ferme les menus qui n'ont pas étés sélectionnés
        $(".dropbtn").css({"border-radius":"3vh"});
        $(".dropbtn").css({"border-top-left-radius":"0"});
        $(".dropbtn").css({"border-top-right-radius":"0"});
        $(".dropbtn").not(this).next().transition({
            y: '-100%'
        }, 300, 'ease-in-out');

        // ouvre le menu sélectionné
        $(this).next().transition({
            y: '0%'
        }, 300, 'ease-in-out');
        $(this).next().css({"transition-duration":"0.2s"});
        $(this).css({"border-bottom-left-radius":"0"});
        $(this).css({"border-bottom-right-radius":"0"});
    })

    //ferme tout les menus quand on clique n'importe où sur la page
    $(document).mouseup(function(e) {

        if(! $("#car-type, #speed, #load-type, .dropdown-content p").is(e.target))
        {
            $(".dropdown-content").transition({
                y: '-100%',
                queue: false
            }, 300, 'ease-in-out');
            $(".dropbtn").css({"border-radius":"3vh"});
            $(".dropbtn").css({"border-top-left-radius":"0"});
            $(".dropbtn").css({"border-top-right-radius":"0"});
        }
    });

    //choix de la voiture
    $("#car-type").children().on("click", function(){
        switch ($(this).html())
        {
            case"Citadine":
                $("#vehicle").attr("src", "images/city_car_spr.svg");
                vehicle_type = 1;
                break;
            case"Berline":
                $("#vehicle").attr("src", "images/sedan_spr.svg");
                vehicle_type = 2;
                break;
            case"SUV":
                $("#vehicle").attr("src", "images/suv_spr.svg")
                vehicle_type = 3;
                break;
        }
    })

    //choix de la vitesse
    $("#speed").children().on("click", function(){
        switch ($(this).html())
        {
            case "50 km/h":
                vehicle_speed = 1;
                break;
            case "90 km/h":
                vehicle_speed = 2;
                break;
            case "130 km/h":
                vehicle_speed = 3;
                break;
        }
    })

    //s"exécute lorsqu'on lance la simulation
    $("#launch").on("click", function(){
        
        //désactive les boutons de paramètres lorsqu'on lance la simulation
        $(".option-buttons").attr("disabled", "true");
        $(".dropdown-content").hide();

        //animation de la fenêtre des paramètres et de la voiture
        $("#fieldset").transition({
            x: '-50%',
            y: '-150%'
        }, 600, 'cubic-bezier(.25,0,.7,-0.4)');
        $("#car-attach").transition({
            x: '-350%',
            delay: 250
        }, 1500, 'cubic-bezier(0.5,0,0.75,0.5)');

        //animation de crash
        setTimeout(function(){
            $("#fieldset, #car-attach").hide();
            $("#car-crash, #crash-HUD").show();
            setTimeout(function(){
                $("#sim-part-2").css({"transition-duration":"0.2s"});
                $("#sim-part-2").css({"filter":"blur(1vh)"});
                $("#crash-HUD div").transition({
                    y: '0',
                }, 500, 'cubic-bezier(.4,.8,.6,1)');
                $("#sim-part-2").css({"transition-duration":"0s"});
            }, 1000)
        }, 2000)
    })

    //revenir en arrière quand la simulation est terminée
    $("#sim-return").on("click", function(){
        $("#crash-HUD div").transition({
            y: '100vh',
        }, 500, 'cubic-bezier(.4,0,.8,.4)');
        setTimeout(function(){
            $("#fieldset, #car-attach").show();
            $("#car-crash, #crash-HUD").hide();
            $("#sim-part-2").css({"filter":"blur(0)"});
            $("#fieldset").transition({
                x: '-50%',
                y: '0'
            }, 0, 'none');
            $("#car-attach").transition({
                x: '0',
            }, 0, 'none');
            $(".option-buttons").attr("enabled", "true");
            $(".dropdown-content").show();
        }, 1000);
    });
});