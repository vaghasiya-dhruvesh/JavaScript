const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5      // this do not change the value of pi
// console.log(Math.PI);

const car = {
    name: 'fortuner',
    price: 5500000,
    isAvailable: true,

    orderChai: function(){
        console.log("Legends used Legender Fortuner");
    }
}

console.log(Object.getOwnPropertyDescriptor(car, "name"));

Object.defineProperty(car, 'name', {
    writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(car, "name"));
 