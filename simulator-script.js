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
});