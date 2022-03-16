const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.ctl.js')

router.get('/home', controller.getHome);
router.get('/contact', controller.getContact);
router.get('/profile', controller.getProfile);
router.get('/signin', controller.getSignin);
router.get('/signup', controller.getSignup);

module.exports = router;