import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function Update() {
  const [nameCity, setNameCity] = useState("");
  const [imgCity, setImgCity] = useState("");

  const history = useHistory();
  let { id } = useParams();

  const [city, setCity] = useState([]);
  useEffect(() => {
    Axios.get("https://deploy-hotel-api.herokuapp.com/city/get/" + id).then(
      (res) => setCity(res.data)
    );
  }, []);

  const citySubmit = () => {
    Axios.put(`https://deploy-hotel-api.herokuapp.com/city/update/${id}`, {
      TenThanhPho: nameCity,
      ImageThanhPho: imgCity,
    }).then(() => {
      window.location.href = "/city";
    });
  };
  return (
    <div style={{ padding: "0 50px 0 50px" }}>
      <h3 style={{ margin: "10px 0 10px 0" }}>Cập Nhật Thành Phố</h3>
      <div className="form">
        <div className="form-group">
          <label>Tên Thành Phố: </label>
          <input
            type="text"
            className="form-control"
            name="nameCity"
            onChange={(e) => {
              setNameCity(e.target.value);
            }}
            placeholder={city.length == 0 ? "" : city.TenThanhPho}
          />
        </div>
        <div className="form-group">
          <label>Hình Ảnh Thành Phố: </label>
          <input
            type="text"
            className="form-control"
            name="imgCity"
            onChange={(e) => {
              setImgCity(e.target.value);
            }}
            placeholder={city.length == 0 ? "" : city.ImageThanhPho}
          />
        </div>
        <div className="form-group">
          <Button color="success" onClick={citySubmit}>
            Cập nhật
          </Button>
          <Button color="danger" onClick={() => history.push("/city")}>
            Hủy
          </Button>
        </div>
      </div>
    </div>
  );
}
