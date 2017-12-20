'use strict';

const models = require('../models');

const addItem = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await models.Attribute.create({ name });
    return res.sendStatus(200);
  } catch(err) {
    console.log(err);
    res.status(500).send({ error: 'Insert failed' })
  }
}

const getAllItems = async (req, res) => {
  try {
    const result = await models.Attribute.findAll();
    return res.send(result);
  } catch(err) {
    console.log(err);
    res.status(404).send({ error: 'fetch failed' })
  }
}

module.exports = { addItem, getAllItems }