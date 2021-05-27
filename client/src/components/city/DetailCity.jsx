import React,{useState,useEffect} from 'react'
import Header from '../component/Header'
import Form from '../component/Form'
import Nav from '../component/Nav'
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios'
import Footer from '../component/Footer'
import "../../App.css";
import "../../css/DetailCity.css"

export default function DetailCity() {
    const [hotel,setHotel]=useState([])
    const [city,setCity]=useState([])
    let {id}=useParams()

    useEffect(()=>{
        Axios.get(`${process.env.REACT_APP_API_URL}/hotel/get`).then((res)=>{
            setHotel(res.data)
        })
    },[])

    useEffect(()=>{
         Axios.get(`${process.env.REACT_APP_API_URL}/city/get/${id}`).then((res)=>{
            setCity(res.data)
        })
    },[])
    return (
        <div className="app" id="app"> 
            <div id="overlay"></div>
                <div className="head">
                    <Header />
                    <Nav />
                </div>
            <div>
                <img src={city==null?"":city.ImageThanhPho} id="bannerImageCity" />
                <label className="bannerName">{city.length==0?"":city.TenThanhPho}</label>
                <div className="d-flex justify-content-center" id="dflexDetail">
                    <Form />
                </div>
                <div className="hotelFromCity">
                <h4>Các khách sạn được yêu thích ở {city.length==0?"":city.TenThanhPho}</h4>
                {
                    hotel.filter(x=>x.MaThanhPho==id).map(x=>
                        <Link to={`/hotel/detail/${x._id}`} id="hotelCard">
                            <div className="hotelInCity">
                                <div className="imageHotelIncity">
                                    <img src={x.ImageKhachSan}></img>
                                </div>
                                <div className="detailHotelInCity">
                                    <p className="labelHotel">{x.TenKhachSan}</p>
                                    <p className="locationHotel">{x.DiaChi}</p>
                                </div>                                             
                            </div>
                        </Link>
                    )
                }
                </div>
                <Footer />
            </div>
        </div>
    )
}
