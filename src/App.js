import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import banner from './images/banner.jpg'
import Form from './components/Form'
import Body from './components/Body'

function App() {
  return (
    <div className="m-3">
      <Header/>
      <Nav/>
      <img src={banner} id='banner'/>
      <div  className='d-flex justify-content-center' id="dflex">
        <Form/>
      </div>
      <div id='body'>
        <Body/>
      </div>
      <Home/>
    </div>
  );
}

export default App;
