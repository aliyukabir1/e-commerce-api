
const express = require('express');
const dotEnv = require("dotenv");

//should configure it first
dotEnv.config({path:'./src/.env'})
const app = express();
const port = process.env.PORT; 

app.get('/',(req,res)=>{
    res.send('Blah Blah')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });