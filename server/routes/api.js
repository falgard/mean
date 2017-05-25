const mongoose = require('mongoose').set('debug', true);
const express = require('express');
const router = express.Router();

const dbHost = 'mongodb://127.0.0.1/resume';
mongoose.connect(dbHost);

// create mongoose schema
const consultantSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
  skills: [String]
});

const skillSchema = new mongoose.Schema({
  name: String,
  type: String
});

// create mongoose model
const Consultant = mongoose.model('Consultant', consultantSchema);
const Skill = mongoose.model('Skill', skillSchema);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/skills', (req, res) => {
    Skill.find({}, (err, skills) => {
        if (err) res.status(500).send(error)

        res.status(200).json(skills);
    });
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
    var _id = mongoose.Types.ObjectId(req.params.id);
    Consultant.findById(_id, (err, consultants) => {
        if (err) res.status(500).send(error)

        res.status(200).json(consultants);
    });
});

/* Create a consultant. */
router.post('/consultants', (req, res) => {
    let consultant = new Consultant({
        name: req.body.name,
        age: req.body.age,
        role: req.body.role,
        skills: req.body.skills
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