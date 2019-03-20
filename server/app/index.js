const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

engine.start();

app.get('/dragon/new', (req, res) => {
  res.json({ dragon: engine.generation.newDragon() });
});

module.exports = app;