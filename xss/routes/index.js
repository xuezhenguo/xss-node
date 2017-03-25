var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.set('X-XSS-Protection',0);
  res.render('index', { title: 'Express',xss:req.query.xss });//反射型攻击
  // res.render('index', { title: 'Express',xss:sql() });//存储型攻击
});

module.exports = router;
