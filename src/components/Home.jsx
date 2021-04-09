import React from "react";
import Router from "react";
import '../css/Header.css';
import '../css/Home.css'

class Home extends Router.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch("http://localhost:9000/")
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
          {this.state.apiResponse.map(a=><div className="card">
            <p id='nameProduct'>{a.ProductName}</p>
            <img src={a.ProductImage}></img>
            <p>Price: <b id='price'>{a.Price}</b> VND</p>
          </div>)}
      </div>
    );
  }
}
export default Home;
