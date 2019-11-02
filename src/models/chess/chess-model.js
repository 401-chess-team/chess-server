'use strict';

const Model = require('../mongo.js');
const schema = require('./chess-schema.js');

/**
 * Class representing a Category.
 * @extends Model
 */
class Board extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Board;
