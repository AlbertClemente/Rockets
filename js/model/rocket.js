"use strict";
exports.__esModule = true;
var propeller_1 = require("../model/propeller");
var Rocket = /** @class */ (function () {
    function Rocket(codename) {
        this.propellers = [];
        this.codename = codename;
    }
    //Creamos nuevo propulsor y lo agreagamos al listado de propulsores de cada cohete.
    Rocket.prototype.addProppeler = function (maxPower) {
        var propeller = new propeller_1.Propeller(maxPower);
        this.propellers.push(propeller);
    };
    Rocket.prototype.speedUp = function () {
        for (var _i = 0, _a = this.propellers; _i < _a.length; _i++) {
            var propeller = _a[_i];
            propeller.speedUp(8);
        }
    };
    Rocket.prototype.brake = function () {
        for (var _i = 0, _a = this.propellers; _i < _a.length; _i++) {
            var propeller = _a[_i];
            propeller.brake(8);
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
