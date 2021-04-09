import React from 'react'
import '../css/Form.css'
export default function Form() {
    return (
        <div className="border">
        <div className='row'>
            <div className='col-3'>
                <ul style={{listStyleType:'none'}}>
                    <li><a href="">Máy bay</a></li>
                    <li><a href="">Máy bay</a></li>
                    <li><a href="">Máy bay</a></li>
                    <li><a href="">Máy bay</a></li>
                    <li><a href="">Máy bay</a></li>
                </ul>
            </div>
            <div className='col-9'>
                <form action="">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Thành phố, địa điểm hoặc tên khách sạn:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Thành phố, khách sạn, điểm đến"/>    
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label>Nhận phòng:</label>
                            <input type="text" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col-4">
                            <label>Trả phòng:</label>
                            <input type="text" className="form-control" placeholder="Last name"/>
                        </div>
                        <div className="col-4">
                            <label>Trả phòng:</label>
                            <p></p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-end">
                        <div className="col-8">
                            <label>Khách và phòng:</label>
                            <input type="text" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </div>                      
                    </div>
                    <div className='row'>
                        <div class="form-group form-check" style={{paddingLeft:'35px'}}>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}
