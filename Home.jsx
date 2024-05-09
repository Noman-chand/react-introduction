// Home.js
import React from 'react';
import { AiFillAndroid } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";
import logo from './logo.png';
import { gameImages } from './pics';
import './home.css'
import { FaLock } from "react-icons/fa";
import { pics } from './pic';
import sic  from './10poker.jpg'
import Images from './Images';
import Footer from './Footer';

function Home() {

  return (
    <>
  <nav className="flex items-center justify-between bg-primary py-3 w-full bg-blue-600">
    <a href="#" className="flex items-center">
      <img src={logo} alt="Logo" className="w-12 h-12" />
    </a>
    <div className="flex gap-0">
      <div className="flex items-center">
        <button className="font-bold text-white">Rules</button>
        <br />
        <button className="text-white font-bold text-sm">Download Apk <AiFillAndroid className='w-6'/></button>
      </div>
      <div className="mx-0">
        <p className="text-white my-1">Balance: <b>1500</b> <br /> Exp: <b>0</b></p>
      </div>
      <div className="my-3">
        <button className="font-bold text-white">Demo</button>
      </div>
    </div> 
  </nav>


  <div className="container-fluid px-3 py-2 background  p-3 space-x-5 mb-2" >
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">HOME</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">LOTTERY</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">CRICKET</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">TENNIS</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">FOOTBALL</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">TABLE TENNIS</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">BACCARAT</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">32 CARDS</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">TEENPATTI</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">POKER</button>
  <button className="bg-transparent border-0 text-white hover:text-gray-300 active:text-gray-500 hover:underline focus:outline-none focus:text-gray-500 active:underline">LUCKY 7</button>

</div>

<div className="container-fluid flex py-1">
  <div className="w-1/6">
    <div className="dropdown px-1" id="dropdown-1">
      Racing Sports
      <img src="images/dropdown.png" alt="" className="w-5 h-auto" />
    </div>
    <div className="dropdown px-1" id="dropdown-2">
      Others
      <img src="images/dropdown.png" alt="" className="w-5 h-auto" />
    </div>
    <div className="dropdown px-1" id="dropdown-3">
      All Sports
      <img src="images/dropdown.png" alt="" className="w-5 h-auto " />
    </div>
  </div>
  <div className="container px-3">
    <div className="flex flex-wrap">
      <div className="sports rounded text-center text-white my-1">
        <p className="blinking-text">Indian Premier League-20...</p>
      </div>
      <div className="sports mx-1 rounded text-center text-white my-1">
        <p className="blinking-text">Lucknow Super Giants v Che...</p>
      </div>
      <div className="sports rounded text-center text-white my-1">
        <p className="blinking-text">Nuno Borges v Corentin Moutet</p>
      </div>
      <div className="sports mx-1 rounded text-center text-white my-1">
        <p className="blinking-text">Roberto Bautista Agut v Came...</p>
      </div>
      <div className="sports rounded text-center text-white my-1">
        <p className="blinking-text">V Gracheva v Y Yuan</p>
      </div>
    </div>
    <div className="flex flex-wrap py-3" role="group" aria-label="Basic example">
      <button type="button" className="group-btn px-3">Politics</button>
      <button type="button" className="group-btn px-3">Cricket</button>
      <button type="button" className="group-btn px-3">Football</button>
      <button type="button" className="group-btn px-3">Esoccer</button>
      <button type="button" className="group-btn px-3">Tennis</button>
      <button type="button" className="group-btn px-3">Horse Racing</button>
      <button type="button" className="group-btn px-3">Greyhound Racing</button>
      <button type="button" className="group-btn px-3">Table Tennis</button>
      <button type="button" className="group-btn px-3">Basketball</button>
      <button type="button" className="group-btn px-3">American Football</button>
      <button type="button" className="group-btn px-3">Volleyball</button>
      <hr />
    </div>
  </div>
</div>


<div className="container-fluid main-content">
  <table className="w-full border-spacing-1">
    <tr>
      <th className="col-font">Games</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th colspan="2"></th>
      <th colspan="2" className="col-setting">1</th>
      <th colspan="2" className="col-setting">X</th>
      <th colspan="2" className="col-setting">2</th>
      
    </tr>
    <tr>

      <td className="col-font">Ball by Ball</td>
      <td>🟢</td>
      <td><img src="images/desktop.png" width="5px" alt="" /></td>
      <td><img src="images/ic_fancy.png" width="25%" alt="" /></td>
      <td></td>
      <td></td>
      <td className="setting" classNameName=' align-middle'><FaLock /></td>
      <td className="setting">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting">-</td>
      <td className="setting">-</td>
    </tr>
    <tr>
      <td className="col-font">JT XI v BT XI / 24/04/2024 14:20:00</td>
      <td>🟢</td>
      <td></td>
      <td><img src="images/ic_fancy.png" width="19px" alt="" /></td>
      <td><img src="images/Bm-icon.png" width="15px" alt="" /></td>
      <td><img src="images/tash-img.png" width="15px" alt="" /></td>
      <td className="setting" classNameName=' align-middle'><FaLock /></td>
      <td className="setting">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting">-</td>
      <td className="setting">-</td>
    </tr>
    <tr>
      <td className="col-font">Southern Vipers v Central Sparks / 24/04/2024 14:30:00</td>
      <td>🟢</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td className="setting" classNameName=' justify-center items-center'><FaLock /></td>
      <td className="setting">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting">-</td>
      <td className="setting">-</td>
    </tr>
    <tr>
      <td className="col-font">Northern Diamonds v Western Storm / 24/04/2024 14:30:00</td>
      <td>🟢</td>
      <td></td>
      <td><img src="images/ic_fancy.png" width="19px" alt="" /></td>
      <td></td>
      <td><img src="images/tash-img.png" width="15px" alt="" /></td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
    </tr>
    <tr>
      <td className="col-font">Pakistan T10 v Sri Lanka T10 / 224/04/2024 15:05:00</td>
      <td></td>
      <td></td>
      <td><img src="images/ic_fancy.png" width="19px" alt="" /></td>
      <td><img src="images/Bm-icon.png" width="15px" alt="" /></td>
      <td></td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
    </tr>
    <tr>
      <td className="col-font">The Blaze v South East Stars / 24/04/2024 14:30:00</td>
      <td>🟢</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
    </tr>
    <tr>
      <td className="col-font">New Zealand T10 v Australia T10 / 24/04/2024 14:35:00</td>
      <td>🟢</td>
      <td><img src="images/desktop.png" width="10px" alt="" /></td>
      <td><img src="images/ic_fancy.png" width="19px" alt="" /></td>
      <td><img src="images/Bm-icon.png" width="15px" alt="" /></td>
      <td></td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
    </tr>
    <tr>
      <td className="col-font">West Indies T10 v India T10 / 24/04/2024 14:45:00</td>
      <td>🟢</td>
      <td><img src="images/desktop.png" width="10px" alt="" /></td>
      <td><img src="images/ic_fancy.png" width="19px" alt="" /></td>
      <td><img src="images/Bm-icon.png" width="15px" alt="" /></td>
      <td></td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
    </tr>
    <tr>
      <td className="col-font">Adelaide Striker XI v Melbourne Stars XI / 24/04/2024 15:00:00</td>
      <td>🟢</td>
      <td><img src="images/desktop.png" width="10px" alt="" /></td>
      <td><img src="images/ic_fancy.png" width="19px" alt="" /></td>
      <td><img src="images/Bm-icon.png" width="15px" alt="" /></td>
      <td><img src="images/game-icon.svg" width="15px" alt="" /></td>
      <td className="setting">-</td>

      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
    </tr>
    <tr>
      <td className="col-font">Indian Premier League / 01/03/2024 16:00:00</td>
      <td></td>
      <td><img src="images/desktop.png" width="10px" alt="" /></td>
      <td><img src="images/ic_fancy.png" width="19px" alt="" /></td>
      <td><img src="images/Bm-icon.png" width="15px" alt="" /></td>
      <td><img src="images/game-icon.svg" width="15px" alt="" /></td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
      <td className="setting-2">-</td>
      <td className="setting-3">-</td>
    </tr>
  </table>
</div>

<Images />
<Footer />












    </>
  );
}

export default Home;
