require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')
let ejs = require('ejs');

// Set the view engine to ejs
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000

app.route('/')
.get((req, res)=>{res.send("Welcome!")})
.put((req, res) => {res.sendFile(path.join(__dirname, 'index.html'));})
.delete((req, res) => {res.status(202).json({good:"yep"});})

app.get('/test-ejs', (req, res) => {
    res.render('./pages/index.ejs', {myTitle:"my first title"});
})

app.get('/test-ejs2', (req, res) => {
    res.render('./pages/users.ejs', {
        users : ['Bob', 'John', 'Jane' ]
      });
})

app.listen(port,()=>{
  console.log(`http://localhost:${port}/`);
});
