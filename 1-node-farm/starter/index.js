const fs = require('fs')
//blocking synchronous way
/*
const data = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(data);
const textOut = `This is what we know about the avacodo : ${data}.\n created at ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut);
console.log('end written');
*/

//non-blocking Async way

fs.readFile('./txt/startss.txt', 'utf-8', (err, data1) => {
    if (err) return
    console.log('Error happens here....');
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            // console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2} \n ${data3}`, 'utf-8', err => {
                console.log('file has been written');
            })
        })
    })
})
console.log('last line');