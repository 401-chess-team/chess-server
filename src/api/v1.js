'use strict';

/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/api/v1
 */

const cwd = process.cwd();

const express = require('express');

const auth = require('../auth/middleware.js');
const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);

const router = express.Router();

// Evaluate the model, dynamically
router.param('model', modelFinder.load);

// Models List
router.get('/api/v1/models', (request, response) => {
  modelFinder.list().then(models => response.status(200).json(models));
});

// JSON Schema
router.get('/api/v1/:model/schema', (request, response) => {
  response.status(200).json(request.model.jsonSchema());
});

// API Routes
router.get('/', express.static('public'));

//Posts the chess board
router.post('/api/v1/:model', handlePost);

//Gets the chess player
router.get('/api/v1/:model', handleGetOne);

//Gets the chess board
router.get('/api/v1/:model/:uuid', handleGetAll);

// Route Handlers
function handleGetAll(request, response, next) {
  request.model
    .get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function handleGetOne(request, response, next) {
  request.model
    .get(request.params.id)
    .then(result => response.status(200).json(result[result.length - 1].moves))
    .catch(next);
}

function handlePost(request, response, next) {
  request.model
    .create(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function handlePut(request, response, next) {
  request.model
    .update(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function handleDelete(request, response, next) {
  request.model
    .delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = router;
