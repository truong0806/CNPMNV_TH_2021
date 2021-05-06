var db = require('./config');

var DonDatPhong={
	getAllDonDatPhong:function(callback){
		return db.query("Select * from dondatphong",callback);
	},
	getDonDatPhongById:function(id,callback){
		return db.query("select * from dondatphong where MaDon=?",[id],callback);
	},
	addDonDatPhong:function(don,callback){
		return db.query("Insert into dondatphong(NgayDatPhong,NgayTraPhong,Voucher,TienDat,MaTK,TenNguoiDat,SoDienThoai,Email,MaPhong,TrangThai) values(?,?,?,?,?,?,?,?,?,?)"
        ,[don.NgayDatPhong,don.NgayTraPhong,don.Voucher,don.TienDat,don.MaTK,don.TenNguoiDat,don.SoDienThoai,don.Email,don.MaPhong,don.TrangThai],callback);
	},
	deleteDonDatPhong:function(id,callback){
		return db.query("delete from dondatphong where MaDon=?",[id],callback);
	},
	updateDonDatPhong:function(id,don,callback){
		return db.query("update dondatphong set NgayDatPhong=?,NgayTraPhong=?,Voucher=?,TienDat=?,MaTK=?,TenNguoiDat=?,SoDienThoai=?,Email=?,MaPhong=?,TrangThai=? where MaDon=?"
        ,[don.NgayDatPhong,don.NgayTraPhong,don.Voucher,don.TienDat,don.MaTK,don.TenNguoiDat,don.SoDienThoai,don.Email,don.MaPhong,don.TrangThai,id],callback);
	},
	xacNhanDon:function(id,body,callback){
		return db.query("update dondatphong set TrangThai=? where MaDon=?",[body.TrangThai,id],callback);
	},
	getDonDatPhongByPartner:function(id,callback){
		return db.query("select * from dondatphong where MaPhong IN(select MaPhong from phong where MaKhachSan in(select MaKhachSan from khachsan where MaTK = ?))",[id],callback);
	}
};

module.exports=DonDatPhong