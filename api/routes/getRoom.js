var express=require('express');
var router=express.Router();
var Room=require('../config/room');

router.get("/room/get/:id?",function(req,res,next){
    if(req.params.id){
        Room.getRoomById(req.params.id,function(err,rows){
            if(err){res.json(err)}
            else{res.json(rows)}
        })
    }
    else{
        Room.getAllRoom(function(err,rows){
            err?res.json(err):res.json(rows)
        })
    }
})

router.get("/room/getbyhotel/:id?",function(req,res,next){
    Room.getRoomByHotel(req.params.id,function(err,rows){
        err?res.json(err):res.json(rows)
    })
})

router.post("/room/create",function(req,res,next){
    Room.addRoom(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
})

router.delete("/room/delete/:id",function(req,res,next){
    Room.deleteRoom(req.params.id,function(err,rows){
        err?res.json(err):res.json(rows)
    });
})

router.put("/room/update/:id",function(req,res,next){
    Room.updateRoom(req.params.id,req.body,function(err,rows){
        err?res.json(err):res.json(rows)
    })
})

module.exports=router