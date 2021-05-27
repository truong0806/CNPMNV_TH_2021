import React,{useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
import Axios from 'axios'
import {Button} from 'reactstrap'

export default function HotelUpdate() {

    let {id}=useParams();
    let {idHotel}=useParams();

    const [room,setRoom]=useState({
        tenPhong:'',
        soLuongNguoi:1,
        giaPhong:0,
        soLuongPhong:1,
        moTa:'',
        giuongDon:0,
        giuongDoi:0,
        imgPhong:'',
        idHotel:idHotel,
    })

    const [updateRoom,setUpdateRoom]=useState([])
    useEffect(()=>{
        Axios.get("https://deploy-hotel-api.herokuapp.com/room/get/"+id).then(
            res=>setUpdateRoom(res.data)
        )
    },[])

    const history=useHistory();

    const updateHotel=()=>{
        Axios.put("https://deploy-hotel-api.herokuapp.com/room/update/"+id,{
            nameRoom:room.tenPhong,
            people:room.soLuongNguoi,
            price:room.giaPhong,
            quantity:room.soLuongPhong,
            description:room.moTa,
            don:room.giuongDon,
            doi:room.giuongDoi,
            imgRoom:room.imgPhong,
            idHotel:room.idHotel
        }).then(()=>{
            window.location.href=`/hotel/${idHotel}/room`
        });
    }
    const onChange=(e)=>{
        const {name,value}=e.target
        setRoom({...room,[name]:value})
    }

    return (
        <div style={{padding:'0 50px 0 50px'}}>
            <h3 style={{margin:'10px 0 10px 0'}}>Cật Nhật Phòng</h3>
            <div className="form">
                <div className="form-group">
                    <label>Tên Phòng: </label>
                    <input type="text" className="form-control" name="tenPhong" onChange={onChange} 
                    placeholder={updateRoom.length==0?"":updateRoom[0].TenPhong}/>
                </div>
                <div className="form-group">
                    <label>Số Lượng Người: </label>
                    <input type="number" className="form-control" name="soLuongNguoi" onChange={onChange}
                     placeholder={updateRoom.length==0?0:updateRoom[0].SoLuongNguoi} min="1"/>
                </div>
                <div className="form-group">
                    <label>Giá Phòng: </label>
                    <input type="number" className="form-control" name="giaPhong"  onChange={onChange}
                    placeholder={updateRoom.length==0?0:updateRoom[0].GiaPhong} min="0"/>
                </div>
                <div className="form-group">
                    <label>Số Lượng Phòng: </label>
                    <input type="number" className="form-control" name="soLuongPhong" onChange={onChange}
                    placeholder={updateRoom.length==0?0:updateRoom[0].SoLuongPhong} min="1"/>
                </div>
                <div className="form-group">
                    <label>Mô Tả Phòng: </label>
                    <input type="text" className="form-control" name="moTa"  onChange={onChange}
                    placeholder={updateRoom.length==0?"":updateRoom[0].MoTa}/>
                </div>
                <div className="form-group">
                    <label>Giường Đơn: </label>
                    <input type="number" className="form-control" name="giuongDon"  onChange={onChange}
                    placeholder={updateRoom.length==0?"":updateRoom[0].GiuongDon} min="0"/>
                </div>
                <div className="form-group">
                    <label>Giường Đôi: </label>
                    <input type="number" className="form-control" name="giuongDoi"  onChange={onChange}
                     placeholder={updateRoom.length==0?"":updateRoom[0].GiuongDoi} min="0"/>
                </div>
                <div className="form-group">
                    <label>Hình Ảnh Phòng: </label>
                    <input type="text" className="form-control" name="imgPhong" onChange={onChange}
                    placeholder={updateRoom.length==0?"":updateRoom[0].ImagePhong}/>
                </div>
                <div className="form-group">
                    <Button color="success" onClick={updateHotel}>Cập nhật</Button>
                    <Button color="danger" onClick={()=>history.push(`/hotel/${idHotel}/room`)}>Hủy</Button>
                </div>
            </div>
        </div>
    )
}
