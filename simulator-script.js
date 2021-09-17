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
    $('#launch').on('click', function(){
        $("#fieldset").transition({x: '-50%', y: '-150%'}, 600, 'ease-in');
        $("#car-type").attr('disabled', 'true');
        $("#speed").attr('disabled', 'true');
        $("#load-type").attr('disabled', 'true');
        $("#launch").attr('disabled', 'true');
        $("#vehicle").transition({x: '-250%', delay: 250}, 1200, 'cubic-bezier(0.5,0,0.75,0.5)');
    })
});