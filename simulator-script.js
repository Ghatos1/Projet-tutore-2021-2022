$(document).ready(function () {
    //résout les problèmes liées au rechargement de la page (ex: menu déroulant disant "berline" alors qu'on voie le scooter apparaitre)
    var vehicle_type = 2;
    var vehicle_speed = 1;
    var vehicle_load = 1;
    var is_seatbelt_on = false;
    $("#vehicle").attr("src", "images/sedan_spr.svg");
    $("#car-type").val("berline");
    // $(".dropdown-content").hide();

    //menus défilants
    $(".dropbtn").on("click", function(){
        // $(".dropdown-content").hide();
        // $(".dropdown-content").css({"height":"0%"});
        
        $(".dropbtn").css({"border-radius":"3vh"});
        // $(".dropdown-content").transition({
        //     y: '-100%'
        // }, 300, 'ease-in-out');
        // $(this).next().transition({
        //     y: '0%'
        // }, 300, 'ease-in-out');
        $(this).next().css({"transition-duration":"0.2s"});
        $(this).css({"border-bottom-left-radius":"0"});
        $(this).css({"border-bottom-right-radius":"0"});
    })

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
                $("#vehicle").attr("src", "images/suv_spr.svg");
                vehicle_type = 3;
                break;
        }
    })
    $(document).mouseup(function(e) {
        if(! $(".dropdown-content").next().is(e.target))
        {
            $(this).transition({
                y: '-100%'
            }, 300, 'ease-in-out');
            // if (! $("#car-type").next().is(e.target))
            // {
            //     $(this).transition({
            //         y: '-100%'
            //     }, 300, 'ease-in-out');
            // }
            // if (! $("#speed").next().is(e.target))
            // {
            //     $(this).transition({
            //         y: '-100%'
            //     }, 300, 'ease-in-out');
            // }
            // if (! $("#load-type").next().is(e.target))
            // {
            //     $(this).transition({
            //         y: '-100%'
            //     }, 300, 'ease-in-out');
            // }
        }
        if ($(".dropdown-content").next().is(e.target))
        {
            $(this).transition({
                y: '0%'
            }, 300, 'ease-in-out');
        }
    });
    // $("#car-type").change(function () {
    //     switch ($(this).val()) {
    //         case "scooter":
    //             $("#vehicle").attr("src", "images/debug_car_4.png");
    //             vehicle_type = 1;
    //             break;
    //         case "citadine":
    //             $("#vehicle").attr("src", "images/city_car_spr.svg");
    //             vehicle_type = 2;
    //             break;
    //         case "berline":
    //             $("#vehicle").attr("src", "images/sedan_spr.svg");
    //             vehicle_type = 3;
    //             break;
    //         case "suv":
    //             $("#vehicle").attr("src", "images/suv_spr.svg");
    //             vehicle_type = 4;
    //             break;
    //     }
    // })

    $("#launch").on("click", function () {
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
    })
});