const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
   return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
         if (err) reject('I could not find that file: ' + err.message);
         resolve(data);
      })
   })
}

const writeFilePro = (file, data) => {
   return new Promise((resolve, reject) => {
      fs.writeFile(file, (err, data) => {
         if (err) reject('I could not find that file: ' + err.message);
         resolve('success: ');
      })
   })
}
readFilePro(`${__dirname}/dog.txt`)
   .then((data) => {
   console.log(`Breed: ${data}`);   
   return superagent.get(`https://dog.ceo/api/breed/${data}/image/random`)
}).then(res => {
   console.log(res?.body.message);
   return fs.writeFile(`imgaeDogs.txt`, res.body.message)
}).then(() => {
   cconsole.log('image has been saved');
})
   .catch(err => console.log('error ::', err.message));
 
