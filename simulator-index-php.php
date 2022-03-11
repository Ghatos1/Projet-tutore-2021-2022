<?php
include 'hidden/login.php';
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <link rel="stylesheet" href="simulator-stylesheet.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Aldrich&display=swap');
    </style> 
    <script type="text/javascript" src="jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="jquery.transit.min.js"></script>
    <script type="text/javascript" src="simulator-script.js"></script>
    <title>Simulator</title>
</head>
<body>
    <div id="narrow-alert">
        <img src="images/warning_spr.svg" width="30%">
        <p>Afin que le simulateur s'affiche correctement, vous devez élargir la fenêtre de votre navigateur.</p>
    </div>
    <div id="game-window">
        <img class="light-filter" src="images/bkg_1_filter.svg">
        <div id="fieldset">
            <h2>Paramètres</h2>
            <div class="container">
                <div class="dropdown">
                    <p class="drop-title">Véhicule</p>
                    <select id="car-type">
                        <option value="citycar">Citadine</option>
                        <option value="sedan">Berline</option>
                        <option value="suv">SUV</option>
                    </select>
                </div>
                <div class="dropdown">
                    <p class="drop-title">Vitesse</p>
                    <select id="car-speed">
                        <option value="50">50 km/h</option>
                        <option value="90">90 km/h</option>
                        <option value="130">130 km/h</option>
                    </select>
                </div>
                <div>
                    <div id="launch" class="option-buttons">Lancer!</div>
                </div>
            </div>
        </div>
        <div id="car-attach">
            <img src="images/sedan_spr.svg" class="vehicle">
        </div>
        <div id="sim-part-2">
            <img class="light-filter" src="images/bkg_2_filter.svg">
            <div id="car-crash">
                <img src="images/sedan_spr.svg" class="vehicle">
            </div>
        </div>
        <div id="crash-HUD">
            <div id="HUD-container">
                <h1>Résultats</h1>
                <div style="display: flex">
                    <div id="HUD-img-container"></div>
                    <p>le passager est blessé, mais a survécu au crash.</p>
                </div>
                <button id="sim-return">Retour</button>
            </div>
        </div>
    </div>
</body>
</html>