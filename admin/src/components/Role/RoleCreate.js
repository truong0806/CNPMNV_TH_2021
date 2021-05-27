import React, { Component } from 'react';
import {useState,useEffect} from 'react'
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function RoleCreate() {

    const [roleName,setRoleName]= useState("");

    const history = useHistory();

    const [check,setCheck]=useState([])
    useEffect(()=>{
        Axios.get("https://deploy-hotel-api.herokuapp.com/role/get").then(res=>setCheck(res.data))
    },[])

    const [err,setErr]=useState({RoleName:''})
    const roleSubmit=()=>{
        const checkRole=check.find(x=>x.roleName==roleName)
        if(checkRole!=undefined)
        {
            setErr({RoleName:'Quyền này đã tồn tại!'})
        }
        else
        {
            Axios.post('https://deploy-hotel-api.herokuapp.com/role/create',{
                roleName:roleName,
            }).then(()=>{
               window.location.href="/role"
            })
        }  
    }
    return (
        <div style={{padding:'0 50px 0 50px'}}>
            <h3 style={{margin:'10px 0 10px 0'}}>Thêm Quyền Mới</h3>
            <div className="form">
                <div className="form-group">
                    <label>Tên Quyền: </label>
                    <input type="text" className="form-control" name="roleName" onChange={(e)=>{
                        setRoleName(e.target.value)
                    }}/>
                    <label style={{color:'red'}}>{err.RoleName}</label>
                </div>
                <div className="form-group">
                    <Button color="success" onClick={roleSubmit}>Thêm</Button>
                    <Button color="danger" onClick={()=>history.push('/role')}>Hủy</Button>
                </div>
            </div>
        </div>
    )
}