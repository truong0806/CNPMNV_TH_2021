var express=require('express')
var router=express.Router()
var Account=require('../config/user')

router.get('/account/get/:id?',function(req,res,next){
    if(req.params.id){
        Account.getUserById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Account.getAllUser(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.get('/account/checkmail/:id',function(req,res,next)
{
    Account.getUserByEmail(req.params.id,function(err,rows)
    {
        err?res.json(err):res.json(rows)
    })
});

router.post('/account/checkmail',function(req,res,next)
{
    Account.getCheckEmail(req.body,function(err,rows)
    {
        err?res.json(err):res.json(rows)
    })
});

router.post('/account/create',function(req,res,next){
    Account.addUser(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/account/delete/:id',function(req,res,next){
    Account.deleteUser(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/account/update/:id',function(req,res,next){
    Account.updateUser(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

router.post('/account/check',function(req,res,next){
    Account.checkUser(req.body,function(err,rows)
    {
        err?res.json(err):res.json(rows)
    })
})
module.exports=router;