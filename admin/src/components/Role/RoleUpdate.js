import React, { Component } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import { Button } from "reactstrap";
import queryString from "query-string";

export default function Update() {
  const [roleName, setRoleName] = useState("");

  const history = useHistory();
  let { id } = useParams();

//   const [role, setRole] = useState([]);
  useEffect(() => {
    Axios.get("https://deploy-hotel-api.herokuapp.com/role/get/" + id).then((res) =>
      setRoleName(res.data[0].roleName)
    );
  }, []);

  const [check, setCheck] = useState([]);
  useEffect(() => {
    Axios.get("https://deploy-hotel-api.herokuapp.com/role/get").then((res) =>
      setCheck(res.data)
    );
  }, []);

  const [err, setErr] = useState({ RoleName: "" });
  const roleSubmit = () => {
    const checkRole = check.find((x) => x.roleName == roleName);
    if (checkRole != undefined) {
      setErr({ RoleName: "Quyền này đã tồn tại!" });
    } else {
      Axios.put(`https://deploy-hotel-api.herokuapp.com/role/update/${id}`, {
        roleName: roleName,
      }).then(() => {
        window.location.href = "/role";
      });
    }
  };
  return (
    <div style={{ padding: "0 50px 0 50px" }}>
      <h3 style={{ margin: "10px 0 10px 0" }}>Cập Nhật Quyền</h3>
      <div className="form">
        <div className="form-group">
          <label>Tên Quyền: </label>
          <input
            type="text"
            className="form-control"
            name="roleName"
            onChange={(e) => {
              setRoleName(e.target.value);
            }}
            // placeholder={role.length == 0 ? "" : role[0].roleName}
            value={roleName}
          />
           <label style={{color:'red'}}>{err.RoleName}</label>
        </div>
        <div className="form-group">
          <Button color="success" onClick={roleSubmit}>
            Cập nhật
          </Button>
          <Button color="danger" onClick={() => history.push("/role")}>
            Hủy
          </Button>
        </div>
      </div>
    </div>
  );
}
