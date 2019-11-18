import React from 'react';
import './Loader.css';
import Adheader from './Adheader';
import Footer from './Footer';
//import logo from './logoSE.jpg';
function Loader() {
  return (


          <div class="containerloder2">
     <div className="App2">
     <img src={require('./asset/k.png')} alt="Logo" style={{width: 278, height: 278}} />
     
    </div>
    <tr>
    <th><p class= "thloder">รอดำเนินการ</p></th>
    <a href="#" class= "thloder1">กลับสู่หน้าหลัก</a>
     </tr>
     <Adheader/>
     <Footer/> 
     </div>
    
     

  


);
}

export default Loader;

