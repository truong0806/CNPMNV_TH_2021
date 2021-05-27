import React,{useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
import Axios from 'axios'
import {Button} from 'reactstrap'
import Select from 'react-select'

export default function HotelUpdate() {

    let {id}=useParams();

    const [hotel,setHotel]=useState([])
    useEffect(()=>{
        Axios.get("https://deploy-hotel-api.herokuapp.com/hotel/get/"+id).then(
            res=>setHotel(res.data)
        )
    },[])

    const [nameHotel,setNameHotel]=useState("");
    const [price,setPrice]=useState("");
    const [location,setLocation]=useState("");
    const [image,setImage]=useState("");
    const [description,setDescription]=useState("");
    const [status,setStatus]=useState("");
    const [idCity,setIdCity]=useState("");

    const history=useHistory();

    const updateHotel=()=>{
        Axios.put("https://deploy-hotel-api.herokuapp.com/hotel/update/"+id,{
            nameHotel:nameHotel,
            location:location,
            description:description,
            price:price,
            image:image,
            status:status,
            idCity:idCity, 
        }).then(()=>{
            window.location.href="/hotel"
        });
    }

    const [city,setCity]=useState([])
    const option=[]

    useEffect(() => {
        Axios.get("https://deploy-hotel-api.herokuapp.com/city/get").then(
            res=>setCity(res.data)
        )
    }, [])

    city.map(city=>{
        option.push({
            value:city._id,
            label:city.TenThanhPho
        })
    })

    return (
        <div style={{padding:'0 50px 0 50px'}}>
            <h3 style={{margin:'10px 0 10px 0'}}>Cập Nhật Khách Sạn</h3>
            <div className="form">
                <div className="form-group">
                    <label>Tên Khách Sạn: </label>
                    <input type="text" className="form-control" name="nameHotel" placeholder={hotel[0]==null?"":hotel[0].TenKhachSan}
                    onChange={(e)=>{setNameHotel(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Địa Chỉ: </label>
                    <input type="text" className="form-control" name="location" placeholder={hotel[0]==null?"":hotel[0].DiaChi}
                        onChange={(e)=>{setLocation(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Giá Tối Thiểu: </label>
                    <input type="number" className="form-control" name="price" min="0" placeholder={hotel[0]==null?"":hotel[0].GiaToiThieu}
                    onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Hình Ảnh Khách Sạn: </label>
                    <input type="text" className="form-control" name="image" placeholder={hotel[0]==null?"":hotel[0].ImageKhachSan}
                    onChange={(e)=>{setImage(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Mô Tả: </label>
                    <input type="text" className="form-control" name="description" placeholder={hotel[0]==null?"":hotel[0].MoTa}
                    onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Tình Trạng: </label>
                    <input type="text" className="form-control" name="status" placeholder={hotel[0]==null?"":hotel[0].TinhTrang}
                    onChange={(e)=>{setStatus(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Thành Phố: </label>
                    <Select options={option} name="idCity" onChange={(e)=>{setIdCity(e.value)}}  placeholder="Chọn thành phố..."></Select>
                </div>
                <div className="form-group">
                    <Button color="success" onClick={updateHotel}>Cập nhật</Button>
                    <Button color="danger" onClick={()=>history.push('/hotel')}>Hủy</Button>
                </div>
            </div>
        </div>
    )
}
