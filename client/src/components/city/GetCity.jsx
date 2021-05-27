import React,{Overlay,useRef} from "react";
import Router from "react";
import '../../css/GetCity.css';
import {Link} from 'react-router-dom'
class GetCiTy extends Router.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch(`${process.env.REACT_APP_API_URL}/city/get`)
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
  render() {

    return (
      <div className='body-home'>
          {
            this.state.apiResponse.map(a=>
              <Link to={`/city/detail/${a._id}`} className="card" style={{backgroundImage:`url(${a.ImageThanhPho})`}} >              
                <p className='nameCity'>{a.TenThanhPho}</p>
              </Link>
              )
          }
      </div>
    );
  }
}
export default GetCiTy;
