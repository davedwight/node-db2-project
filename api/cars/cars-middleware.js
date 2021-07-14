const Car = require("./cars-model");

const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.getById(id);
    if (car) {
      req.car = car;
      next();
    } else {
      next({
        status: 404,
        message: `car with id ${id} is not found`,
      });
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body;

  const nextFunc = (fieldName) => {
    next({
      status: 400,
      message: `${fieldName} is missing`,
    });
  };

  if (!vin) {
    let fieldName = "vin";
    nextFunc(fieldName);
  } else if (!make) {
    let fieldName = "make";
    nextFunc(fieldName);
  } else if (!model) {
    let fieldName = "model";
    nextFunc(fieldName);
  } else if (!mileage) {
    let fieldName = "mileage";
    nextFunc(fieldName);
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;
  const isValidVin = vinValidator.validate(vin);

  if (!isValidVin) {
    next({
      status: 400,
      message: `vin ${vin} is invalid`,
    });
  } else {
    next();
  }
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
