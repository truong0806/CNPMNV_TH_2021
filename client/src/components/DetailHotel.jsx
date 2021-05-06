import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import '../css/DetailHotel.css'

export default function DetailHotel() {
    let {id}=useParams()
    const [hotel,setHotel]=useState([])
    useEffect(()=>{
        Axios.get(`${process.env.REACT_APP_API_URL}/hotel/get/${id}`).then(
            res=>setHotel(res.data)
        )
    },[])

    const gia=hotel[0]==null?"":hotel[0].GiaToiThieu.toString()
    var split=gia.match(/.{1,1}/g)
    const format=[]
    if(split!=null)
    {
       if(split.length%3==0)
       {
            for(var i=split.length-1;i>=0;i--)
            {
                format.push(split[i])
                if(i%3==0)
                {
                    if(i!=0)
                    {
                        format.push(".")
                    }
                }    
            }
       }
       else{
        for(var i=split.length;i>=1;i--)
        {
            format.push(split[i-1])
            if(i%3==0)
            {
                if(i!=0)
                {
                    format.push(".")
                }
            }    
        }
       }
    }
    var finalPriceFormat=""
    for(var i=format.length-1;i>=0;i--)
    {
        finalPriceFormat+=format[i]
    }

    return (
        <div>
            <div className="head">
                <Header></Header>
                <Nav></Nav>
            </div>
            <div className="detailHotelInCity">
                <div className="item">
                    <div className="row1">
                        <div className="row">
                            <div className="col-12">
                                <label className="TenPhongDetail">{hotel[0]==null?"":hotel[0].TenKhachSan}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label  className="DiaChiPhongDetail">{hotel[0]==null?"":hotel[0].DiaChi}</label>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-12">
                                <img src={hotel[0]==null?"":hotel[0].ImageKhachSan} id="bannerImageHotel" />
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-8">
                                <label className="travelokagDetail">Traveloka</label>
                            </div>
                            <div className="giaPhongDetail col-4">
                                <label>Giá phòng mỗi đêm từ</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <label></label>
                            </div>
                            <div className="giaPhongDetail col-4">
                                <label className="giaDetail">{finalPriceFormat} VND</label>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="col-4">
                            <p className="labelRow2">Xem ngay những đánh giá hàng đầu của khách hàng!</p>
                            <p className="label2Row2">Từ những đánh giá có chọn lọc của chúng tôi, bạn sẽ có được mô tả chân thực nhất về nơi lưu trú này.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
