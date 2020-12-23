const express =  require('express')
const mongoose = require('mongoose')
const { User } = require('./models/user')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
const port = 5000

mongoose.connect('mongodb+srv://JuhwanKim:123456789a@cluster0.dv0wl.mongodb.net/test?retryWrites=true', 
{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!'))


app.post('/register', (req,res) => {

    const user = new User(req.body)
    user.save((err, doc) => {
        if(err) return res.json({ success : false, err })
        return res.status(200).json({success : true})
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}! `))