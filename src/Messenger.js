import React from 'react';
import './Messenger.css';
import Adheader from './Adheader';
import Footer from './Footer';
import Specs1 from './Specs1';

//import logo from './logoSE.jpg';
function Messenger() {
  return (

<div className="Messenger">
<div className="box199999">

    <div className="box1">
    <th><a  class="serif1">รายละเอียด</a></th>
    <p class= "serif">น้องหมาสีขาวพันธุ์ปอม เป็นน้องหมาอายุ 7 เดือน</p>

    </div>
    <div className="body3">

    <button className="buttonmess">แก้ไขประกาศ</button>
    </div>

    <div className="body4">

                <button className="buttonmess">ลบประกาศ</button>
    </div>
   
    <div className="bodymessen10">
    
    <div className="bodymessen5">
    <p class= "activemess">ข้อความ</p>
    </div>
   
    <div className="body6">
    <div class="gal0"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} />
    </div>
    <div class="gal0"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} /> 
    </div>
    <div class="gal0"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} />
    </div>
    <div class="gal0"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} /> 
    </div>
  
  
    </div>
    <div className="body7">
    <p class= "serif0">Jonh A</p>
    <p  class="serif0">B</p>
    <p  class="serif0">Airo</p>
    <p  class="serif0">Jony</p>
    </div>

    <div className="messenger0">
    <div class="gal300"> <img src={require('./asset/l.png')} alt="Logo" style={{width: 46, height:46}} /> 
    </div>
    <p class= "serif99">Jonh A</p>

     <div className="body8">
    <a href="#" className="ka"><i class='fas fa-times'></i></a> 
    
    </div>
    
    </div>
    </div>
    </div>
     <Adheader/>
     <Footer/> 
     <Specs1/>
     </div>
    
    
  
    
   );
}

export default Messenger;