import React from 'react';
import './Specs2.css';
import Adheader from './Adheader';
import Footer from './Footer';
import Specs1 from './Specs1';
//import logo from './logoSE.jpg';
function Specs2() {
  return (
<div className="box55">
<div className="specs2">

    <div className="box551">
    <th><a  class="serif41">รายละเอียด</a></th>
    <p class= "serif42">น้องหมาสีขาวพันธุ์ปอม เป็นน้องหมาอายุ 7 เดือน</p>

  
    </div>
    <div className="body3">

    <button className="button button4">แก้ไขประกาศ</button>
    </div>

    <div className="body4">

                <button className="button button4">ลบประกาศ</button>
    </div>
   
    <div className="body43">
    
    <div className="body51">
    <p class= "activespecs2">ข้อความ</p>
    </div>
   
    <div className="body61">
    <div class="gal71"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} />
    </div>
    <div class="gal71"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} /> 
   </div>
    <div class="gal71"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} />
</div>
    <div class="gal71"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} /> 
</div>
  
  
    </div>
    <div className="body71">
    <p class= "serif41">Jonh A</p>


    <p  class="serif41">B</p>


    <p  class="serif41">Airo</p>


    <p  class="serif41">Jony</p>

  
    </div>
    </div>
    </div>
    <Adheader/>
     <Footer/> 
     <Specs1/>
   
    </div>
    
    
  
    
   );
}

export default Specs2;