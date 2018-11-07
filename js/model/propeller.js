"use strict";
exports.__esModule = true;
var Propeller = /** @class */ (function () {
    function Propeller(maxPower) {
        this.currentPower = 0;
        this.maxPower = maxPower;
    }
    Propeller.prototype.speedUp = function (increase) {
        this.currentPower += increase;
        //Si la potencia actual supera la máxima potencia, la dejamos al máximo del propulsor
        if (this.currentPower > this.maxPower) {
            this.currentPower = this.maxPower;
        }
        return this.currentPower;
    };
    Propeller.prototype.brake = function (decrement) {
        this.currentPower -= decrement;
        //Si la potencia actual es inferior a 0, la dejamos a 0
        if (this.currentPower < 0) {
            this.currentPower = 0;
        }
        return this.currentPower;
    };
    return Propeller;
}());
exports.Propeller = Propeller;
