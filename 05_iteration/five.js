const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach method
// The forEach() method executes a provided function once for each array element.
// It is not a loop, it is a method of the array object.
// It takes a callback function as an argument and applies it to each element of the array.

coding.forEach( function (val){  //callback function don't have any name
    // console.log(val);
} )

// forEach method with arrow function

coding.forEach( (val) => {
    // console.log(val);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr); // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )