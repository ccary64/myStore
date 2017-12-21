'use strict';

const getAll = (req, res) => {
  res.send([{
    id: 1,
    name: 'Super Awesome'
  },{
    id: 2,
    name: 'Sort Of Cool'
  },{
    id: 3,
    name: 'Kind Of Rad'
  },{
    id: 4,
    name: 'Super Cool'
  }]);
}

const getById = (req, res) => {
  const { categoryId } = req.params;
  res.send([{
    id: 1,
    attributes: {
      color: 'red',
      size: 'sm'
    }
  },{
    id: 2,
    attributes: {
      color: 'red',
      size: 'md'
    }
  },{
    id: 3,
    attributes: {
      color: 'red',
      size: 'lg'
    }
  },{
    id: 4,
    attributes: {
      color: 'blue',
      size: 'sm'
    }
  },{
    id: 5,
    attributes: {
      color: 'blue',
      size: 'lg'
    }
  }]);
}

module.exports = {
  getAll,
  getById
}