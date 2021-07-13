const router = require("express").Router();

const Car = require("./cars-model");

// import middleware here

router.get("/", async (req, res, next) => {
  try {
    const cars = Car.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

// get by id

// post

module.exports = router;
