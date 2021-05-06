import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Table,Button } from 'reactstrap';

export default function DonDatPhong() {
    const [donDat,setDonDat]=useState([])
    let id=localStorage.getItem('maTK')
    useEffect(async()=>{
        await axios.get(`http://localhost:9000/datphong/getbypartner/${id}`).then(res=>setDonDat(res.data))
    },[])

    const xacNhanDon=(id)=>{
        axios.put("http://localhost:9000/datphong/xacnhan/"+id,{TrangThai:'Đã xác nhận'}).then(window.location.href="/dondatphong")
    }
    const huyXacNhan=(id)=>{
        axios.put("http://localhost:9000/datphong/xacnhan/"+id,{TrangThai:'Chưa xác nhận'}).then(window.location.href="/dondatphong")
    }

    const xoaDon=(id)=>{
        axios.delete("http://localhost:9000/datphong/delete/"+id).then(setDonDat(donDat.filter(x=>x.MaDon!=id)))
    }

    if(donDat.length==0)
    {
        return(
            <h3 style={{color:'red'}}>Hiện chưa có đơn đặt phòng</h3>
        )
    }
    else{
        return (
            <div style={{padding:'0 50px 0 50px'}}>
            <h3 style={{margin:'10px 0 10px 0'}}>Tất Cả Đơn Đặt Phòng</h3>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Mã Đơn</th>
                        <th>Ngày Đặt Phòng</th>
                        <th>Ngày Trả Phòng</th>
                        <th>Voucher</th>
                        <th>Tiền Đặt Phòng</th>
                        <th>Tên Người Đặt</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Mã Phòng</th>
                        <th>Trạng Thái Đơn</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        donDat.map(don=>
                            <tr>                              
                                <th>{don.MaDon}</th>
                                <td>{don.NgayDatPhong}</td> 
                                <td>{don.NgayTraPhong}</td>
                                <td>{don.Voucher}</td> 
                                <td>{don.TienDat}</td> 
                                <td>{don.TenNguoiDat}</td> 
                                <td>{don.Email}</td>                  
                                <td>{don.SoDienThoai}</td>
                                <td>{don.MaPhong}</td>                  
                                <td>{don.TrangThai}</td>   
                                <td style={{width:'135px'}}>
                                    {don.TrangThai==="Chưa xác nhận"?
                                        <Button color="success" onClick={()=>xacNhanDon(don.MaDon)} style={{width:'100%',marginBottom:'5px'}}>Xác nhận</Button>:
                                        <Button color="warning" onClick={()=>huyXacNhan(don.MaDon)} style={{width:'100%',marginBottom:'5px'}}>Hủy</Button>
                                    }
                                    <Button color="danger" onClick={()=>xoaDon(don.MaDon)} style={{width:'100%'}}>Xóa</Button>{' '}
                                </td>
                            </tr>    
                        )
                    }
                </tbody>
            </Table>
        </div>       
        )
    }
}
