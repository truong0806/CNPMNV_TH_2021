import React from "react";
import Router from "react";
import '../../css/GetHotel.css'


class GetHotel extends Router.Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
      }
    
      callAPI() {
        fetch(`${process.env.REACT_APP_API_URL}/hotel/get`)
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            this.setState({ apiResponse: res})
          });
      }

      componentDidMount() {
        this.callAPI();
      }
    render(){
        return(
            <div className='hotelList'>
                {
                    this.state.apiResponse.map(hotel=>
                            <div>
                                <p className='nameHotel'>{hotel.TenKhachSan}</p>
                            </div>
                        )
                }
            </div>
        )
    }
}

export default GetHotel