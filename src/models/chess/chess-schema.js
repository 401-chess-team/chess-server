'use strict';

const mongoose = require('mongoose');

const chessBoard = mongoose.Schema({
  title: { type: String },
  whitePlayer: { type: String },
  blackPlayer: { type: String },
  uuid: { type: String },
  options: { type: Object, blackbox: true },
  createdAt: { type: Date },
});

chessBoard.pre('find', function() {
  try {
    this.populate('board');
  } catch (e) {
    console.error('Find Error', e);
  }
});

chessBoard.pre('save', function(error) {
  console.log('The board has been saved');
  if (error) {
    console.error(error);
  }
});

module.exports = mongoose.model('chess board', chessBoard);
