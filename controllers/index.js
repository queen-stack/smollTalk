const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const landingRoutes = require('./landing-routes');

router.use('/api', apiRoutes);
router.use('/', landingRoutes);
router.use('/home', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;