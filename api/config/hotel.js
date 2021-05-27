const { HotelDb } = require("./model");

var Hotel = {
  getAllHotel: function (callback) {
    return HotelDb.find().then(callback);
  },
  getHotelById: function (id, callback) {
    return HotelDb.findById(id).then(callback);
  },
  getHotelByUser: function (id, callback) {
    return HotelDb.find({ MaTaiKhoan: id }).then(callback);
  },
  addHotel: function (hotel, callback) {
    const hotelDb = new HotelDb({
      TenKhachSan: hotel.nameHotel,
      DiaChi: hotel.location,
      MoTa: hotel.description,
      GiaToiThieu: hotel.price,
      ImageKhachSan: hotel.image,
      TinhTrang: hotel.status,
      MaThanhPho: hotel.idCity,
      MaTaiKhoan: hotel.MaTK,
    });
    return hotelDb.save(hotelDb).then(callback);
  },
  deleteHotel: function (id, callback) {
    return HotelDb.findByIdAndRemove(id).then(callback);
  },
  updateHotel: function (id, hotel, callback) {
    return HotelDb.findByIdAndUpdate(
      id,
      {
        TenKhachSan: hotel.nameHotel,
        DiaChi: hotel.location,
        MoTa: hotel.description,
        GiaToiThieu: hotel.price,
        ImageKhachSan: hotel.image,
        TinhTrang: hotel.status,
        MaThanhPho: hotel.idCity,
        MaTaiKhoan: hotel.MaTK,
      },
      { useFindAndModify: false }
    ).then(callback);
  },
};
module.exports = Hotel;
