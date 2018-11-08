"use strict";
exports.__esModule = true;
var rocket_1 = require("../model/rocket");
var RocketController = /** @class */ (function () {
    function RocketController() {
        /*
        rocketOne = new Rocket('32WESSDS', 3, [10,30,80]);
        rocketTwo = new Rocket('LDSFJA32', 6, [30,40,50,50,30,10]);
        */
        this.rocketOne = new rocket_1.Rocket('32WESSDS');
        this.rocketTwo = new rocket_1.Rocket('LDSFJA32');
    }
    return RocketController;
}());
exports.RocketController = RocketController;
var rocketCntrl = new RocketController();
var rocketOne = rocketCntrl.rocketOne;
var rocketTwo = rocketCntrl.rocketTwo;
rocketOne.addProppeler(10);
rocketOne.addProppeler(30);
rocketOne.addProppeler(80);
rocketTwo.addProppeler(30);
rocketTwo.addProppeler(40);
rocketTwo.addProppeler(50);
rocketTwo.addProppeler(50);
rocketTwo.addProppeler(30);
rocketTwo.addProppeler(10);
var rocket1Container = document.getElementById('32WESSDS');
var rocket2Container = document.getElementById('LDSFJA32');
createInfo(rocketOne, rocket1Container);
createInfo(rocketTwo, rocket2Container);
handleRockets();
function handleRockets() {
    var rocketOneSpeedUpCtrl = document.querySelector('#btnRocket1_speedUp');
    var rocketOneBrakeCtrl = document.querySelector('#btnRocket1_brake');
    var rocketTwoSpeedUpCtrl = document.querySelector('#btnRocket2_speedUp');
    var rocketTwoBrakeCtrl = document.querySelector('#btnRocket2_brake');
    var rocketImgOne = document.querySelector('#rocketImgOne');
    var rocketImgTwo = document.querySelector('#rocketImgTwo');
    var speedCounterRocketOne = 0;
    var speedCounterRocketTwo = 0;
    rocketOneSpeedUpCtrl.addEventListener('click', function () {
        rocketOne.speedUp();
        speedCounterRocketOne++;
        animateRocket(rocketImgOne, speedCounterRocketOne);
        checkEnginesInfoExistence(rocketOne, rocket1Container);
    });
    rocketTwoSpeedUpCtrl.addEventListener('click', function () {
        rocketTwo.speedUp();
        speedCounterRocketTwo++;
        animateRocket(rocketImgTwo, speedCounterRocketTwo);
        checkEnginesInfoExistence(rocketTwo, rocket2Container);
    });
    rocketOneBrakeCtrl.addEventListener('click', function () {
        rocketOne.brake();
        checkEnginesInfoExistence(rocketOne, rocket1Container);
    });
    rocketTwoBrakeCtrl.addEventListener('click', function () {
        rocketTwo.brake();
        checkEnginesInfoExistence(rocketTwo, rocket2Container);
    });
}
function createInfo(rocketNumber, rocketContainer) {
    var rocketCodeTitle = document.createElement('h2');
    var rocketNumProppellers = document.createElement('h3');
    rocketCodeTitle.innerHTML = rocketNumber.codename;
    rocketNumProppellers.innerHTML = "Número de motores: " + rocketNumber.propellers.length;
    rocketContainer.appendChild(rocketCodeTitle);
    rocketContainer.appendChild(rocketNumProppellers);
    createEnginesInfo(rocketNumber, rocketContainer);
}
function animateRocket(rocketImgNumber, speedCounter) {
    switch (speedCounter) {
        case 1:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter + "s ease-in-out infinite both";
            break;
        case 2:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.45 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.45 + "s ease-in-out infinite both";
            break;
        case 3:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.2667 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.2667 + "s ease-in-out infinite both";
            break;
        case 4:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.175 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.175 + "s ease-in-out infinite both";
            break;
        case 5:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.12 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.12 + "s ease-in-out infinite both";
            break;
        case 6:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.0833 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.0833 + "s ease-in-out infinite both";
            break;
        case 7:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.0571 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.0571 + "s ease-in-out infinite both";
            break;
        case 8:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.0375 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.0375 + "s ease-in-out infinite both";
            break;
        case 9:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.0222 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.0222 + "s ease-in-out infinite both";
            break;
        case 10:
            rocketImgNumber.style.animation = "vibrate-" + speedCounter + " " + speedCounter * 0.01 + "s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-" + speedCounter + " " + speedCounter * 0.01 + "s ease-in-out infinite both";
            break;
    }
    console.log(speedCounter);
}
function checkEnginesInfoExistence(rocketNumber, rocketContainer) {
    var rocketCode = rocketNumber.codename;
    var elem = document.querySelector('.enginesInfo' + rocketCode);
    if (rocketContainer.contains(elem)) {
        rocketContainer.removeChild(elem);
    }
    createEnginesInfo(rocketNumber, rocketContainer);
}
function createEnginesInfo(rocketNumber, rocketContainer) {
    var rocketPowerContainer = document.createElement('div');
    rocketPowerContainer.classList.add('enginesInfoContainer');
    var rocketCode = rocketNumber.codename;
    rocketPowerContainer.classList.add('enginesInfo' + rocketCode);
    var rocketPropps = rocketNumber.propellers;
    getEnginesPower(rocketPowerContainer, rocketPropps);
    rocketContainer.appendChild(rocketPowerContainer);
}
function getEnginesPower(rocketPowerContainer, rocketPropps) {
    for (var index in rocketPropps) {
        var power = document.createElement('p');
        var engineNumber = parseInt(index) + 1;
        power.innerHTML = "Potencia del motor " + engineNumber + ": " + rocketPropps[index].currentPower + "/" + rocketPropps[index].maxPower;
        rocketPowerContainer.appendChild(power);
    }
}
