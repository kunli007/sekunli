import React from 'react';
import './Messenger1.css';
import Adheader from './Adheader';
import Footer from './Footer';
import Specs1 from './Specs1';

//import logo from './logoSE.jpg';
function Messenger1() {
  return (

<div className="Messenger1">
<div className="box119">

    <div className="box19">
    <th><a  class="serif1">รายละเอียด</a></th>
    <p class= "serif">น้องหมาสีขาวพันธุ์ปอม เป็นน้องหมาอายุ 7 เดือน</p>

    </div>
    <div className="body3">

    <button className=" button3">แก้ไขประกาศ</button>
    </div>

    <div className="body4">

                <button className="button3">ลบประกาศ</button>
    </div>
   
    <div className="body10">
    
    <div className="body5">
    <p class= "active">ข้อความ</p>
    </div>
   
    <div className="body6">
    <div class="gal"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} />
    </div>
    <div class="gal"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} /> 
    </div>
    <div class="gal"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} />
    </div>
    <div class="gal"> <img src={require('./asset/j.png')} alt="Logo" style={{width: 60, height:60}} /> 
    </div>
  
  
    </div>
    <div className="body7">
    <p class= "serif1">Jonh A</p>
    <p  class="serif1">B</p>
    <p  class="serif1">Airo</p>
    <p  class="serif1">Jony</p>
    </div>
    
    <div className="boxmessenger">
        

    <div className="messenger2">
    <div class="gal3"> <img src={require('./asset/l.png')} alt="Logo" style={{width: 46, height:46}} /> 
    </div>
    <p class= "serif2">Jonh A</p>

     <div className="body8">
    <a href="#" className="ka"><i class='fas fa-times'></i></a> 
    
    <div class="gal4"> <img src={require('./asset/w.png')} alt="Logo" style={{width: 34, height:34}} /> 
    </div>
 
        
     <div className="body9">
     <p class= "serif5">สนใจครับ น้องมีบ้านยังครับ</p>
     </div>
     <div className="body11">
     <p class= "serif4">09.09</p>
    </div>
    <div className="body12">
        
    <div class="searchbar2">
        <input type="text3" id="fname" name="search" placeholder="พิมพ์ข้อความ..."/>   
        <a href="#" className="paper"> <i class="fa fa-paperclip"></i></a>    
    </div>
        <a href="#" className="loca"><i class="fa fa-location-arrow"></i></a>


    </div>
    </div>
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

export default Messenger1;