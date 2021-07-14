const router = require("express").Router();

const Car = require("./cars-model");

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  res.json(req.car);
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {
    try {
      const post = await Car.create(req.body);
      res.status(201).json(post);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
