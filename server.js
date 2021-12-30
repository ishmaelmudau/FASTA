var http = require('http');
var fs = require('fs');
const axios = require ('axios');

// 'Puzzle inputs differ by user.  Please log in to get your puzzle input.\n'
//  Thats a bummer
// axios.post('https://adventofcode.com/2021/day/1/input')
// .then(response => {
//     console.log(response)
// }).catch(err => {
//     console.log(err)
// })


fs.readFile('testData', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    var increaseCounter = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i +1] > array[i] ){
            console.log("Increase", array[i] , " ", array[i +1])
            increaseCounter++;
        }else if(array[i + 1] < array[i]) {
            console.log("Decrease", array[i] , " ", array[i +1])
        }else {
            console.log("No Change", array[i] , " ", array[i +1])
        }
    }
    console.log(increaseCounter)
    
    // for(line in array) {
    //     if (array[line +1] > array[line] ){
    //         console.log("Increase")
    //     }else if(array[line + 1] < array[line]) {
    //         console.log("Decrease")
    //     }else {
    //         console.log("No Change")
    //     }
    // }
})


// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end("Hello world\n");
// });

// server.listen(3000, function() {
//     console.log('Server is running at 3000')
// });