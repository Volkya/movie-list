const express = require('express');
const router = express.Router();

router.get('/users/add', function (req, res) {
    res.render('users/new-user');
});

module.exports = router;
