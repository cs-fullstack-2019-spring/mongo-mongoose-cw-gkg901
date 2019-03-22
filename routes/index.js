var express = require('express');
var router = express.Router();
var Animal = require('../models/zoo');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//ROUTE CREATES ANIMAL
router.get('/animal/add/:animal_id/:animal_type/:animal_description', (req, res) => {
    animalData = {
        animal_id: req.params.animal_id,
        animal_type: req.params.animal_type,
        animal_description: req.params.animal_description,
    };
    Animal.create(animalData, (error, results) => {
        if (error) {
            return console.log(error)
        } else res.send(results)
    })
});

//ROUTE FINDS ANIMAL
router.get('/animal/get/:animal_id', (req, res) => {
    Animal.find({animal_id: req.params.animal_id}, (error, results) => {
        if (error) console.log(error);
        else res.send(results)
    })
});

//ROUTE FINDS AND ANIMAL AND UPDATES THE TYPE AND DESCRIPTION
router.get('/animal/update/:animal_id/:animal_type/:animal_description', (req, res) => {
    Animal.findOneAndUpdate({animal_id: req.params.animal_id}, {
        animal_type: req.params.animal_type,
        animal_description: req.params.animal_description
    }, (error, results) => {
        if (error) console.log(error);
        else res.send(results);
    })
});

//ROUTE DELETES BY ANIMAL ID
router.get('/animal/del/:animal_id', (req, res) => {
    Animal.deleteOne({animal_id: req.params.animal_id}, (error, results) => {
        if (error) return console.log(error)
    });
    res.send('delete by animal_id')
});

module.exports = router;
