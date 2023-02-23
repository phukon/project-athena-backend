const express = require('express')
const app = express()
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User')
const bcrypt = require('bcryptjs');





const salt = bcrypt.genSaltSync(10);

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://random:NmlwvZsMBbiSIWmt@cluster0.8i8ngw9.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async(req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({username, password:bcrypt.hashSync(password,salt)})
        res.json(userDoc);
    } catch(e) {res.status(400).json(e)}
    
})

app.listen(4000)