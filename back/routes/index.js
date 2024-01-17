const {Router} = require('express');
const router = Router();

const postItem = require('../controllers/POST/postItem')

router.post('/additem', postItem)

module.exports=router;