const express =  require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5000

mongoose.connect('mongodb+srv://JuhwanKim:123456789a@cluster0.dv0wl.mongodb.net/test?retryWrites=true&w=majorityy', 
{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err))

//mongodb+srv://JuhwanKim:<password>@cluster0.dv0wl.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get('/', (req, res) => res.send('Hello World!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}! `))