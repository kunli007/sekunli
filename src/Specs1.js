import React from 'react';
import './Specs1.css';

//import logo from './logoSE.jpg';
function Specs1() {
  return (

<div className="specs1">
           

            <div class="gallery00001">
            <img src={require('./asset/f.png')} alt="Logo" style={{width: 895, height: 563}} /> 
           
            <div class="searchbar00001">
        <input type="text00001" id="fname" name="search" placeholder="ความคิดเห็น"/>  
        <a href="#" className="search_icon002"><i class="fa fa-location-arrow"></i></a>
       
        <a href="#" className="search_icon001"><i class=" fa fa-heart-o"></i></a> 
        <a href="#" className="search_icon001"><i class=" fa fa-share-alt" aria-hidden="true"></i></a>
        </div>
        
    </div>
    <div className="body00001">
    <div className="box0012">
        
    <div class="gal35"> <img src={require('./asset/t.png')} alt="Logo" style={{width: 80, height:80}} /> 
    <div className="box00001">
    
    <th><a  class="serif21">A</a></th>
    <p class= "serif21">น่ารักครับ</p>
    
    </div>
    </div>

    <div className="box00003">
    <div class="gal31"> <img src={require('./asset/tt.png')} alt="Logo" style={{width: 80, height: 80}} /> 
   
    <div className="box00002">
    <div className="box00005">
    <th><a  class="serif20">B</a></th>
    <p class= "serif20">น่าเลี้ยงจังครับ</p>
    </div>  
    </div> 
    </div>
    </div>
    </div>
        

 





</div>
</div> 




);
}

export default Specs1;