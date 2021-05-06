var db = require('./config');

var Role={
	getAllRole:function(callback){
		return db.query("Select * from role",callback);
	},
	getRoleById:function(id,callback){
		return db.query("select * from role where roleId=?",[id],callback);
	},
	addRole:function(role,callback){
		return db.query("Insert into role(roleName) values(?)"
        ,[role.roleName],callback);
	},
	deleteRole:function(id,callback){
		return db.query("delete from role where roleId=?",[id],callback);
	},
	updateRole:function(id,role,callback){
		return db.query("update role set roleName=? where roleId=?"
        ,[role.roleName,id],callback);
	}
};

module.exports=Role