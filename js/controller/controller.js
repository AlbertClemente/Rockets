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
    var speedCounter = 0;
    rocketOneSpeedUpCtrl.addEventListener('click', function () {
        rocketOne.speedUp();
        speedCounter++;
        animateRocket(rocketImgOne, speedCounter);
        checkEnginesInfoExistence(rocketOne, rocket1Container);
    });
    rocketTwoSpeedUpCtrl.addEventListener('click', function () {
        rocketTwo.speedUp();
        animateRocket(rocketImgTwo, speedCounter);
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
            rocketImgNumber.style.animation = "vibrate-1 1s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-1 1s ease-in-out infinite both";
        case 2:
            rocketImgNumber.style.animation = "vibrate-2 0.8s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-2 0.4s ease-in-out infinite both";
        case 3:
            rocketImgNumber.style.animation = "vibrate-3 0.6s ease-in-out infinite both";
            rocketImgNumber.style["webkit" + "animation"] = "vibrate-3 0.6s ease-in-out infinite both";
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
