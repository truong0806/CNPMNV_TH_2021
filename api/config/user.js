var db = require('./config');

var Account={
	getAllUser:function(callback){
		return db.query("Select * from taikhoan",callback);
	},
	getUserById:function(id,callback){
		return db.query("select * from taikhoan where MaTK=?",[id],callback);
	},
	getCheckEmail:function(acc,callback){
		return db.query("select * from taikhoan where Email=?",[acc.Email],callback);
	},
	getUserByEmail:function(email,callback){
		return db.query("select * from taikhoan where Email=?",[email],callback);
	},
	addUser:function(account,callback){
		return db.query("Insert into taikhoan(Email,TenTK,Password,Phone,RoleId) values(?,?,?,?,?)",[account.Email,account.TenTK,account.Password,account.Phone,account.RoleId],callback);
	},
	deleteUser:function(id,callback){
		return db.query("delete from taikhoan where MaTK=?",[id],callback);
	},
	updateUser:function(id,account,callback){
		return db.query("update taikhoan set Email=?,TenTK=?,Password=?,Phone=?,RoleId=? where MaTK=?",[account.Email,account.TenTK,account.Password,account.Phone,account.RoleId,id],callback);
	},
    checkUser:function(acc,callback){
        return db.query("select * from taikhoan where Email=? and Password=?",[acc.Email,acc.Password],callback)
    }
};

module.exports=Account