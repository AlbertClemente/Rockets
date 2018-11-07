import { Rocket } from '../model/rocket';

export class RocketController{
    /*
    rocketOne = new Rocket('32WESSDS', 3, [10,30,80]);
    rocketTwo = new Rocket('LDSFJA32', 6, [30,40,50,50,30,10]);
    */

    rocketOne = new Rocket('32WESSDS');
    rocketTwo = new Rocket('LDSFJA32');
}

const rocketCntrl = new RocketController();
const rocketOne = rocketCntrl.rocketOne;
const rocketTwo = rocketCntrl.rocketTwo;

rocketOne.addProppeler(10);
rocketOne.addProppeler(30);
rocketOne.addProppeler(80);

rocketTwo.addProppeler(30);
rocketTwo.addProppeler(40);
rocketTwo.addProppeler(50);
rocketTwo.addProppeler(50);
rocketTwo.addProppeler(30);
rocketTwo.addProppeler(10);

const rocket1Container = document.getElementById('32WESSDS');
const rocket2Container = document.getElementById('LDSFJA32');  

createInfo(rocketOne, rocket1Container);
createInfo(rocketTwo, rocket2Container);

handleRockets();

function handleRockets(){
    const rocketOneSpeedUpCtrl = document.querySelector('#btnRocket1_speedUp');
    const rocketOneBrakeCtrl = document.querySelector('#btnRocket1_brake');
    const rocketTwoSpeedUpCtrl = document.querySelector('#btnRocket2_speedUp');
    const rocketTwoBrakeCtrl = document.querySelector('#btnRocket2_brake');
    
    rocketOneSpeedUpCtrl.addEventListener('click', () => {
        rocketOne.speedUp();
        checkEnginesInfoExistence(rocketOne, rocket1Container);
    });
    
    rocketTwoSpeedUpCtrl.addEventListener('click', () => {
        rocketTwo.speedUp();
        checkEnginesInfoExistence(rocketTwo, rocket2Container);
    });
    
    rocketOneBrakeCtrl.addEventListener('click', () => {
        rocketOne.brake();
        checkEnginesInfoExistence(rocketOne, rocket1Container);
    });
    
    rocketTwoBrakeCtrl.addEventListener('click', () => {
        rocketTwo.brake();
        checkEnginesInfoExistence(rocketTwo, rocket2Container);
    });
    
}


function createInfo(rocketNumber, rocketContainer){
    const rocketCodeTitle = document.createElement('h2');
    const rocketNumProppellers = document.createElement('h3');

    rocketCodeTitle.innerHTML = rocketNumber.codename;
    rocketNumProppellers.innerHTML = "Número de motores: " + rocketNumber.propellers.length;
    rocketContainer.appendChild(rocketCodeTitle);
    rocketContainer.appendChild(rocketNumProppellers);
    createEnginesInfo(rocketNumber, rocketContainer);
}

function checkEnginesInfoExistence(rocketNumber, rocketContainer){
    let rocketCode = rocketNumber.codename;
    let elem = document.querySelector('.enginesInfo' + rocketCode);
    if(rocketContainer.contains(elem)){
        rocketContainer.removeChild(elem);
    }
    createEnginesInfo(rocketNumber, rocketContainer);
}

function createEnginesInfo(rocketNumber,rocketContainer) {
    const rocketPowerContainer = document.createElement('div');
    let rocketCode = rocketNumber.codename;
    rocketPowerContainer.classList.add('enginesInfo' + rocketCode);
    let rocketPropps = rocketNumber.propellers;
    getEnginesPower(rocketPowerContainer, rocketPropps);
    rocketContainer.appendChild(rocketPowerContainer);
}

function getEnginesPower(rocketPowerContainer,rocketPropps) {
    for (let index in rocketPropps) {
        let power = document.createElement('p');
        let engineNumber = parseInt(index) + 1;
        power.innerHTML = `Potencia del motor ${engineNumber}: ${rocketPropps[index].currentPower}/${rocketPropps[index].maxPower}`;
        rocketPowerContainer.appendChild(power);
    }
}

