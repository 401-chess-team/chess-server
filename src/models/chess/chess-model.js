'use strict';

const Model = require('../mongo.js');
const schema = require('./categories-schema.js');

/**
 * Class representing a Category.
 * @extends Model
 */
class Chess extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = Chess;
