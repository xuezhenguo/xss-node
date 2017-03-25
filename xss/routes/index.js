var express = require('express');
var router = express.Router();

var commonts = {};
function html_encode(str){
    var s='';
    if(str.length==0) return ""
        s=str.replace(/&/g,"&gt;");
        s=s.replace(/</g,"&lt;");
        s=s.replace(/>/g,"&gt;");
        s=s.replace(/\s/g,"&nbsp;");
        s=s.replace(/\'/g,"&#39;");
        s=s.replace(/\"/g,"&quot;");
        s=s.replace(/\n/g,"<br>");
        return s;
};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{title:'Express'});
  //   res.set('X-XSS-Protection',0);
  // res.render('index', { title: 'Express',xss:req.query.xss });//反射型攻击
  // res.render('index', { title: 'Express',xss:sql() });//存储型攻击
});

router.get('/commont',function(req,res,next){
    commonts.v = html_encode(req.query.commont);
});

router.get('/getCommont',function(req,res,next){
    res.json({
        commont:commonts.v
    })
});

module.exports = router;
