const db = require("../../data/db-config");

const getAll = async () => {
  const cars = await db("cars");
  return cars;
};

const getById = async (id) => {
  const car = await db("cars").where("id", id).first();
  return car;
};

const create = () => {
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
};
