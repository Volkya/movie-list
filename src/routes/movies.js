const express = require('express');
const router =  express.Router();

router.get('/movies/add', function (req, res) {
    res.render('movies/new-movie');
});

module.exports = router;
