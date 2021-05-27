import React, { useState, useEffect } from "react";
import "../../css/Form.css";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Select from "react-select";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import { Button } from "reactstrap";

export default function Form() {
  const [form, setForm] = useState({
    location: "",
    dayRent: "",
    nightStay: 0,
    dayReturn: "",
    adult: 1,
    kid: 0,
    room: 1,
  });

  const onNight = (e) => {
    const night = e.value;
    setForm({ ...form, nightStay: night });
  };

  const onLocation = (e) => {
    const location = e.value;
    setForm({ ...form, location: location });
  };

  const onChangeForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: parseInt(value) });
  };

  const [dayPicker, changeDayPicker] = useState(new Date());

  const subitForm = (e) => {
    e.preventDefault();
    setForm({ ...form, dayReturn: calDayReturn() });
    console.log(form);
  };

  const calDayReturn = () => {
    if (dayPicker != null) {
      var datePicker = dayPicker.getDate();
      var monthPicker = dayPicker.getMonth() + 1;
      var yearPicker = dayPicker.getFullYear();
      var dateReturn = datePicker + form.nightStay;
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
      const final = dateReturn + "/" + monthPicker + "/" + yearPicker;
      return final;
    }
  };
  const option = [];
  for (var i = 1; i < 31; i++) {
    var day = {
      value: i,
      label: `${i} đêm`,
    };
    option.push(day);
  }

  //Get city
  const [city, setCity] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/city/get")
      .then((res) => setCity(res.data));
  }, []);

  const cityOption = [];
  city.map((city) =>
    cityOption.push({ value: city._id, label: city.TenThanhPho })
  );

  //Khach Phong
  // var [hideForm, setHiddenForm] = useState(true);
  const showForm = () => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("hiddenForm").style.display = "block";
  };
  const onHide = () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("hiddenForm").style.display = "none";
  };

  return (
    <div className="border">
      <form action="" onSubmit={subitForm}>
        <div className="form-group" onClick={onHide}>
          <label htmlFor="" style={{ marginTop: -50 }}>
            <a href="/">Khách sạn xem gần đây</a>
          </label>
        </div>
        <div className="form-group" onClick={onHide}>
          <div className="row">
            <div className="col-12">
              <label for="exampleInputEmail1">Thành phố, địa điểm:</label>
              <Select
                options={cityOption}
                placeholder="Thành phố, địa điểm"
                onChange={onLocation}
              ></Select>
            </div>
          </div>
        </div>
        <div className="row" onClick={onHide}>
          <div className="col-4">
            <label>Ngày nhận phòng:</label>
            <br />
            <DateTimePicker
              value={dayPicker}
              onChange={changeDayPicker}
              className="date_picker full-width"
            ></DateTimePicker>
          </div>
          <div className="col-4">
            <label>Số đêm:</label>
            <br />
            <Select options={option} onChange={onNight}></Select>
          </div>
          <div className="col-4">
            <label>Ngày trả phòng:</label>
            <br />
            <p>{calDayReturn()}</p>
          </div>
        </div>
        <div className="row d-flex align-items-end">
          <div className="col-8">
            <label onClick={onHide}>Khách và phòng:</label>
            <input
              type="text"
              class="form-control"
              placeholder={
                form.adult +
                " Người lớn, " +
                form.kid +
                " Trẻ em, " +
                form.room +
                " phòng"
              }
              onFocus={showForm}
            />
            <form id="hiddenForm">
              <div className="row">
                <div className="col-8">Người lớn</div>
                <div className="col-4">
                  <input
                    type="number"
                    placeholder="1"
                    min="0"
                    name="adult"
                    onChange={onChangeForm}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-8">Trẻ em</div>
                <div className="col-4">
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    name="kid"
                    onChange={onChangeForm}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-8">Phòng</div>
                <div className="col-4">
                  <input
                    type="number"
                    placeholder="1"
                    min="0"
                    name="room"
                    onChange={onChangeForm}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-9"></div>
                <div className="col-3">
                  <Button onClick={onHide}>Hoàn thành</Button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" id="btn">
              <span style={{ fontWeight: "500" }}>Tìm khách sạn</span>
            </button>
          </div>
        </div>
        {/* <div className="row">
          <div
            class="form-group form-check"
            style={{ paddingLeft: "36px", marginTop: "10px" }}
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Tôi đi công tác
            </label>
          </div>
        </div> */}
        <br />
        <div className="form-group" onClick={onHide}>
          <label htmlFor="" className="last-row" style={{ marginTop: -50 }}>
            <a href="/">Thanh toán khi nhận phòng</a>
          </label>
        </div>
      </form>
    </div>
  );
}
