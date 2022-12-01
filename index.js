/*Write a server that:
- if client issue a GET /unique then it returns the unique values provided as “numbers” query parameter
- if client issue a GET /sum then it returns the sum of all the values provided as “numbers” query parameter
- if client issue a POST /unique then it returns the unique values provided as “numbers” post parameter
- if client issue a POST /sum then it returns the sum of all the values provided as “numbers” post parameter*/

import express from 'express';
//import sumOfArray from './function.js';

const app = express();
app.use(express.json());

// GET first part done
app.get('/unique', async (req, res) => {
  console.log('GET method =>');
  const numbers= req.query.numbers;
  const unique= [];
  for(let number of numbers) {
    if(!unique.includes(number)){
        unique.push(number);
    }
  }
  res.json({unique});
});

//

app.get('/sum', async (req, res) => {
    console.log('GET method =>');
    const numbers = req.query.numbers;
    const arr = [];
    let Sum = 0;
    for (let i=0; i<numbers.length; i++) {
       arr [i] = Number(numbers[i]);
    }
    for (let i=0; i<arr.length; i++) {
        Sum += arr[i];
     }
     res.json({Sum}); // There is an error somewhere around here
  });

app.post('/unique', async (req, res) => {
  console.log('POST method =>');
  const numbers = req.body;
  const unique= [];
  for(let number of numbers) {
    if(!unique.includes(number)){
        unique.push(number);
    }
  }
  res.json({unique});
});


// POST
app.post('/sum', async (req, res) => {
  console.log('POST method =>');
  const numbers = req.query.numbers;
  const arr = [];
  let Sum = 0;
  for (let i=0; i<numbers.length; i++) {
     arr [i] = Number(numbers[i]);
  }
  for (let i=0; i<arr.length; i++) {
      Sum += arr[i];
   }
   res.json({Sum}); // There is an error somewhere around here
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})