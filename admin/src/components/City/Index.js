import React from "react";
import Router from "react";
import { Table,Button } from 'reactstrap';
import {useState,useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from "react-router";

function Index(){
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: [] };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/city/get")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       this.setState({ apiResponse: res})
  //     });
  // }

  // componentDidMount() {
  //   this.callAPI();
  // }

  const history = useHistory();
  
  const [cityList,setCityList]=useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:9000/city/get").then((response)=>{
    setCityList(response.data)
  })},[])

  const addCity=()=>{
    history.push('/city/create');
  }

  const deleteCity=(id)=>{
    Axios.delete(`http://localhost:9000/city/delete/${id}`).then(() => {
          setCityList(cityList.filter(x=>x.MaThanhPho!=id))
        } 
    )
  }

  const updateCity=(id)=>{
    history.push(`/city/update/${id}`);
  }

  return (
    <div style={{padding:'0 50px 0 50px'}}>
      <h3 style={{margin:'10px 0 10px 0'}}>Tất Cả Thành Phố</h3>
      <Button color="info" onClick={addCity} style={{marginBottom:'10px'}}>Thêm Thành Phố</Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Mã Thành Phố</th>
            <th>Tên Thành Phố</th>
            <th>Hình Ảnh Thành Phố</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cityList.map(a=>
              <tr>
                <th>{a.MaThanhPho}</th>
                <td>{a.TenThanhPho}</td>
                <td>{a.ImageThanhPho}</td>
                <td style={{width:"115px"}}><Button color="success" onClick={()=>updateCity(a.MaThanhPho)}>Cập nhật</Button>{' '}</td>
                <td><Button color="danger" onClick={() => deleteCity(a.MaThanhPho)}>Xóa</Button>{' '}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}
export default Index;
