var { AccountDb } = require("./model");

var Account = {
  getAllUser: function (callback) {
    return AccountDb.find().then(callback);
  },
  getUserById: function (id, callback) {
    return AccountDb.findById(id).then(callback);
  },
  getCheckEmail: function (acc, callback) {
    return AccountDb.find({ Email: acc.Email }).then(callback);
  },
  getUserByEmail: function (email, callback) {
    return AccountDb.find({ Email: email }).then(callback);
  },
  addUser: function (account, callback) {
    const accDb = new AccountDb({
      Email: account.Email,
      TenTK: account.TenTK,
      Password: account.Password,
      Phone: account.Phone,
      RoleId: account.RoleId,
    });
    return accDb.save(accDb).then(callback);
  },
  deleteUser: function (id, callback) {
    return AccountDb.findByIdAndRemove(id).then(callback);
  },
  updateUser: function (id, account, callback) {
    return AccountDb.findByIdAndUpdate(
      id,
      {
        Email: account.Email,
        TenTK: account.TenTK,
        Password: account.Password,
        Phone: account.Phone,
        RoleId: account.RoleId,
      },
      {
        useFindAndModify: false,
      }
    ).then(callback);
  },
  checkUser: function (acc, callback) {
    return AccountDb.find({ Email: acc.Email, Password: acc.Password }).then(
      callback
    );
  },
};

module.exports = Account;
