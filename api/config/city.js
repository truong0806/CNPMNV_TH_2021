var db = require('./config');

var City={
	getAllCity:function(callback){
		return db.query("Select * from thanhpho",callback);
	},
	getCityById:function(id,callback){
		return db.query("select * from thanhpho where MaThanhPho=?",[id],callback);
	},
	addCity:function(city,callback){
		return db.query("Insert into thanhpho(TenThanhPho,ImageThanhPho) values(?,?)",[city.nameCity,city.imgCity],callback);
	},
	deleteCity:function(id,callback){
		return db.query("delete from thanhpho where MaThanhPho=?",[id],callback);
	},
	updateCity:function(id,city,callback){
		return db.query("update thanhpho set TenThanhPho=?,ImageThanhPho=? where MaThanhPho=?",[city.nameCity,city.imgCity,id],callback);
	}
};

module.exports=City