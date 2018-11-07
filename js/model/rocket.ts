import { Propeller } from '../model/propeller';

export class Rocket {
    codename:string;
    propellers: Propeller[] = [];

    constructor(codename:string)
    {
        this.codename = codename;
    }

    //Creamos nuevo propulsor y lo agreagamos al listado de propulsores de cada cohete.
    addProppeler(maxPower){
        const propeller = new Propeller(maxPower);
        this.propellers.push(propeller);        
    }

    speedUp(){
        for(let propeller of this.propellers){
            propeller.speedUp(8);
        }
    }

    brake(){
        for (let propeller of this.propellers) {
            propeller.brake(8);
        }
    }
}