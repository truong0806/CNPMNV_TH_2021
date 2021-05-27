var { RoleDb } = require("./model");

var Role = {
  getAllRole: function (callback) {
    return RoleDb.find().then(callback);
  },
  getRoleById: function (id, callback) {
    return RoleDb.find({ _id: id }).then(callback);
  },
  addRole: function (role, callback) {
    const roleDb = new RoleDb({ roleName: role.roleName });
    return roleDb.save(roleDb).then(callback);
  },
  deleteRole: function (id, callback) {
    return RoleDb.findByIdAndRemove(id).then(callback);
  },
  updateRole: function (id, role, callback) {
    return RoleDb.findByIdAndUpdate(
      id,
      { roleName: role.roleName },
      {
        useFindAndModify: false,
      }
    ).then(callback);
  },
};

module.exports = Role;
