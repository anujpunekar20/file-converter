const express = require('express');
const router = express.Router();

router.post('/jpg-to-pdf/:File', async (req, res) => {
    const file = req.body;
    try {
        var convertapi = require('convertapi')('gLQHua4mXnVywMam');
        convertapi.convert('pdf', {
            File: file
        }, 'jpg').then(function (result) {
            result.saveFiles(' ');
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
});