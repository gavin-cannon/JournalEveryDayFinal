const express = require('express');
const router = express.Router();


router.use('/', require('./entries'));


router.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});


module.exports = router;