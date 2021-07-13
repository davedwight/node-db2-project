const db = require('../../data/db-config');

const getAll = async () => {
  const cars = await db('cars');
  console.log(cars);
};

const getById = () => {
  // DO YOUR MAGIC
};

const create = () => {
  // DO YOUR MAGIC
};
