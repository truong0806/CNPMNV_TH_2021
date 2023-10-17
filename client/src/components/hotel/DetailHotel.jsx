import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Header from "../component/Header";
import Nav from "../component/Nav";
import "../../css/DetailHotel.css";
import tienich from "../../images/tienich.png";
import { Button } from "react-bootstrap";

export default function DetailHotel() {
  let { id } = useParams();
  const history = useHistory();

  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/hotel/get/${id}`).then((res) =>
      setHotel(res.data)
    );
  }, []);

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
  const [room, setRoom] = useState([]);
  console.log("🚀 ~ file: DetailHotel.jsx:42 ~ DetailHotel ~ room:", room)
  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_API_URL}/room/getbyhotel/${id}`
    ).then((res) => setRoom(res.data));
  }, []);

  const datPhong = (idRoom) => {
    if (localStorage.getItem("email")) {
      history.push(`/datphong/${idRoom}`);
    } else history.push("/login");
  };

  return (
    <div className="detailHotelAll">
      <div className="head">
        <Header></Header>
        <Nav></Nav>
      </div>
      <div className="detailHotelInCity">
        <div className="item">
          <div className="row1">
            <div className="row">
              <div className="col-12">
                <label className="TenPhongDetail">
                  {hotel.length == 0 ? "" : hotel.TenKhachSan}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label className="DiaChiPhongDetail">
                  {hotel.length == 0 ? "" : hotel.DiaChi}
                </label>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <img
                  src={hotel.length == 0 ? "" : hotel.ImageKhachSan}
                  id="imageHotel"
                />
              </div>
              <div className="col-1"></div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-8">
                <label className="travelokagDetail">Traveloka</label>
              </div>
              <div className="giaPhongDetail col-4">
                <label>Giá phòng mỗi đêm từ</label>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <label></label>
              </div>
              <div className="giaPhongDetail col-4">
                <label className="giaDetail">
                  {OnFormatGia(hotel.length == 0 ? 0 : hotel.GiaToiThieu)}{" "}
                  VND
                </label>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="col-4">
              <p className="labelRow2">
                Xem ngay những đánh giá hàng đầu của khách hàng!
              </p>
              <p className="label2Row2">
                Từ những đánh giá có chọn lọc của chúng tôi, bạn sẽ có được mô
                tả chân thực nhất về nơi lưu trú này.
              </p>
            </div>
          </div>
          <div className="row3">
            <div className="col-12">
              <h5 className="labelRow3">Tiện nghi khách sạn</h5>
              <img src={tienich} id="row3img"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="RoomInHotel">
        {room.map((room) => (
          <div className="roomCard">
            <div className="row">
              <div className="col-12">
                <h5>{room.TenPhong}</h5>
              </div>
            </div>
            <div className="row" id="row1">
              <div className="col-5">
                <img src={room.ImagePhong} id="imageRoom"></img>
              </div>
              <div className="col-7">
                <div className="row">
                  <div className="col-4">
                    <label>
                      {room.GiuongDon == 0
                        ? ""
                        : `${room.GiuongDon} giường đơn`}
                    </label>
                    <label>
                      {room.GiuongDoi == 0
                        ? ""
                        : `${room.GiuongDoi} giường đôi`}
                    </label>
                  </div>
                  <div className="col-4">
                    <label>{room.SoLuongNguoi} khách</label>
                  </div>
                  <div className="col-4" id="phongtrong">
                    <label>({room.SoLuongPhong} phòng trống)</label>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-8">
                    <label>{room.MoTa}</label>
                  </div>
                  <div className="col-4" id="giaPhong">
                    <label id="pGiaPhong">
                      {OnFormatGia(room.GiaPhong)} VND
                    </label>
                    <p id="pDem">/phòng /đêm</p>
                    <Button
                      id="btnDatPhong"
                      onClick={() => datPhong(room._id)}
                    >
                      Đặt ngay
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
