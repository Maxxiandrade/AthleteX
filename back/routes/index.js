const {Router} = require('express');
const router = Router();

const postItem = require('../controllers/POST/postItem');
const getItems = require('../controllers/GET/getItems');
const postUser = require('../controllers/POST/postUser');
const getMyUser = require('../controllers/GET/getMyUser');
const putShipping = require('../controllers/PUT/putUser');
const putItem = require('../controllers/PUT/putItem');
const deleteItem = require('../controllers/DELETE/deleteItem');
const getItemByName = require('../controllers/GET/getItemByName');
const getCompras = require('../controllers/GET/getCompras');

router.get('/items', getItems)
router.get('/user', getMyUser)
router.get('/getbyname', getItemByName)
router.get('/pucharses', getCompras)

router.post('/additem', postItem)
router.post('/register', postUser)

router.put('/shipping', putShipping)
router.put('/price', putItem)

router.delete('/deleteitem', deleteItem)

module.exports=router;