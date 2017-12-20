'use strict';

const models = require('../models');

const addProduct = async (req, res) => {
  const { attributes, qty = 0, price = 0 } = req.body;

  if (attributes == null) {
    return res.status(422).send({ error: 'missing parameter' });
  }

  try {
    const attributeModel = await models.Attribute.findOne({ where: { name: attribute }})
    const result = await models.AttributeItem.create({ label, attributeId: attributeModel.id })
    return res.sendStatus(200);
  } catch(err) {
    console.log(err);
    return res.status(500).send({ error: 'Insert failed' });
  }
}

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { attributes, qty, price } = req.body;

  if (attributes == null && qty == null && price == null) {
    return res.status(422).send({ error: 'missing parameter' });
  }

  try {
    const attributeModel = await models.Attribute.findOne({ where: { name: attribute }})
    const result = await models.AttributeItem.create({ label, attributeId: attributeModel.id })
    return res.sendStatus(200);
  } catch(err) {
    console.log(err);
    return res.status(500).send({ error: 'Insert failed' });
  }
}

const getAllProducts = async (req, res) => {
  const { attribute } = req.params;
  try {
    const result = await models.AttributeItem.findAll();
    return res.send(result);
  } catch(err) {
    console.log(err);
    res.status(404).send({ error: 'fetch failed' })
  }
}

module.exports = { addProduct, getAllProducts, updateProduct }