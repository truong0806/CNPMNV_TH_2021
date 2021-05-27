import React from "react";
import Router from "react";
import { Table,Button } from 'reactstrap';
import {useState,useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from "react-router";

function Index(){

  const history = useHistory();
  
  const [role,setRole]=useState([]);

  useEffect(()=>{
    Axios.get("https://deploy-hotel-api.herokuapp.com/role/get").then((response)=>{
    setRole(response.data)
  })},[])

  const addRole=()=>{
    history.push('/role/create');
  }

  const deleteRole=(id)=>{
    Axios.delete(`https://deploy-hotel-api.herokuapp.com/role/delete/${id}`).then(() => {
          setRole(role.filter(x=>x._id!=id))
        } 
    )
  }

  const updateRole=(id)=>{
    history.push(`/role/update/${id}`);
  }

  return (
    <div style={{padding:'0 50px 0 50px'}}>
      <h3 style={{margin:'10px 0 10px 0'}}>Tất Cả Quyền</h3>
      <Button color="info" onClick={addRole} style={{marginBottom:'10px'}}>Thêm Quyền</Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Mã Quyền</th>
            <th>Tên Quyền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            role.map(a=>
              <tr>
                <th>{a._id}</th>
                <td>{a.roleName}</td>
                <td style={{width:"115px"}}>
                    <Button color="success" onClick={()=>updateRole(a._id)} style={{width:'100%',marginBottom:'5px'}}>Cập nhật</Button>{' '}
                    <Button color="danger" onClick={() => deleteRole(a._id)} style={{width:'100%'}}>Xóa</Button>{' '}
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
