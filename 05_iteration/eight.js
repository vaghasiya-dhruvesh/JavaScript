// reduce

const myNums = [1, 2, 3]

// const total = myNums.reduce( function( previousValue, currentValue) {}, initialValue)

// const myTotal = myNums.reduce(function (acc, currval) {
//      console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const cart = [
    {
        price: 299
    },
    {
        price: 3000
    },
    {
        price: 2012
    },
    {
        price: 119
    }
]

const val = cart.reduce( (acc, curr) => {
    return acc + curr.price
}, 0)

console.log(val);
