const router = require("express").Router();

const Car = require("./cars-model");

// import middleware here

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await Car.getById(id);
    res.json(car);
  } catch (err) {
    next(err);
  }
});

// post

module.exports = router;
