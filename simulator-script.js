$(document).ready(function(){
    //résout les problèmes liées au rechargement de la page (ex: menu déroulant disant "berline" alors qu'on voie le scooter apparaitre)
    var vehicle_type = 3;
    var vehicle_speed = 1;
    var vehicle_load = 1;
    var is_seatbelt_on = false;
    $("#vehicle").attr("src", "images/sedan_spr.svg");
    $("#car-type").val("berline");

    $("#car-type").change(function(){ 
        switch ($(this).val())
        {
            case "scooter": $("#vehicle").attr("src", "images/debug_car_4.png"); vehicle_type = 1; break;
            case "citadine": $("#vehicle").attr("src", "images/city_car_spr.svg"); vehicle_type = 2; break;
            case "berline": $("#vehicle").attr("src", "images/sedan_spr.svg"); vehicle_type = 3; break;
            case "suv": $("#vehicle").attr("src", "images/debug_car_3.png"); vehicle_type = 4; break;
        }
    })

    $("#launch").on("click", function(){
        //désactive les boutons de paramètres lorsqu'on lance la simulation
        $(".option-buttons").attr("disabled", "true");

        //animation de la fenêtre des paramètres et de la voiture
        $("#fieldset").transition({x: '-50%', y: '-150%'}, 600, 'ease-in');
        $("#car-attach").transition({x: '-350%', delay: 250}, 1500, 'cubic-bezier(0.5,0,0.75,0.5)');
    })
});