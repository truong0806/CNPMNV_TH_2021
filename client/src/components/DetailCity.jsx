import React,{useState,useEffect} from 'react'
import Header from './Header'
import Form from './Form'
import Nav from './Nav'
import {useParams,Link} from 'react-router-dom'
import Axios from 'axios'
import Footer from './Footer'
import "../App.css";
import "../css/DetailCity.css"

export default function DetailCity() {
    const [hotel,setHotel]=useState([])
    const [city,setCity]=useState({})
    let {id}=useParams()

    useEffect(()=>{
        Axios.get(`${process.env.REACT_APP_API_URL}/hotel/get`).then((res)=>{
            setHotel(res.data)
        })
    },[])

    useEffect(async()=>{
        await Axios.get(`${process.env.REACT_APP_API_URL}/city/get/`+id).then((res)=>{
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
                <img src={city[0]==null?"":city[0].ImageThanhPho} id="bannerImageCity" />
                <label className="bannerName">{city[0]==null?"":city[0].TenThanhPho}</label>
                <div className="d-flex justify-content-center" id="dflexDetail">
                    <Form />
                </div>
                <div className="hotelFromCity">
                {
                    hotel.filter(x=>x.MaThanhPho==id).map(x=>
                        <Link to={`/hotel/detail/${x.MaKhachSan}`} id="hotelCard">
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
