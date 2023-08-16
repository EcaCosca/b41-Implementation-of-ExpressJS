require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

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

app.get('/ex7', (req, res) => {
    res.render('./pages/form.ejs');
})

app.post('/showPost', (req, res) => {
    // console.log(req.params)
    console.log(req.body)
    // console.log(req.query)
    console.log(req.method)
    res.send("Working")
})

app.get('/ex8', (req, res) => {
    res.render('./pages/formGet.ejs');
})

app.get('/showGet', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    console.log(req.method)
    res.send("Working")
})

app.listen(port,()=>{
  console.log(`http://localhost:${port}/`);
});
