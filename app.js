require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')

const port = process.env.PORT || 3000

// app.get('/', (req, res)=>{
//     res.send("Welcome!")
// })

// app.put('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.route('/')
.get((req, res)=>{
    res.send("Welcome!")
})
.put((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port,()=>{
  console.log(`http://localhost:${port}/`);
});
