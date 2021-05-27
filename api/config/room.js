const { RoomDb } = require("./model");

var Room = {
  getAllRoom: function (callback) {
    return RoomDb.find().then(callback);
  },
  getRoomById: function (id, callback) {
    return RoomDb.findById(id).then(callback);
  },
  getRoomByHotel: function (id, callback) {
    return RoomDb.find({ MaKhachSan: id }).then(callback);
  },
  addRoom: function (room, callback) {
    const roomDb = new RoomDb({
      TenPhong: room.nameRoom,
      SoLuongNguoi: room.people,
      GiaPhong: room.price,
      SoLuongPhong: room.quantity,
      MoTa: room.description,
      GiuongDon: room.don,
      GiuongDoi: room.doi,
      ImagePhong: room.imgRoom,
      MaKhachSan: room.idHotel,
    });
    return roomDb.save(roomDb).then(callback);
  },
  deleteRoom: function (id, callback) {
    return RoomDb.findByIdAndRemove(id).then(callback);
  },
  updateRoom: function (id, room, callback) {
    return RoomDb.findByIdAndUpdate(
      id,
      {
        TenPhong: room.nameRoom,
        SoLuongNguoi: room.people,
        GiaPhong: room.price,
        SoLuongPhong: room.quantity,
        MoTa: room.description,
        GiuongDon: room.don,
        GiuongDoi: room.doi,
        ImagePhong: room.imgRoom,
        MaKhachSan: room.idHotel,
      },
      { useFindAndModify: false }
    ).then(callback);
  },
};
module.exports = Room;
