// const db=require('../config/config.js');
// var express=require('express');
// var router=express.Router();

// router.get("/hotel",function(req,res,next){
//     db.getHotel().then(result=>{res.send(result)}).catch(err=>{console.log(err);})
// })

// module.exports = router

var express=require('express');
var router=express.Router();
var Hotel=require('../config/hotel');

router.get("/hotel/get/:id?",function(req,res,next){
    if(req.params.id){
        Hotel.getHotelById(req.params.id,function(err,rows){
            if(err){res.json(err)}
            else{res.json(rows)}
        })
    }
    else{
        Hotel.getAllHotel(function(err,rows){
            err?res.json(err):res.json(rows)
        })
    }
})
router.get("/hotel/getbypartner/:id",function(req,res,next){
    Hotel.getHotelByUser(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(count);
        }
    });
})
router.post("/hotel/create",function(req,res,next){
    Hotel.addHotel(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
})

router.delete("/hotel/delete/:id",function(req,res,next){
    Hotel.deleteHotel(req.params.id,function(err,rows){
        err?res.json(err):res.json(rows)
    });
})

router.put("/hotel/update/:id",function(req,res,next){
    Hotel.updateHotel(req.params.id,req.body,function(err,rows){
        err?res.json(err):res.json(rows)
    })
})

module.exports=router