import React,{useState} from 'react'
import '../css/Footer.css'
import GetHotel from './GetHotel'


export default function Footer(){
    const [detailHide,setDetailHide]=useState(true)
    const showDetail=()=>{
        setDetailHide(!detailHide)
    }
    return(
        <div className="foot">
            <hr style={{width:'80%'}}/>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <b>Đăng ký nơi nghỉ của bạn</b>
                    <p>Tiếp cận hàng triệu khách hàng tiềm năng và nâng tầm doanh nghiệp của bạn với chúng tôi.</p>
                </div>
                <div className="col-4">
                    <a href="/"><img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/01/24/1579840685837-76cf8c0f1f54757df1c8a7a5ec3d0811.jpeg?tr=q-75,w-448,h-180" alt=""/></a>
                </div>
                <div className="col-2"></div>
            </div>
            <hr style={{width:'80%'}}/>
            <h4>Các khách sạn và địa điểm hot tại Việt Nam</h4>
            <GetHotel/>
            <br/><br/>
            <h4>Đặt phòng khách sạn tại Việt Nam trên Traveloka</h4>
            <div style={{padding:'0 150px 0 150px'}}>
                <br/>
                <h6>Traveloka – Lựa chọn hàng đầu khi đặt phòng khách sạn trực tuyến</h6>
                <br/>
                <p id="detail">Là đại lý đặt phòng khách sạn hàng đầu Đông Nam Á, kể từ khi ra mắt đến nay, Traveloka đã giúp 
                mọi chuyến du lịch của hơn 20 triệu tín đồ du lịch trở nên đơn giản hơn bao giờ hết. Không chỉ 
                hoạt động tại Đông Nam Á, Traveloka hiện là đối tác của trên 200.000 khách sạn toàn thế giới, 
                sẵn sàng đồng hành cùng bạn mọi lúc mọi nơi.</p>    
                <div hidden={detailHide} id="detailHide">
                    <p>Với mạng lưới khách sạn rộng khắp, Traveloka mang đến vô vàn lựa chọn, đa dạng mọi phân khúc, từ khách sạn cao cấp, resort nghỉ dưỡng hàng đầu, đến các hostel, homestay hiện đại mà cá tính. Dù bạn phải đặt phòng gấp cho chuyến công tác, hay tìm kiếm một thiên đường trong mơ cho chuyến trăng mật lãng mạn, Traveloka cũng sẽ khiến bạn hài lòng với những khách sạn tốt nhất và mức giá ưu đãi nhất. </p>
                    <p>Tất cả những gì bạn cần làm là ba bước: tìm kiếm, đặt phòng khách sạn và thanh toán. Mọi thứ còn lại đã có Traveloka lo liệu.</p>
                    <br/>
                    <br/>
                    <h6>Tích hợp các tính năng ưu việt, đặt phòng khách sạn trên Traveloka đơn giản hơn bao giờ hết</h6>
                    <br/>
                    <p>Bắt đầu với việc nhập thông tin điểm đến tại mục “Tìm khách sạn”, hàng trăm kết quả sẽ được hiển thị trong tích tắc theo nhu cầu của bạn. Ứng dụng Traveloka sẽ phân loại kết quả theo hai phân khúc – Tiết kiệm và Cao cấp, giúp rút ngắn thời gian tìm kiếm. Đặc biệt, khi lựa chọn ngày nhận phòng, Traveloka sẽ thông báo đâu là những ngày có mức giá thấp nhất. Không cần so sánh ngược xuôi, đặt phòng khách sạn giá rẻ giờ đây chỉ cần vài bước tùy chỉnh.</p>
                    <p>Mọi thông tin chi tiết nhất về khách sạn luôn được cập nhật thường xuyên. Các tiện nghi, khu vực lân cận, và phần nhận xét từ các khách hàng trước sẽ giúp bạn có một đánh giá tổng quan về khách sạn đang cân nhắc. Mức giá hiển thị cũng là mức giá cuối cùng bạn phải thanh toán, đã bao gồm thuế, không phí giao dịch hoặc chi phí ẩn. Bạn chỉ cần một giao diện duy nhất để so sánh nhiều sự lựa chọn và dễ dàng đặt phòng khách sạn giá rẻ với đầy đủ tiện nghi nhất.</p>
                    <p>Các du khách thường xuyên có những chuyến du lịch ngẫu hứng, hoặc lịch trình thay đổi bất ngờ khiến bạn không chuẩn bị trước một nơi nghỉ ngơi thoải mái thì cũng đừng lo lắng. Tính năng “Khách sạn giờ chót” sẽ là vị cứu tinh cho bạn. Traveloka sẽ lọc ra những khách sạn còn phòng trống trong ngày với giá tốt nhất, đôi khi có ưu đãi lên đến 50%, khó tìm được ở bất kì nơi nào khác.</p>
                    <p>Sau khi hoàn tất đặt phòng và thanh toán, mọi thông tin sẽ được gửi về email và lưu trong mục “Đặt chỗ của tôi”, giúp bạn quản lý dễ dàng các giao dịch của mình theo thứ tự thời gian. Ngoài ra, chi tiết mã đặt phòng khách sạn còn có mục phiên dịch địa chỉ theo tiếng địa phương, bản đồ chỉ đường, và số điện thoại liên hệ, dành cho những trường hợp du lịch đến các quốc gia không nói tiếng Anh.</p>
                    <br/>
                    <br/>
                    <h6>Trải nghiệm người dùng thân thiện tại Traveloka</h6>
                    <br/>
                    <p>Với những tính năng ưu việt như thế, Traveloka mong muốn không chỉ đồng hành cùng bạn trên mọi hành trình, mà còn mang đến cho bạn những trải nghiệm người dùng thân thiện, cùng giờ phút nghỉ ngơi thoải mái nhất.</p>
                    <p>Giao diện của website lẫn ứng dụng Traveloka đều chú trọng vào sự tối giản, vừa tiết kiệm thời gian thao tác, vừa đơn giản nhất ngay cả với những người không sành công nghệ. Bạn có thể quản lý mọi thông tin đặt phòng của mình chỉ với một ứng dụng mà không cần bất kỳ giấy tờ rắc rối.</p>
                    <p>Thanh toán tại Traveloka cũng vô cùng đơn giản với 5 hình thức đa dạng: thẻ thanh toán quốc tế, ATM nội địa, chuyển khoản, thanh toán tại bưu điện và hệ thống cửa hàng có liên kết với Payoo. Riêng với thanh toán trực tuyến, tính năng TravelokaPay cho phép lưu thông tin cho những lần thanh toán sau. Để tránh các rủi ro khi giao dịch trực tuyến, thông tin thẻ của khách hàng được mã hoá và quản lý bởi một trong những nhà cung cấp dịch vụ quản lý giao dịch thanh toán trực tuyến lớn nhất thế giới thuộc tổ chức thẻ VISA - CyberSource.</p>
                    <p>Với Traveloka, bạn không chỉ đặt phòng khách sạn với mức giá tốt nhất, mà còn có cơ hội “bắt” được những ưu đãi hấp dẫn nhất. Các chương trình khuyến mãi liên tục được cập nhật tại mục “Ưu đãi hiện hành” và “Ưu đãi khách sạn”. Việc đặt phòng khách sạn giá rẻ giờ đây không còn là một nhiệm vụ khó khăn hay tốn nhiều thời gian nữa. Ngoài ra, để trải nghiệm du lịch của bạn thêm thú vị, bạn còn có thể đặt vé tham quan du lịch và tour giá rẻ, nhiều khuyến mãi với Traveloka Xperience trên <a href="https://www.traveloka.com/vi-vn/activities">https://www.traveloka.com/vi-vn/activities</a>.</p>
                    <p>Dịch vụ hỗ trợ khách hàng của Traveloka cũng luôn sẵn sàng 24/7 để giám sát mọi giao dịch, và giải đáp thắc mắc của khách hàng. Liên hệ trực tiếp với Traveloka tại ba cổng thông tin để sau: hotline 1900-6978, chat trực tuyến trên <a href="https://www.traveloka.com/vi-vn">https://www.traveloka.com/vi-vn</a> hoặc gửi email về địa chỉ cs@traveloka.com.</p>
                </div>       
            </div>
            <a href="#detailHide" id="showHide" onClick={showDetail}>Xem thêm</a>
                <hr style={{width:'80%'}}/>
                <br/><br/><br/><br/>    
                <footer class="footer">
                    <div>
                        <a href="https://coreui.io">CoreUI </a>
                        <span>&copy; 2020 creativeLabs.</span>
                    </div>
                    <div>
                        <span>Powered by </span>
                        <a href="https://coreui.io">CoreUI</a>
                    </div>
                </footer>
                
        </div>
    )
}