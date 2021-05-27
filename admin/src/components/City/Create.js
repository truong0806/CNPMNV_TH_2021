import React, { Component } from 'react';
import {useState,useEffect} from 'react'
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Create() {

    const [nameCity,setNameCity]= useState("");
    const [imgCity,setImgCity]=useState("");

    const history = useHistory();

    const citySubmit=()=>{
        Axios.post('https://deploy-hotel-api.herokuapp.com/city/create',{
            TenThanhPho:nameCity,
            ImageThanhPho:imgCity
        }).then(()=>{
            window.location.href="/city"
        })
    }
    return (
        <div style={{padding:'0 50px 0 50px'}}>
            <h3 style={{margin:'10px 0 10px 0'}}>Thêm Thành Phố Mới</h3>
            <div className="form">
                <div className="form-group">
                    <label>Tên Thành Phố: </label>
                    <input type="text" className="form-control" name="nameCity" onChange={(e)=>{
                        setNameCity(e.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label>Hình Ảnh Thành Phố: </label>
                    <input type="text" className="form-control" name="imgCity" onChange={(e)=>{
                        setImgCity(e.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <Button color="success" onClick={citySubmit}>Thêm</Button>
                    <Button color="danger" onClick={()=>history.push('/city')}>Hủy</Button>
                </div>
            </div>
        </div>
    )
}