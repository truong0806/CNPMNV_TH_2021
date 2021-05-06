var db = require('./config');

var HoaDon={
	getAllHoaDon:function(callback){
		return db.query("Select * from hoadon",callback);
	},
	getHoaDonById:function(id,callback){
		return db.query("select * from hoadon where MaHoaDon=?",[id],callback);
	},
	addHoaDon:function(bill,callback){
		return db.query("Insert into hoadon(TenHoaDon,TongHoaDon,NgayTaoHoaDon,MaDon) values(?,?,?,?)"
        ,[bill.TenHoaDon,bill.TongHoaDon,bill.NgayTaoHoaDon,bill.MaDon],callback);
	},
	deleteHoaDon:function(id,callback){
		return db.query("delete from hoadon where MaHoaDon=?",[id],callback);
	},
	updateHoaDon:function(id,bill,callback){
		return db.query("update hoadon set TenHoaDon=?,TongHoaDon=?,NgayTaoHoaDon=?,MaDon=? where MaHoaDon=?"
        ,[bill.TenHoaDon,bill.TongHoaDon,bill.NgayTaoHoaDon,bill.MaDon,id],callback);
	}
};

module.exports=HoaDon