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

const getDogPic=async ()=>{
   try {
      const data = await readFilePro(`${__dirname}/dog.txt`);
      console.log(`Breed: ${data}`);
      //waiting for multiple promises simultaneously
      const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/image/random`);
      const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/image/random`);
      const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/image/random`);

      const all =await PromiseRejectionEvent.all([res1Pro, res2Pro, res3Pro]);
      const imgs=all.map(el=>el.body.message)
      console.log(imgs);
      console.log(res?.body.message);

      await fs.writeFile(`imgaeDogs.txt`, imgs.join('\n'));
      cconsole.log('image has been saved');

   } catch (error) {
      console.log(error.message);
      throw(err);
   }
 
   return "from function reacy"
}

// 2. returning values from async function
(async()=>{
   try {
      console.log('1 first log message');
      const x=await getDogPic();
      console.log(x);
      console.log('2 secondlog message');
   } catch (err) {
      console.log('Error: ');
   }
})();
/*
// 1. returning values from async function
console.log('1 first log message');
getDogPic().then((x)=>{
   console.log(x);
}).catch(err=>{
   console.log('Error: ');
})
console.log('2 secondlog message');
*/

/*
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
 */
