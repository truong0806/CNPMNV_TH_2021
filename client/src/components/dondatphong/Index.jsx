import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import "../../css/DatPhong.css";
import DateTimePicker from "react-datetime-picker";
import Select from "react-select";
import { Button } from "react-bootstrap";

export default function Index() {
  let { id } = useParams();
  const [phong, setPhong] = useState([]);
  const [datphong, setDatPhong] = useState({
    NgayDatPhong: "",
    NgayTraPhong: "",
    Voucher: "",
    TienDat: 0,
    MaTK: "",
    TenNguoiDat: "",
    SoDienThoai: "",
    Email: "",
    MaPhong: "",
    TrangThai: "",
  });

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_USER_API}/checkmail/${localStorage
        .getItem("email")
        .toString()}`
    ).then((res) => {
      let idTK = res.data[0]._id;
      let ten = res.data[0].TenTK;
      let mail = res.data[0].Email;
      let phone = res.data[0].Phone;
      setDatPhong({
        ...datphong,
        MaTK: idTK,
        TenNguoiDat: ten,
        Email: mail,
        SoDienThoai: phone,
        Voucher: "",
        MaPhong: id,
        TrangThai: "Chưa xác nhận",
      });
    });
  }, []);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/room/get/${id}`).then((res) =>
      setPhong(res.data)
    );
  }, []);

  const [dayPicker, changeDayPicker] = useState(new Date());

  const [night, setNight] = useState(0);

  const onNight = (e) => {
    const dem = e.value;
    setNight(dem);
  };

  const option = [];
  for (var i = 1; i < 31; i++) {
    var day = {
      value: i,
      label: `${i} đêm`,
    };
    option.push(day);
  }

  const calDayReturn = () => {
    if (dayPicker != null) {
      var datePicker = dayPicker.getDate();
      var monthPicker = dayPicker.getMonth() + 1;
      var yearPicker = dayPicker.getFullYear();
      var dateReturn = datePicker + night;
      if (
        monthPicker == 1 ||
        monthPicker == 3 ||
        monthPicker == 5 ||
        monthPicker == 7 ||
        monthPicker == 8 ||
        monthPicker == 10 ||
        monthPicker == 12
      ) {
        if (dateReturn > 31) {
          dateReturn = dateReturn - 31;
          monthPicker += 1;
        }
      }
      if (
        monthPicker == 4 ||
        monthPicker == 6 ||
        monthPicker == 9 ||
        monthPicker == 11
      ) {
        if (dateReturn > 30) {
          dateReturn = dateReturn - 30;
          monthPicker += 1;
        }
      }
      if (monthPicker == 2) {
        if (yearPicker % 4 == 0) {
          if (dateReturn > 29) {
            dateReturn = dateReturn - 29;
            monthPicker += 1;
          }
        } else {
          if (dateReturn > 28) {
            dateReturn = dateReturn - 28;
            monthPicker += 1;
          }
        }
      }

      if (monthPicker > 12) {
        monthPicker = monthPicker - 12;
        yearPicker = yearPicker + 1;
      }
      const final =
        yearPicker +
        "/" +
        monthPicker.toString().padStart(2, "0") +
        "/" +
        dateReturn.toString().padStart(2, "0");
      return final;
    }
  };

  const [err, setErr] = useState({
    TenNguoiDat: "",
    Email: "",
    SoDienThoai: "",
    SoDem: "",
  });
  var ngayDat =
    dayPicker.getFullYear() +
    "/" +
    (dayPicker.getMonth()+1).toString().padStart(2, "0") +
    "/" +
    dayPicker.getDate().toString().padStart(2, "0");
  var ngayTra = calDayReturn();
  useEffect(() => {
    setDatPhong({
      ...datphong,
      NgayDatPhong: ngayDat,
      NgayTraPhong: ngayTra,
      TienDat: phong.length == 0 ? 0 : phong.GiaPhong * night,
    });
    console.log(datphong);
  }, [ngayDat, ngayTra]);
  const DatPhong = () => {
    if (night == 0) {
      setErr({ ...err, SoDem: "Hãy chọn số đêm!" });
    }
    if (
      datphong.TenNguoiDat != "" &&
      datphong.Email != "" &&
      datphong.SoDienThoai != "" &&
      datphong.NgayDatPhong != "" &&
      night != 0
    ) {
      Axios.post(
        `${process.env.REACT_APP_API_URL}/datphong/create`,
        datphong
      ).then(() => (window.location.href = "/"));
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (value == "") {
      setErr({ ...err, [name]: "Không được bỏ trống!" });
    } else {
      setErr({ ...err, [name]: "" });
    }
    setDatPhong({ ...datphong, [name]: value });
  };

  const OnFormatGia = (gia) => {
    gia = gia.toString();
    let split = gia.match(/.{1,1}/g);
    let format = [];
    if (split != null) {
      for (let i = split.length - 1; i >= 0; i--) {
        format.push(split[i]);
      }
    }
    let finalPriceFormat = "";
    for (let i = format.length - 1; i >= 0; i--) {
      finalPriceFormat += format[i];
      if (i % 3 == 0) {
        if (i != 0) {
          finalPriceFormat += ".";
        }
      }
    }
    return finalPriceFormat;
  };

  return (
    <div>
      <div className="row" id="roomrow1">
        <div className="col-12">
          <label id="travelokarow1">Traveloka</label>
        </div>
      </div>
      <div className="dprow2">
        <div id="roomrow2">
          <div className="row">
            <div className="col-12">
              <h4>Đặt phòng khách sạn</h4>
              <h6 id="row1h6">
                Điền thông tin người liên lạc và khách bên dưới
              </h6>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <h5>Thông tin của bạn</h5>
              <form id="thongtin">
                <div className="row">
                  <div className="col-12">
                    <label>Tên người liên hệ:</label>
                    <br />
                    <input
                      className="inputForm"
                      name="TenNguoiDat"
                      onChange={onChange}
                      value={datphong.TenNguoiDat}
                    ></input>
                    <br />
                    <label className="lblLuuY">
                      *Nhập tên như trên CMND/hộ chiếu (không dấu)
                    </label>
                    <label className="errFormDatPhong">{err.TenNguoiDat}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12"></div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label>Số di động:</label>
                    <br />
                    <input
                      className="inputForm"
                      name="SoDienThoai"
                      onChange={onChange}
                      value={datphong.SoDienThoai}
                    ></input>
                    <br />
                    <label className="lblLuuY">VD: 0901234567</label>
                    <label className="errFormDatPhong">{err.SoDienThoai}</label>
                  </div>
                  <div className="col-6">
                    <label>Email:</label>
                    <br />
                    <input
                      className="inputForm"
                      name="Email"
                      onChange={onChange}
                      value={datphong.Email}
                    ></input>
                    <br />
                    <label className="lblLuuY">VD: email@example.com</label>
                    <label className="errFormDatPhong">{err.Email}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <label>Ngày nhận phòng:</label>
                    <br />
                    <DateTimePicker
                      value={dayPicker}
                      onChange={changeDayPicker}
                      className="date_picker full-width"
                    ></DateTimePicker>
                  </div>
                  <div className="col-3">
                    <label>Số đêm:</label>
                    <br />
                    <Select options={option} onChange={onNight}></Select>
                  </div>
                  <div className="col-4">
                    <label>Ngày trả phòng:</label>
                    <br />
                    {/* <p>{calDayReturn()}</p> */}
                    <input readOnly value={calDayReturn()}></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5"></div>
                  <div className="col-3">
                    <label className="errFormDatPhong">{err.SoDem}</label>
                  </div>
                  <div className="col-4"></div>
                </div>
                <div className="row">
                  <div className="col-8"></div>
                  <div className="col-4">
                    <Button onClick={DatPhong} color="success">
                      Đặt phòng
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-4">
              <h4></h4>
              <div id="col4Room">
                <div className="row">
                  <div className="col-12">
                    <label>{phong.length == 0 ? "" : phong.TenPhong}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <img src={phong.length == 0 ? "" : phong.ImagePhong}></img>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <label>
                      {phong.length == 0 ? "" : phong.SoLuongNguoi} khách
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <label>
                      {phong.length != 0
                        ? phong.GiuongDon == 0
                          ? ""
                          : `${phong.GiuongDon} giường đơn`
                        : ""}
                    </label>
                    <label>
                      {phong.length != 0
                        ? phong.GiuongDoi == 0
                          ? ""
                          : `${phong.GiuongDoi} giường đôi`
                        : ""}
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <label id="col4GiaPhong">
                      {OnFormatGia(
                        phong.length == 0 ? "" : phong.GiaPhong * night
                      )}{" "}
                      VND
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
