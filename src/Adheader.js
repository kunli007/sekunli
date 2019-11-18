import React,{ Component } from 'react';
import './Adheader.css';
//import logo from './logoSE.png';

class Adheader extends Component {


  constructor(){

    super();
    this.state={
      name:"home"
    };


  }

  render(){


    return (

     <div className="App">

        <table className="App-adheader d-inline-flex">
          <a href="https://www.w3schools.com/html/" className="adbutton">หาบ้าน</a>
          <a href=" " className="adbutton1"> User001</a>
          <a href=" " className="user_icon"><i class="fa fa-user-circle-o " aria-hidden="true"></i></a>
          <a href=" " className="bell_icon"><i class="fa fa-bell" aria-hidden="true"></i></a>
         
          <div class="adsearchbar">
        <input type="text002" id="fname" name="search" placeholder="Search..."/>   
          
        </div>
        
        <div class="adsearchbarbox3">
    <div class="adsearchbarbox4">
    <a href="#" className="iconsearch"><i class="material-icons">&#xe8b6;</i></a> </div>
    </div>
          <div className="App-logo2">
    <div className="App-logo3">
    <img src={require('./asset/logoSE.png')} alt="Logo" style={{width: 452, height: 452}} />
    </div>
    </div>
 
        </table>
    
       
        

      </div>
    
    );
  }
}

export default Adheader;