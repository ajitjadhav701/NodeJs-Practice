const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({message:'hello from server side...!',status: 'OK'}); 
});

app.post('/',(req,res)=>{
    res.send('I am using post operation here..!')
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})