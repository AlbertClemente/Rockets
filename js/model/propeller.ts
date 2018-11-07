export class Propeller {
    currentPower: number;
    maxPower: number;

    constructor(maxPower: number) {
        this.currentPower = 0;
        this.maxPower = maxPower;
    }

    speedUp(increase: number): number {
        this.currentPower += increase;

        //Si la potencia actual supera la máxima potencia, la dejamos al máximo del propulsor
        if (this.currentPower > this.maxPower) {
            this.currentPower = this.maxPower;
        }
        return this.currentPower;
    }

    brake(decrement: number): number {
        this.currentPower -= decrement;
        //Si la potencia actual es inferior a 0, la dejamos a 0
        if (this.currentPower < 0) {
            this.currentPower = 0;
        }
        return this.currentPower;
    }
}