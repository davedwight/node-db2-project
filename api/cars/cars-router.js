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

router.post("/", async (req, res, next) => {
  try {
    const post = await Car.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
