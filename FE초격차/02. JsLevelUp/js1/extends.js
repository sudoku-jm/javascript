//상속, 확장

class Vehicle {
    constructor(name, wheel){
        this.name = name
        this.wheel = wheel
    }
}

const myVehicle = new Vehicle('운송수단',2)
console.log(myVehicle)


class Bicycle extends Vehicle{      //상속 extends
    constructor(name,wheel){
        super(name,wheel)           //super부분에서 Vehicle가 실행
    }
}

const myBicycle = new Bicycle('삼천리',2)
const daughtersBicycle = new Bicycle('세발',3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
    constructor(name, wheel, license){
        super(name, wheel)       //기본내용 사용 상속
        this.license = license  //추가적인 내용 확장.
    }
}

const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar)