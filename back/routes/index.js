const {Router} = require('express');
const router = Router();

const postItem = require('../controllers/POST/postItem');
const getItems = require('../controllers/GET/getItems');
const postUser = require('../controllers/POST/postUser');
const getMyUser = require('../controllers/GET/getMyUser');

router.get('/items', getItems)
router.get('/user', getMyUser)

router.post('/additem', postItem)
router.post('/register', postUser)

module.exports=router;