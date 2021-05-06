import React from 'react'
import '../css/Nav.css'
import rent from '../images/rent.png'
import combo from '../images/holiday.png'
import pass from '../images/pass.png'
import hotel from '../images/hotel.png'
import air from '../images/airplane.png'
import trans from '../images/transportation.png'
import xperience from '../images/x.png'

export default function Nav() {
    return (
        <div className='bd'>
            <div className='nav'>
                <a href="/"><img src={air}></img> Vé máy bay</a>
                <a href="/"><img src={hotel}></img> Khách sạn</a>
                <a href="/"><img src={combo}></img> Combo tiết kiệm</a>
                <a href="/"><img src={trans}></img> Đưa đón sân bay</a>
                <a href="/"><img src={xperience}></img> Xperience</a>
                <a href="/"><img src={rent}></img> Cho thuê xe</a>
                <a href="/"><img src={pass}></img> JR Pass</a>
            </div>
        </div>

    )
}
