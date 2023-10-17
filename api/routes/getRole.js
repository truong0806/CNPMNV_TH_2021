var express = require('express');

var router = express.Router();

var Role = require('../config/role');
router.get('/role/get/:id?',function(req,res,next){
    if(req.params.id){
        Role.getRoleById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Role.getAllRole(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/role/create',function(req,res,next){
    console.log(req.body)
    Role.addRole(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/role/delete/:id',function(req,res,next){
    Role.deleteRole(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/role/update/:id',function(req,res,next){
    Role.updateRole(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router;