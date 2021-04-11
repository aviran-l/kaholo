const express = require('express');
const app = express();
const mongoose = require('mongoose');

const schema = new mongoose.Schema({ name: String });
const Model = mongoose.model('settings', schema);

app.get('/', async (req, res) => {
    try {
        
        const gets = await Model.find();
        return res.json(gets);
        
    }
    catch (err) {
        res.json({message : err});
    }
});


mongoose.connect('mongodb://18.191.245.122:27017/test', {useUnifiedTopology: true, useNewUrlParser: true});

app.listen(3000);