const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/games', commentRoutes);

module.exports = router;
