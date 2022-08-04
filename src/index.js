const express= require('express');
const bodyParser = require('body-parser');
const router = require('./router/route');
const app= express();  
const mongoose = require('mongoose');
const multer=require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

mongoose.connect("mongodb+srv://hajurKoYatra:Locked5556@cluster0.4dxsk.mongodb.net/hajurKoYatraDB1?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',router)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

