import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Select from "react-select";

export default function HotelCreate() {
  const [nameHotel, setNameHotel] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [idCity, setIdCity] = useState("");

  const history = useHistory();

  const createHotel = () => {
    Axios.post("https://deploy-hotel-api.herokuapp.com/hotel/create", {
      nameHotel: nameHotel,
      location: location,
      description: description,
      price: price,
      image: image,
      status: status,
      idCity: idCity,
    }).then((window.location.href = "/hotel"));
  };

  const [city, setCity] = useState([]);
  const option = [];

  useEffect(() => {
    Axios.get("https://deploy-hotel-api.herokuapp.com/city/get").then((res) =>
      setCity(res.data)
    );
  }, []);

  city.map((city) => {
    option.push({
      value: city._id,
      label: city.TenThanhPho,
    });
  });
  return (
    <div style={{ padding: "0 50px 0 50px" }}>
      <h3 style={{ margin: "10px 0 10px 0" }}>Thêm Khách Sạn Mới</h3>
      <div className="form">
        <div className="form-group">
          <label>Tên Khách Sạn: </label>
          <input
            type="text"
            className="form-control"
            name="nameHotel"
            onChange={(e) => {
              setNameHotel(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Địa Chỉ: </label>
          <input
            type="text"
            className="form-control"
            name="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Giá Tối Thiểu: </label>
          <input
            type="number"
            className="form-control"
            name="price" min="0"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Hình Ảnh: </label>
          <input
            type="text"
            className="form-control"
            name="image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Mô Tả: </label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Tình Trạng: </label>
          <input
            type="text"
            className="form-control"
            name="status"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Thành Phố: </label>
          <Select
            options={option}
            name="idCity"
            onChange={(e) => {
              setIdCity(e.value);
            }}
            placeholder="Chọn thành phố..."
          ></Select>
        </div>
        <div className="form-group">
          <Button color="success" onClick={createHotel}>
            Thêm
          </Button>
          <Button color="danger" onClick={() => history.push("/hotel")}>
            Hủy
          </Button>
        </div>
      </div>
    </div>
  );
}
