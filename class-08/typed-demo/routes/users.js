'use strict';

const express = require('express');

const router = express.Router();

const { getAll, getOne, createOne } = require('../controllers/user-controller.js');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createOne);
router.put('/:id');
router.patch('/:id');
router.delete('/:id');

module.exports = router;
