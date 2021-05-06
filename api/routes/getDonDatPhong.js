var express = require('express');

var router = express.Router();

var DonDatPhong = require('../config/dondatphong');
router.get('/datphong/get/:id?',function(req,res,next){
    if(req.params.id){
        DonDatPhong.getDonDatPhongById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        DonDatPhong.getAllDonDatPhong(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/datphong/create',function(req,res,next){
    DonDatPhong.addDonDatPhong(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/datphong/delete/:id',function(req,res,next){
    DonDatPhong.deleteDonDatPhong(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/datphong/update/:id',function(req,res,next){
    DonDatPhong.updateDonDatPhong(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

router.put('/datphong/xacnhan/:id',function(req,res,next){
    DonDatPhong.xacNhanDon(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

router.get('/datphong/getbypartner/:id',function(req,res,next){
    DonDatPhong.getDonDatPhongByPartner(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(count);
        }
    });
});

module.exports=router;