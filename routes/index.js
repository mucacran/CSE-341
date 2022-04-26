const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Sergio bravo');
});


module.exports = routes;