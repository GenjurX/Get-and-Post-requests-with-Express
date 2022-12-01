/*Write a server that:
- if client issue a GET /unique then it returns the unique values provided as “numbers” query parameter
- if client issue a GET /sum then it returns the sum of all the values provided as “numbers” query parameter
- if client issue a POST /unique then it returns the unique values provided as “numbers” post parameter
- if client issue a POST /sum then it returns the sum of all the values provided as “numbers” post parameter*/

import express from 'express';
import {sumOfArray, returnUnique} from './function.js';

const app = express();
app.use(express.json());

// GET first part done
app.get('/unique', async (req, res) => {
  console.log('GET method =>');
  const numbers= req.query.numbers;
  const unique = returnUnique(numbers);
  res.json(unique);
});

//

app.get('/sum', async (req, res) => {
    console.log('GET method =>');
    const numbers = req.query.numbers;
    const arr = [];
    

    for (let number of numbers) {
        if(!isNaN(Number(number))) {
        arr.push(Number(number));}
    }
    const Sum = sumOfArray(arr);
    res.send(String(Sum));
});

app.post('/unique', async (req, res) => {
  console.log('POST method =>');
  const numbers= req.query.numbers;
  const unique = returnUnique(numbers);
  res.json(unique);
});

// POST
app.post('/sum', async (req, res) => {
  console.log('POST method =>');
  const numbers = req.query.numbers;
  const arr = [];
  

  for (let number of numbers) {
      if(!isNaN(Number(number))) {
      arr.push(Number(number));}
  }
  const Sum = sumOfArray(arr);
  res.send(String(Sum));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})