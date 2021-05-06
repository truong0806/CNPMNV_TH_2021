const db=require('./config');

var Hotel={
    getAllHotel:function(callback){
        return db.query("Select * from khachsan",callback);
    },
    getHotelById:function(id,callback){
        return db.query('Select * from khachsan where MaKhachSan=?',[id],callback)
    },
    getHotelByUser:function(id,callback){
        return db.query('Select * from khachsan where MaTK=?',[id],callback)
    },
    addHotel:function(hotel,callback){
        return db.query('Insert into khachsan(TenKhachSan,DiaChi,MoTa,GiaToiThieu,ImageKhachSan,TinhTrang,MaThanhPho,MaTK) values(?,?,?,?,?,?,?,?)',[
            hotel.nameHotel, hotel.location,
            hotel.description,hotel.price, hotel.image, hotel.status, hotel.idCity,hotel.MaTK],callback)
    },
    deleteHotel:function(id,callback){
        return db.query("Delete from khachsan where MaKhachSan=?",[id],callback)
    },
    updateHotel:function(id,hotel,callback){
        return db.query("update khachsan set TenKhachSan=?,DiaChi=?,MoTa=?,GiaToiThieu=?,ImageKhachSan=?,TinhTrang=?,MaThanhPho=?,MaTK=? where MaKhachSan=?",
        [
            hotel.nameHotel, hotel.location,
            hotel.description,hotel.price, hotel.image, hotel.status, hotel.idCity,hotel.MaTK,id
        ],callback)
    }

}
module.exports=Hotel