const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const {data} = req.body;
    console.log(req.body);
    let numb = []
    let alpha = []
    data.forEach(item => {
        if (!isNaN(item)) {
          numb.push(String(item));
        } else if (/^[A-Za-z]+$/.test(item)) {
          alpha.push(item);
        }
      });
    // let highest = []
    // const highestAlphabet = alpha.reduce((highest, current) => {
    //     const lowerCurrent = current.toLowerCase();
    //     const lowerHighest = highest.toLowerCase();
      
    //     if (lowerCurrent > lowerHighest) {
    //       return current;
    //     } else {
    //       return highest;
    //     }
    //   }, '');

    let largest = [];
    let char=alpha[0];

    for (let i = 1; i < alpha.length; i++) {
        char = alpha[i];
        if (/[a-zA-Z]/.test(char) && char > largest) {
        largest.push(char)
        }
    }

    const response = {
      is_sucess: 'true',
      user_id:'Harashnabin_Roy_18042002',
      college_email:'hr2306@srmist.edu.in',
      roll_number:'RA2011003010321',
      numbers:numb,
      alphabets:alpha,
      HighestAlphabets:largest
    };
  
    res.json(response);
  });
  
  app.get('/bfhl', (req, res) => {
    const operationCode = Math.floor(Math.random() * 1000);
  
    const response = {
      operation_code: operationCode,
    };
  
    res.json(response);
  });
  
app.listen(3000, function () {
    console.log("Server is running on 3000");
});