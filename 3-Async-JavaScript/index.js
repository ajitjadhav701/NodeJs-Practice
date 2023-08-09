const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
   console.log(`Breed: ${data}`);
   superagent.get(`https://dog.ceo/api/breed/${data}/image/random`)
      .end((err, res) => {
         if (err) return console.log('error ::', err.message);

            console.log(res?.body.message);
            fs.writeFile(`imgaeDogs`, res.message,(err, res) => {
               console.log('data saved in new file');
            })
      })
})