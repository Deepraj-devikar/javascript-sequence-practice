class FeetInch{
    constructor(feet, inch) {
        this.feet = feet;
        this.inch = inch;
        this.feet += Math.floor(this.inch / 12);
        this.inch = this.inch % 12;
    }

    toString(){
        return this.feet + " feet and " + this.inch + " inch";
    }
}

let inch42 = new FeetInch(0, 42);
console.log("42 inches are equal to " + inch42.toString());

function feetInchToMeterConversion(feetInch){
    inches = feetInch.feet * 12 + feetInch.inch;
    return inches * 0.0254;
}

class Rectangle{
    constructor(dimension1, dimension2){
        this.dimension1 = dimension1 instanceof FeetInch ? feetInchToMeterConversion(dimension1) : dimension1;
        this.dimension2 = dimension2 instanceof FeetInch ? feetInchToMeterConversion(dimension2) : dimension2;
    }

    area(){
        return this.dimension1 * this.dimension2;
    }
}

let feet60 = new FeetInch(60, 0);
let feet40 = new FeetInch(40, 0);
let plot60X40Feet = new Rectangle(feet60, feet40);
console.log("Area of 60 feet * 40 feet plot in meters is " + plot60X40Feet.area() + " meters square.");

function meterSquareToAcre(meterSquare){
    return meterSquare * 0.000247105;
}

console.log("Area of 25 such plots in acre is " + meterSquareToAcre(plot60X40Feet.area() * 25) + " acre.");