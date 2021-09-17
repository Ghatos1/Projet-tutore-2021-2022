$(document).ready(function(){
    $('#car-type').change(function(){ 
        switch ($(this).val())
        {
            case "scooter": $("#vehicle").attr("src", "images/debug_car_4.png"); break;
            case "citadine": $("#vehicle").attr("src", "images/debug_car_2.png"); break;
            case "berline": $("#vehicle").attr("src", "images/debug_car.png"); break;
            case "suv": $("#vehicle").attr("src", "images/debug_car_3.png"); break;
        }
    })
    //     {
    //         case scooter: alert("le moped"); break;
    //         case citadine: alert("toyota aygo gaming"); break;
    //         case berline: alert("seudan"); break;
    //         case suv: alert("4x4 en moins bien"); break;
    //     }
    //   });
    // $("#vehicle").attr('src', 'debug_car').load(function(){this.width});
    // $("#car-type").on("click", function(){
    //     switch($(this:nth-child()))
    //     {
    //         case 1: $("#vehicle").attr("src", "debug_car"); break;
    //         case 2: $("#vehicle").attr("src", "debug_car_2"); break;
    //         case 3: $("#vehicle").attr("src", "debug_car_3"); break;
    //         case 4: $("#vehicle").attr("src", "debug_car_4"); break;
    //     }
    // })
});