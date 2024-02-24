const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'get goals' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'set goals' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete('/', (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

module.exports = router;
