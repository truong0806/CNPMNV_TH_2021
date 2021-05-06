import React from 'react'
import capture from '../../images/Capture.png'
import capture1 from '../../images/Capture1.png'
import bot1 from '../../images/bottom_img1.png'
import bot2 from '../../images/bottom_img2.png'
import bot3 from '../../images/bottom_img3.png'
import bot4 from '../../images/bottom_img4.png'
import '../../css/Body.css'

export default function Header() {
    return (
        <div className="bodi">
            <div className="row">
                <div className="col-6">
                    <h3>Thêm không gian cho gia đình và bạn bè</h3>
                    <br/>
                    <p>Rất nhiều lựa chọn hấp dẫn các căn hộ và biệt thự trên Traveloka</p>
                </div>
                <div className="col-3">
                    <a href=""><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/01/1561969742861-54d523759500f217d6b7a094c3db0e43.jpeg?tr=q-75,w-298"/></a>
                    <br/>
                    <b>Biệt thự</b>
                    <p>17,000+ Biệt thự</p>
                </div>
                <div className="col-3">
                    <a href="/"><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/01/1561969736953-639cf0e0bacf7b1f0fbf05121ea147ac.jpeg?tr=q-75,w-298"/></a>
                    <br/>
                    <b>Căn hộ</b>
                    <p>25,000+ Căn hộ</p>
                </div>
                
            </div>
            <hr width='70%'/>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-3">
                    <h3>Đối tác khách sạn</h3>
                    <br/>
                    <p>Đối tác khách sạn trong nước và quốc tế
                        Chúng tôi hợp tác với các chuỗi khách sạn trên toàn thế giới để bảo đảm mang lại kỳ nghỉ tuyệt vời nhất tại mọi điểm đến trong mơ của bạn!</p>
                </div>
                <div className="col-6">
                    <a href="/"><img src={capture} style={{width:'100%'}}/></a>
                </div>
                <div className="col-1"></div>
            </div>
            <hr width='70%'/>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-3">
                    <h3>Đối tác thanh toán</h3>
                    <br/>
                    <p>Những đối tác thanh toán đáng tin cậy của chúng tôi sẽ giúp cho bạn luôn an tâm thực hiện mọi giao dịch một cách thuận lợi nhất!</p>
                </div>
                <div className="col-6">
                    <a href="/"><img src={capture1} style={{width:'100%'}}/></a>
                </div>
                <div className="col-1"></div>
            </div>
            <hr width='70%'/>
            <div className="row">
                <h3>Tại sao nên đặt chỗ với Traveloka?</h3>
            </div>
            <div>
                <div className="row" style={{marginTop:'70px'}}>
                    <div className="col-6">
                        <img src={bot1}/>
                    </div>
                    <div className="col-6">
                        <b>Giá rẻ mỗi ngày với ưu đãi đặc biệt dành riêng cho ứng dụng</b>
                        <p>Đặt phòng qua ứng dụng để nhận giá tốt nhất với các khuyến mãi tuyệt vời!</p>
                    </div>
                </div>

                <div className="row" style={{marginTop:'30px'}}>            
                    <div className="col-7">
                        <b>Giá rẻ mỗi ngày với ưu đãi đặc biệt dành riêng cho ứng dụng</b>
                        <p>Đặt phòng qua ứng dụng để nhận giá tốt nhất với các khuyến mãi tuyệt vời!</p>
                    </div>
                    <div className="col-5">
                        <img src={bot2}/>
                    </div>
                </div>

                <div className="row" style={{marginTop:'30px'}}>
                    <div className="col-5">
                        <img src={bot3}/>
                    </div>
                    <div className="col-7">
                        <b>Giá rẻ mỗi ngày với ưu đãi đặc biệt dành riêng cho ứng dụng</b>
                        <p>Đặt phòng qua ứng dụng để nhận giá tốt nhất với các khuyến mãi tuyệt vời!</p>
                    </div>
                </div>
                
                
                <div className="row" style={{marginTop:'30px'}}>            
                    <div className="col-7">
                        <b>Giá rẻ mỗi ngày với ưu đãi đặc biệt dành riêng cho ứng dụng</b>
                        <p>Đặt phòng qua ứng dụng để nhận giá tốt nhất với các khuyến mãi tuyệt vời!</p>
                    </div>
                    <div className="col-5">
                        <img src={bot4}/>
                    </div>
                </div>
            </div>

            <div className="row" style={{marginTop:'50px'}}>
                <h3>Điểm đến hot nhất do Traveloka đề xuất</h3>
            </div>
            <hr width='70%'/>
        </div>
    )
}
