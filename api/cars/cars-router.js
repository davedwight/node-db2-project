const router = require('express').Router();

// const Car = require('./cars-model');

// import middleware here

router.get('/', (req, res, next) => {
    console.log('inside cars-router');
})

module.exports = router;