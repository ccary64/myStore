'use strict';

const models = require('../models');

const addItem = async (req, res) => {
  const { attributeId } = req.params;
  const { label } = req.body;

  if (label == null) {
    return res.status(422).send({ error: 'missing parameter' });
  }

  try {
    const result = await models.AttributeItem.create({ label, attributeId: attributeId })
    return res.sendStatus(200);
  } catch(err) {
    console.log(err);
    return res.status(500).send({ error: 'Insert failed' });
  }
}

const getAllItems = async (req, res) => {
  const { attribute } = req.params;
  try {
    const result = await models.AttributeItem.findAll();
    return res.send(result);
  } catch(err) {
    console.log(err);
    res.status(404).send({ error: 'fetch failed' })
  }
}

module.exports = { addItem, getAllItems }