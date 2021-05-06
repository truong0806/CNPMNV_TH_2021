const db=require('./config');

var Room={
    getAllRoom:function(callback){
        return db.query("Select * from phong",callback);
    },
    getRoomById:function(id,callback){
        return db.query('Select * from phong where MaPhong=?',[id],callback)
    },
    getRoomByHotel:function(id,callback){
        return db.query('Select * from phong where MaKhachSan=?',[id],callback)
    },
    addRoom:function(room,callback){
        return db.query('Insert into phong(TenPhong,SoLuongNguoi,GiaPhong,SoLuongPhong,MoTa,GiuongDon,GiuongDoi,ImagePhong,MaKhachSan) values(?,?,?,?,?,?,?,?,?)',[
            room.nameRoom, room.people,room.price,
            room.quantity, room.description,room.don,room.doi, room.imgRoom, room.idHotel],callback)
    },
    deleteRoom:function(id,callback){
        return db.query("Delete from phong where MaPhong=?",[id],callback)
    },
    updateRoom:function(id,room,callback){
        return db.query("update phong set TenPhong=?,SoLuongNguoi=?,GiaPhong=?,SoLuongPhong=?,MoTa=?,GiuongDon=?,GiuongDoi=?,ImagePhong=?,MaKhachSan=? where MaPhong=?",
        [
            room.nameRoom, room.people,room.price,
            room.quantity, room.description,room.don,room.doi, room.imgRoom, room.idHotel,id
        ],callback)
    }

}
module.exports=Room