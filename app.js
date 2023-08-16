require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')

const port = process.env.PORT || 3000

app.route('/')
.get((req, res)=>{res.send("Welcome!")})
.put((req, res) => {res.sendFile(path.join(__dirname, 'index.html'));})
.delete((req, res) => {res.status(202).json({good:"yep"});})

app.listen(port,()=>{
  console.log(`http://localhost:${port}/`);
});
