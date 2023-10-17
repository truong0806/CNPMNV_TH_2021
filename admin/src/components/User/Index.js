import React from "react";
import Router from "react";
import { Table,Button } from 'reactstrap';
import {useState,useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from "react-router";

function Index(){

  const history = useHistory();
  
  const [user,setUser]=useState([]);
  console.log("🚀 ~ file: Index.js:13 ~ Index ~ user:", user)

  useEffect(()=>{
    Axios.get(`${process.env.REACT_APP_USER_API}/get`).then((response)=>{
    setUser(response.data)
  })},[])

  const deleteUser=(id)=>{
    Axios.delete(`${process.env.REACT_APP_USER_API}/delete/${id}`).then(() => {
          setUser(user.filter(x=>x._id!=id))
        } 
    )
  }

  const updateUser=(id)=>{
    history.push(`/user/update/${id}`);
  }

  return (
    <div style={{padding:'0 50px 0 50px'}}>
      <h3 style={{margin:'10px 0 10px 0'}}>Tất Cả Tài Khoản</h3>
      <Table bordered>
        <thead>
          <tr>
            <th>Mã Tài Khoản</th>
            <th>Tên Tài Khoản</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            user.map(a=>
              <tr>
                <th>{a._id}</th>
                <td>{a.TenTK}</td>
                <td>{a.Email}</td>
                <td>{a.Password}</td>
                <td>{a.Phone}</td>
                <td>{a.RoleId}</td>
                <td style={{width:"115px"}}>
                    <Button color="success" onClick={()=>updateUser(a._id)} style={{width:'100%',marginBottom:'5px'}}>Cập nhật</Button>{' '}
                    <Button color="danger" onClick={() => deleteUser(a._id)} style={{width:'100%'}}>Xóa</Button>{' '}
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}
export default Index;
