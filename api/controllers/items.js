'use strict';

const getAll = (req, res) => {
  res.send([{
    id: 1,
    name: 'item #1'
  },{
    id: 2,
    name: 'item #2'
  }]);
}

const getById = (req, res) => {
  const { itemId } = req.params;
  res.send({ id: itemId, name: `item #${itemId}`});
}

module.exports = {
  getAll,
  getById
}