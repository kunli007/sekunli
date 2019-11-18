import React from 'react';
import './Header.css';
//import logo from './logoSE.jpg';
function Header() {
  return (

<div className="header">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />




  <table className="App-header">
    <div class ="boxheader" >
    <button className="button2">เข้าสู่ระบบ</button>
    <a href="https://www.w3schools.com/html/" className="button1">สมัครสมาชิก</a>
    </div>
    <div class="searchbar">
        <input type="text1" id="fname" name="search" placeholder="Search..."/>   
          
    </div>
    <div class="searchbarbox">
    <div class="searchbarbox1">
    <a href="#" className="search_icon1"><i class="material-icons">&#xe8b6;</i></a> </div>
    </div>
    <div className="App-logo1">
    <div className="App-logo">
    <img src={require('./asset/logoSE.png')} alt="Logo" style={{width: 452, height: 452}} />
    </div>
    </div>

            </table>
    

 
  
  
</div>



);
}

export default Header;