$(document).ready(function () {
    $("#launch-sandbox, #launch-quiz").hover(function()
    {
        $(this).transition({scale: 1.25, queue: false}, 200, 'ease-in-out');
    }, function()
    {
        $(this).transition({scale: 1, queue: false}, 200, 'ease-in-out');
    });
    $("#launch-sandbox").on("click", function()
    {
        window.location.href="simulator-index.html";
    })
});