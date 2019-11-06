'use strict';

const mongoose = require('mongoose');

const chessBoard = mongoose.Schema({
  moves: [[]],
  players: [
    {
      white: { type: String },
      black: { type: String },
    },
  ],
  games: [
    {
      _id: { type: Number },
    },
  ],
  createdAt: { type: Date },
  options: { type: Object, blackbox: true },
});

chessBoard.pre('find', function() {
  try {
    this.populate('board');
  } catch (e) {
    console.error('Find Error', e);
  }
});

chessBoard.post('save', function(error) {
  console.log('The board has been saved');
  if (error) {
    console.error(error);
  }
});

chessBoard.get('get data', function(error) {
  console.log('getting the data');
  if (error) {
    console.log(error);
  }
});

module.exports = mongoose.model('board', chessBoard);
