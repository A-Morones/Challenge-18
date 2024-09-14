const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-Routes');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;