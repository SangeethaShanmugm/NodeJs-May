const fs = require("fs")


function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function doMath() {
    const result1 = add(3, 4);
    const result2 = multiply(result1, 2);
}

console.log(doMath());




function user(name, callback) {
    console.log("Hi", name)
    callback()
}

//callback func

function callMe() {
    console.log("I am a callback function")
}

user("jack", callMe)

// callback in Synchronous and Asynchronous 

//Asynchronous = > writeFile()
//node callback.js 5

// const [, , noOfFiles] = process.argv
// console.log(noOfFiles)
// const quote = "No beauty shines that that of a good heart😀"

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote, () => {
//         console.log(`Completed writing file text-${i}.html`)
//     })
// }



//Synchronous = > writeFileSync()
//node callback.js 5

const [, , noOfFiles] = process.argv
console.log(noOfFiles)
const quote = "No beauty shines that that of a good heart😀"

for (let i = 1; i <= noOfFiles; i++) {
    fs.writeFileSync(`./backup/note-${i}.txt`, quote)
    console.log(`Completed writing file note-${i}.txt`)
}



