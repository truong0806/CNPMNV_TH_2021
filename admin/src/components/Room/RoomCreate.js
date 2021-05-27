import React,{useState} from 'react'
import { Button } from 'reactstrap';
import Axios from 'axios'
import { BrowserRouter as Router,useHistory,useParams} from 'react-router-dom'

export default function HotelCreate() {

    let {id}=useParams()
    const [room,setRoom]=useState({
        tenPhong:'',
        soLuongNguoi:1,
        giaPhong:0,
        soLuongPhong:1,
        moTa:'',
        giuongDon:0,
        giuongDoi:0,
        imgPhong:'',
        idHotel:id,
    })

    const history=useHistory();

    const createHotel=()=>{
        Axios.post("https://deploy-hotel-api.herokuapp.com/room/create",{
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
            window.location.href=`/hotel/${id}/room`
        });
    }

    const onChange=(e)=>{
        const {name,value}=e.target
        setRoom({...room,[name]:value})
    }

    return (
        <div style={{padding:'0 50px 0 50px'}}>
            <h3 style={{margin:'10px 0 10px 0'}}>Thêm Phòng Mới</h3>
            <div className="form">
                <div className="form-group">
                    <label>Tên Phòng: </label>
                    <input type="text" className="form-control" name="tenPhong" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label>Số Lượng Người: </label>
                    <input type="number" className="form-control" name="soLuongNguoi" onChange={onChange} min="1"/>
                </div>
                <div className="form-group">
                    <label>Giá Phòng: </label>
                    <input type="number" className="form-control" name="giaPhong"  onChange={onChange} min="0"/>
                </div>
                <div className="form-group">
                    <label>Số Lượng Phòng: </label>
                    <input type="number" className="form-control" name="soLuongPhong" onChange={onChange} min="1"/>
                </div>
                <div className="form-group">
                    <label>Mô Tả Phòng: </label>
                    <input type="text" className="form-control" name="moTa"  onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label>Giường Đơn: </label>
                    <input type="number" className="form-control" name="giuongDon"  onChange={onChange} min="0"/>
                </div>
                <div className="form-group">
                    <label>Giường Đôi: </label>
                    <input type="number" className="form-control" name="giuongDoi"  onChange={onChange} min="0"/>
                </div>
                <div className="form-group">
                    <label>Hình Ảnh Phòng: </label>
                    <input type="text" className="form-control" name="imgPhong" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <Button color="success" onClick={createHotel}>Thêm Phòng</Button>
                    <Button color="danger" onClick={()=>history.push('/hotel')}>Hủy</Button>
                </div>
            </div>
        </div>
    )
}
