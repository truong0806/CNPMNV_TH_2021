const mongoose = require("mongoose");
var role = new mongoose.Schema({
  roleName: { type: String, required: true },
});

const RoleDb = mongoose.model("roles", role);

var account = new mongoose.Schema({
  Email: { type: String, required: true },
  TenTK: { type: String, required: true },
  Password: { type: String, required: true },
  Phone: { type: String, required: true },
  RoleId: { type: String, required: false },
});

const AccountDb = mongoose.model("taikhoans", account);

var city = new mongoose.Schema({
  TenThanhPho: { type: String, required: true },
  ImageThanhPho: { type: String, required: true },
});

const CityDb = mongoose.model("thanhphos", city);

var hotel = new mongoose.Schema({
  TenKhachSan: { type: String, required: true },
  DiaChi: { type: String, required: true },
  MoTa: { type: String, required: true },
  GiaToiThieu: { type: Number, required: true },
  ImageKhachSan: { type: String, required: true },
  TinhTrang: { type: String, required: true },
  MaThanhPho: { type: String, required: true },
  MaTaiKhoan: { type: String, required: true },
});

const HotelDb = mongoose.model("khachsans", hotel);

var room = new mongoose.Schema({
  TenPhong: { type: String, required: true },
  SoLuongNguoi: { type: Number, required: true },
  GiaPhong: { type: Number, required: true },
  SoLuongPhong: { type: Number, required: true },
  MoTa: { type: String, required: true },
  GiuongDon: { type: Number, required: true },
  GiuongDoi: { type: Number, required: true },
  ImagePhong: { type: String, required: true },
  MaKhachSan: { type: String, required: true },
});

const RoomDb = mongoose.model("phongs", room);
var donDat = new mongoose.Schema({
  NgayDatPhong: { type: Date, required: true },
  NgayTraPhong: { type: Date, required: true },
  Voucher: { type: String, required: false },
  TienDat: { type: Number, required: true },
  MaTK: { type: String, required: true },
  TenNguoiDat: { type: String, required: true },
  SoDienThoai: { type: String, required: true },
  Email: { type: String, required: true },
  MaPhong: { type: String, required: true },
  TrangThai: { type: String, required: true },
});

const DonDatDb = mongoose.model("dondatphongs", donDat);

var hoaDon = new mongoose.Schema({
  TenHoaDon: { type: String, required: true },
  TongHoaDon: { type: Number, required: true },
  NgayTaoHoaDon: { type: Date, required: true },
  MaDon: { type: String, required: true },
});

const HoaDonDb = mongoose.model("hoadons", hoaDon);

module.exports = {
  RoleDb,
  AccountDb,
  CityDb,
  HotelDb,
  RoomDb,
  DonDatDb,
  HoaDonDb,
};

