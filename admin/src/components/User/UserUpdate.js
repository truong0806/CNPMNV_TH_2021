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
import Select from 'react-select'

export default function UserUpdate() {

  const [user, setUser] = useState({});

  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    Axios.get("https://deploy-hotel-api.herokuapp.com/account/get/" + id).then((res) =>
      setUser(res.data)
    );
  }, []);
  
  const userSubmit = () => {
      console.log(user)
      Axios.put(`https://deploy-hotel-api.herokuapp.com/account/update/${id}`,user).then(() => {
        window.location.href = "/user";
      });
  };
  
  const onChange=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
  }

  const options=[{value:null,label:'No Role'}]
  const [role,setRole]=useState([])
  useEffect(()=>{
    Axios.get("https://deploy-hotel-api.herokuapp.com/role/get").then(res=>{
      setRole(res.data)
    })
  },[])
  role.map(x=>{options.push({value:x._id,label:x.roleName})})

  const onSelect=e=>{
    setUser({...user,RoleId:e.value})
  }

  return (
    <div style={{ padding: "0 50px 0 50px" }}>
      <h3 style={{ margin: "10px 0 10px 0" }}>Cập Nhật Quyền</h3>
      <div className="form">
      <div className="form-group">
          <label>Tên tài khoản: </label>
          <input
            type="text"
            className="form-control"
            readOnly
            value={user.TenTK}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            className="form-control"
            readOnly
            value={user.Email}
          />
        </div>
        <div className="form-group">
          <label>Số điện thoại: </label>
          <input
            type="text"
            className="form-control"
            readOnly
            value={user.Phone}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="text"
            className="form-control"
            name="Password"
            value={user.Password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Role: </label>
          <Select options={options} onChange={onSelect}></Select>
        </div>
        <div className="form-group">
          <Button color="success" onClick={userSubmit}>
            Cập nhật
          </Button>
          <Button color="danger" onClick={() => history.push("/user")}>
            Hủy
          </Button>
        </div>
      </div>
    </div>
  );
}
