const fs=require('fs');
const express = require('express');
const app = express();

app.use(express.json());//middleware:between req and rex

/*
app.get('/',(req,res)=>{
    res.status(200).json({message:'hello from server side...!',status: 'OK'}); 
});
app.post('/',(req,res)=>{
    res.send('I am using post operation here..!')
})
*/

const tours=JSON.parse( fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'success',
        results:tours.length,
        data:{
            tours,
        }
    });
})


app.post('/api/v1/tours',(req,res)=>{
// console.log(req.body);
    const newId=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours),err=>{
        res.status(201).json({
            status: 'success',
            data:{
                 tour:newTour
            }
        })
    })
})
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})


