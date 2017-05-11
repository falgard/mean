const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const dbHost = 'mongodb://127.0.0.1/resume';
mongoose.connect(dbHost);

// create mongoose schema
const consultantSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String
});

// create mongoose model
const Consultant = mongoose.model('Consultant', consultantSchema);



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


/* GET all consultants. */
router.get('/consultants', (req, res) => {
    Consultant.find({}, (err, consultants) => {
        if (err) res.status(500).send(error)

        res.status(200).json(consultants);
    });
});

/* GET one consultant. */
router.get('/consultants/:id', (req, res) => {
    Consultant.findById(req.param.id, (err, consultants) => {
        if (err) res.status(500).send(error)

        res.status(200).json(consultants);
    });
});

/* Create a consultant. */
router.post('/consultants', (req, res) => {
    let consultant = new Consultant({
        name: req.body.name,
        age: req.body.age,
        role: req.body.role
    });

    consultant.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Consultant created successfully',
            data: consultant
        });
    });
});


module.exports = router;