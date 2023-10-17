import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

export default function Index() {
  const [hotelList, setHotelList] = useState([]);
  const history = useHistory();
  const partnerId = localStorage.getItem("maTK");
  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_API_URL}/hotel/getbypartner/${partnerId}`
    ).then((resopne) => {
      setHotelList(resopne.data);
    });
  }, []);

  const deleteHotel = (id) => {
    Axios.delete(`${process.env.REACT_APP_API_URL}/hotel/delete/` + id).then(
      () => {
        setHotelList(hotelList.filter((x) => x._id != id));
      }
    );
  };

  const createHotel = () => {
    history.push("/hotel/create");
  };

  const updateHotel = (id) => {
    history.push("/hotel/update/" + id);
  };

  return (
    <div>
      <h3 style={{ margin: "10px 0 10px 0" }}>Tất Cả Khách Sạn</h3>
      <Button
        color="info"
        onClick={createHotel}
        style={{ marginBottom: "15px" }}
      >
        Thêm Khách Sạn
      </Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Mã Khách Sạn</th>
            <th>Tên Khách Sạn</th>
            <th>Địa Chỉ</th>
            <th>Mô Tả</th>
            <th>Giá Tối Thiểu</th>
            <th>Hình Ảnh Khách Sạn</th>
            <th>Tình Trạng</th>
            <th>Thành Phố</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {hotelList.map((hotel) => (
            <tr>
              <th>{hotel._id}</th>
              <td>{hotel.TenKhachSan}</td>
              <td>{hotel.DiaChi}</td>
              <td>{hotel.MoTa}</td>
              <td>{hotel.GiaToiThieu}</td>
              <td>
                <img
                  src={hotel.ImageKhachSan}
                  height="150px"
                  width="100%"
                ></img>
              </td>
              <td>{hotel.TinhTrang}</td>
              <td>{hotel.MaThanhPho}</td>
              <td style={{ width: "135px" }}>
                <Button
                  color="success"
                  onClick={() => updateHotel(hotel._id)}
                  style={{ width: "100%", marginBottom: "5px" }}
                >
                  Cập nhật
                </Button>{" "}
                <Button
                  color="info"
                  onClick={() => history.push(`/hotel/${hotel._id}/room`)}
                  style={{ width: "100%", marginBottom: "5px" }}
                >
                  Xem Phòng
                </Button>{" "}
                <Button
                  color="danger"
                  onClick={() => deleteHotel(hotel._id)}
                  style={{ width: "100%" }}
                >
                  Xóa
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
