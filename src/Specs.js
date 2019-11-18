import React from 'react';
import './Specs.css';
import Header from './Header';
import Adheader from './Adheader';
import Footer from './Footer';
import Specs1 from './Specs1';
//import logo from './logoSE.jpg';
function Specs() {
  return (

<div className="specs">

    <div className="box0001">
    <th><a  class="serif0001">รายละเอียด</a></th>
    <p class= "serif0002">น้องหมาสีขาวพันธุ์ปอม เป็นน้องหมาอายุ 7 เดือน</p>

    </div>

    <div className="box0002">
    <th><a  class="serif0001">ข้อมูลเจ้าของ</a></th>
    <p class= "serif0002">ชื่อ กาอากา พาพาลา โพสเมื่อ 10/10/2019 จ.กรุงเทพมหานคร </p>
      
    </div>
   
    <div className="body3">

    <button className="button0002">คุยกับเจ้าของ</button>
    </div>

    <div className="body4">

                <button className="button0002">ดูเบอร์โทรศัพท์เจ้าของ</button>
    </div>
    <div className="body5">
                 <a href=" " className  =" button-thx  ">แจ้งประกาศไม่เหมาะสม</a>


   </div> 
    <Adheader/>
     <Footer/> 
     <Specs1/>

 </div>
);
}

export default Specs;