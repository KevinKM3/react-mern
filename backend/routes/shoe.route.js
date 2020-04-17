let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

//Shoe Model
let shoeSchema = require('../Models/Shoe');

// Create Shoe
router.route('/create-shoe').post((req, res, next) => {
    shoeSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// Read Shoes
router.route('/').get((req, res) => {
    shoeSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single Shoe
router.route('/edit-shoe/:id').get((req, res) => {
    shoeSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Shoe
router.route('/update-shoe/:id').put((req, res, next) => {
    shoeSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Shoe updated successfully!')
        }
    })
})

// Delete Shoe
router.route('/delete-shoe/:id').delete((req, res, next) => {
    shoeSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;