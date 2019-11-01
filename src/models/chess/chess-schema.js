'use strict';

const mongoose = require('mongoose');

const chess = mongoose.Schema({
  restRefId: { type: String },
  createdBy: { type: String },
  title: { type: String },
  options: { type: Object, blackbox: true },
  createdAt: { type: Date },
});

console.log(chess);

chess.pre('find', function() {
  try {
    this.populate('board');
  } catch (e) {
    console.error('Find Error', e);
  }
});

module.exports = mongoose.model('chess', chess);
