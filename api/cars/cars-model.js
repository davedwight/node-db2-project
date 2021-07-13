const db = require("../../data/db-config");

const getAll = async () => {
  const cars = await db("cars");
  return cars;
};

const getById = () => {
  // DO YOUR MAGIC
};

const create = () => {
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
};
