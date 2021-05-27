var { DonDatDb, HotelDb, RoomDb } = require("./model");
const Room = require("./room");

var DonDatPhong = {
  getAllDonDatPhong: function (callback) {
    return DonDatDb.find().then(callback);
  },
  getDonDatPhongById: function (id, callback) {
    return DonDatDb.findById(id).then(callback);
  },
  addDonDatPhong: function (don, callback) {
    const donDatDb = new DonDatDb({
      NgayDatPhong: don.NgayDatPhong,
      NgayTraPhong: don.NgayTraPhong,
      Voucher: don.Voucher,
      TienDat: don.TienDat,
      MaTK: don.MaTK,
      TenNguoiDat: don.TenNguoiDat,
      SoDienThoai: don.SoDienThoai,
      Email: don.Email,
      MaPhong: don.MaPhong,
      TrangThai: don.TrangThai,
    });
    return donDatDb.save(donDatDb).then(callback);
  },
  deleteDonDatPhong: function (id, callback) {
    return DonDatDb.findByIdAndRemove(id).then(callback);
  },
  updateDonDatPhong: function (id, don, callback) {
    return DonDatDb.findByIdAndUpdate(
      id,
      {
        NgayDatPhong: don.NgayDatPhong,
        NgayTraPhong: don.NgayTraPhong,
        Voucher: don.Voucher,
        TienDat: don.TienDat,
        MaTK: don.MaTK,
        TenNguoiDat: don.TenNguoiDat,
        SoDienThoai: don.SoDienThoai,
        Email: don.Email,
        MaPhong: don.MaPhong,
        TrangThai: don.TrangThai,
      },
      { useFindAndModify: false }
    ).then(callback);
  },
  xacNhanDon: function (id, body, callback) {
    return DonDatDb.findByIdAndUpdate(
      id,
      {
        TrangThai: body.TrangThai,
      },
      { useFindAndModify: false }
    ).then(callback);
  },
  getDonDatPhongByPartner: async function (id, callback) {
    const hotelId = await HotelDb.find({ MaTaiKhoan: id });
    var listHotelId = [];
    if (hotelId != null) {
      listHotelId = hotelId.map((x) => x._id);
    }
    const roomId = await RoomDb.find({ MaKhachSan: { $in: listHotelId } });
    var listRoomId = [];
    if (roomId != null) {
      listRoomId = roomId.map((x) => x._id);
    }
    const donDatDb = DonDatDb.find({ MaPhong: { $in: listRoomId } });
    return donDatDb.then(callback);
  },
};

module.exports = DonDatPhong;
