


//

$(document).ready(function () {


    // Global Variable

    var characterChosen = false;
    var enemyChosen = false;
    var visiblehero;
    var enemy = {};
    var enemykilled = 0;
    var isDefender = true;
    var isEnemy = true;
    var defeated = false;

    var name; 
    var hp;
    var atkPower;
    var couneterAtk;




    // setup Character value //

    function setupChar(x) {
        
        if (x == "luffy") {
            name= "luffy";
            console.log("11")
            hp: 100;
            atkPower: 25 + Math.floor(Math.random() * 30);
            counterAtk: 25;
        }
        else if (x == "ace") {
            name: "ace"
            hp: 125
            atkPower: 10 + Math.floor(Math.random() * 50)
            counterAtk: Math.floor(Math.random() * 50)
        }
        else if (x == "zoro") {
            name: "zoro"
            hp: 150
            atKPower: 40
            couneterAtk: 20 + Math.floor(Math.random() * 10)
        }
        else if (x == "marco") {
            name: "marco"
            hp: 200
            atKPower: 20
            counterAtk: 20
        }
    }


    $(".main-container").on("click", ".character", function () {


        if (isDefender == false && isEnemy == false) {
            return false;
        }
        if (isDefender == true) {
            visiblehero = $(this).attr("id")
            console.log(visiblehero);
            window.alert("You choose " + visiblehero);
            setupChar(visiblehero);
            console.log(setupChar(visiblehero));
            $("#luffy").hide();
            $("#select").hide();
            document.getElementById("defeat").innerHTML = "Defeat All Enemies!!!";
            $("#character").appendTo("#defenderarea");
        }

    });

});
