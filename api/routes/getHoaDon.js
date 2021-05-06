var express = require('express');

var router = express.Router();

var HoaDon = require('../config/hoadon');
router.get('/hoadon/get/:id?',function(req,res,next){
    if(req.params.id){
        HoaDon.getHoaDonById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        HoaDon.getAllHoaDon(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/hoadon/create',function(req,res,next){
    HoaDon.addHoaDon(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/hoadon/delete/:id',function(req,res,next){
    HoaDon.deleteHoaDon(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/hoadon/update/:id',function(req,res,next){
    HoaDon.updateHoaDon(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router;