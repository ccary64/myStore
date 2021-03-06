'use strict';

const models = require('../models');

const addAttribute = async (req, res) => {
  const { name } = req.body;

  if (name == null) {
    return res.status(422).send({ error: 'missing parameter' });
  }

  try {
    const result = await models.Attribute.create({ name });
    return res.sendStatus(200);
  } catch(err) {
    console.log(err);
    return res.status(500).send({ error: 'Insert failed' });
  }
}

const getAllAttributes = async (req, res) => {
  try {
    const result = await models.Attribute.findAll();
    return res.send(result);
  } catch(err) {
    console.log(err);
    res.status(404).send({ error: 'fetch failed' })
  }
}

module.exports = { addAttribute, getAllAttributes }