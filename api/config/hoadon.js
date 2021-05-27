var { HoaDonDb } = require("./model");

var HoaDon = {
  getAllHoaDon: function (callback) {
    return HoaDonDb.find().then(callback);
  },
  getHoaDonById: function (id, callback) {
    return HoaDonDb.findById(id).then(callback);
  },
  addHoaDon: function (bill, callback) {
    const hoaDonDb = new HoaDonDb({
      TenHoaDon: bill.TenHoaDon,
      TongHoaDon: bill.TongHoaDon,
      NgayTaoHoaDon: bill.NgayTaoHoaDon,
      MaDon: bill.MaDon,
    });
    return hoaDonDb.save(hoaDonDb).then(callback);
  },
  deleteHoaDon: function (id, callback) {
    return HoaDonDb.findByIdAndRemove(id).then(callback);
  },
  updateHoaDon: function (id, bill, callback) {
    return HoaDonDb.findByIdAndUpdate(
      id,
      {
        TenHoaDon: bill.TenHoaDon,
        TongHoaDon: bill.TongHoaDon,
        NgayTaoHoaDon: bill.NgayTaoHoaDon,
        MaDon: bill.MaDon,
      },
      { useFindAndModify: false }
    ).then(callback);
  },
};

module.exports = HoaDon;
