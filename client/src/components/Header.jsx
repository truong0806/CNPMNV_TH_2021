import React from 'react'
import '../css/Header.css'
import {Link} from "react-router-dom";
import percent from '../images/percentage.png'
import email from '../images/email.png'
import save from '../images/save.png'
import book from '../images/booking-app.png'
import dove from '../images/dove.png'
import menu from '../images/menu.png'

export default function Header() {
    const userEmail = localStorage.getItem('email')
    return (
        <div className='body' >
            <span><Link to="/" className="menu"><img src={menu}></img></Link></span>
            <span><Link to="/" className="name">Traveloka</Link></span>
            <span><img src={dove} width="25px" height="25px"></img></span>
            <span className='ul'>
                <span className='li'>
                    <span><Link to="/form"><img src={percent}></img> Khuyến mãi</Link></span>
                    <span><Link to="/header"><img src={email}/> Hộp thư của tôi</Link></span>
                    <span><a href="/"><img src={save}/> Đã lưu</a></span>
                    <span><a href="/"><img src={book}/> Đặt chỗ của tôi</a></span>
                    <span>
                        <select id = "dropdown" className="btn btn-light">
                            <option value="VND">VND</option>
                            <option value="USE">USD</option>
                            <option value="EUR">EURO</option>
                        </select>    
                    </span>
                    {
                        userEmail==null?<span><Link to="/login">Login</Link></span>:
                        <span>
                            {userEmail+" "}
                            <Link to="/logout"> Logout</Link>
                        </span>        
                    }   
                </span>
            </span>           
        </div>
    )
}
