import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import { useHistory,useParams } from 'react-router-dom'
import { Table,Button } from 'reactstrap';

export default function Index(){

    let{id}=useParams()

    const [roomList,setRoomList]=useState([]);
    const history=useHistory();

    useEffect(()=>{
        Axios.get("http://localhost:9000/room/getbyhotel/"+id).then((resopne)=>{
            setRoomList(resopne.data);
        });
    },[]);

    const deleteRoom=(idDel)=>{
        Axios.delete("http://localhost:9000/room/delete/"+idDel).then(window.location.href=`/hotel/${id}/room`)
    }
    
    const createRoom=()=>{
        history.push(`/hotel/${id}/room/create`)
    }

    const updateRoom=(idUp)=>{
        history.push(`/hotel/${id}/room/update/${idUp}`)
    }

    if(roomList.length==0)
    {
        return(
            <div>
                <h2 style={{padding:'15px',color:'red'}}>Khách sạn chưa thêm phòng</h2>
                <Button color="info" onClick={createRoom} style={{marginLeft:'15px'}}>Thêm Phòng</Button>
            </div>
        )
    }
    else{
        return(
            <div style={{padding:'0 50px 0 50px'}}>
                <h3 style={{margin:'10px 0 10px 0'}}>Tất Cả Phòng Của Khách Sạn</h3>
                {/* <Button color="info" onClick={createRoom} style={{marginBottom:'15px'}}>Thêm Phòng</Button> */}
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Tên Phòng</th>
                            <th>Số Người</th>
                            <th>Giá Phòng</th>
                            <th>Số Lượng Phòng</th>
                            <th>Mô Tả Phòng</th>
                            <th>Giường Đơn</th>
                            <th>Giường Đôi</th>
                            <th>Hình Ảnh Phòng</th>
                            <th>Mã Khách Sạn</th>
                            <th></th>
                            {/* <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roomList.map(room=>
                                <tr>
                                    <td>{room.TenPhong}</td> 
                                    <td>{room.SoLuongNguoi}</td> 
                                    <td>{room.GiaPhong}</td> 
                                    <td>{room.SoLuongPhong}</td> 
                                    <td>{room.MoTa}</td>
                                    <td>{room.GiuongDon}</td>
                                    <td>{room.GiuongDoi}</td>
                                    <td>{room.ImagePhong}</td>  
                                    <td>{room.MaKhachSan}</td> 
                                    {/* <td style={{width:'115px'}}><Button color="success" onClick={()=>updateRoom(room.MaPhong)}>Cập nhật</Button>{' '}</td> */}
                                    <td><Button color="danger" onClick={()=>deleteRoom(room.MaPhong)}>Xóa</Button>{' '}</td>
                                </tr>    
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}