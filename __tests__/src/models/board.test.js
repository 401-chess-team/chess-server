'user strict';

const supergoose = require('../supergoose.js');
const board = require('../../../src/models/chess/chess-schema.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Chess Board Test', () => {
  it('Can save with schema', () => {});
});
