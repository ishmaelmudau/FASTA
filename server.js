var http = require('http');
var fs = require('fs');
import {numbers} from ("./utilities")

//JS solution
fs.readFile('testData', function(err, data) {
    if(err) throw err;
    const depthdepthArray = data.toString().split("\n");
    var increaseCounter = 0;
    for(let i = 1; i < depthArray.length; i++) {
        if (depthArray[i] > depthArray[i - 1] ){
            console.log("Increase", depthArray[i] , " ", depthArray[i +1])
            increaseCounter++;
        }
    }
    console.log(increaseCounter)

})

// TypeScript solution 

// fs.readFile('testData', function(err, data) {
//     if(err) throw err;
//     const depthdepthArray = data.toString().split("\n");
//     let increaseCounter = 0;
//     for (let i = 1; i < depthArray.length; i++) {
//         if (depthArray[i] > depthArray[i - 1]) {
//             increaseCounter++;
//         }
//     }

//     console.log(increaseCounter);

// })