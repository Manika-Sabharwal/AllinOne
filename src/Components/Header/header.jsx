import React, { useEffect, useState } from 'react'
import "../Header/header.css";
import Logo from "../../assets/images/AllinOne-Logo.svg";
import Search from "../../assets/images/searchIcon-header.svg";
import Select from "../selectDrop/select";
import axios from "axios";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from '../../assets/images/compare-header.svg'
import IconWishlist from '../../assets/images/wishlist-header.svg'
import IconCart from '../../assets/images/cart-header.svg'
import IconAccount from '../../assets/images/account-header.svg'
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Nav from '../Header/Nav/nav';

const Header = () => {
  const[isOpenDropDown,setisOpenDropDown] = useState(false);
  const [categories,setcategories] = useState([
    'Milks & Dairies',
    'Wines & Drinks',
    'Clothing & Beauty',
    'Fresh Seafood',
    'Pet Foods & Toy',
    'Fast Food',
    'Baking Material',
    'Vegetables',
    'Fresh Fruit',
    'Bread and Juice',
    'Fresh Seafood',
    'Clothing & Beauty'
  ]);

  {/*making the countries API using Axios as it is the OG way to fetch api in a js file. */}
  const countryList = []

  useEffect(()=>{
    getCountry('https://countriesnow.space/api/v0.1/countries');
  },[]);

  const getCountry = async(url) =>{
    try{
      await axios.get(url).then((res) =>{
        if(res!==null){
          //console.log(res.data.data);
          res.data.data.map((item,index) => {
            countryList.push(item.country);
            //console.log(item.country);
          })
          
        }
      })
    }
    catch(error){
      console.log(error.message);
    }
  }


  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-2">
            <img src={Logo} width="150" alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="col-sm-5">
            <div className="headerSearch d-flex align-items-center">
              
              <div className="selectDrop">
                <Select data = {categories} placeholder='All Categories' icon={false}/>
              </div>

              <div className="search">
                <input type="text" placeholder="Search for Items....." />
                <img src={Search} className="searchIcon cursor" width="20px" alt="Search Icon"/>
              </div>

            </div>
          </div>

         <div className="col-sm-5 d-flex align-items-center justify-content-end" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'nowrap' }}>
           <div className='ml-auto d-flex align-items-center '>
            <div className="locationWrapper" style={{ display: 'inline-flex', alignItems: 'center', flex: '0 0 auto' }}>
              <Select data={countryList} placeholder="Your Location" icon={<LocationOnOutlinedIcon style={{ opacity: 0.5, fontSize: '16px' }} />}
                style={{width: 'auto',
                  minWidth: '160px',   // increased a bit for full text visibility
                  fontSize: '13px',    // reduced font size
                  whiteSpace: 'nowrap', // prevent wrapping
                  overflow: 'hidden',
                  textOverflow: 'ellipsis', }}/>
              </div>

            <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
            <ul className="list list-inline mb-0 headerTabs" style={{ display: 'inline-flex', alignItems: 'center', margin: 0, padding: "0 ", listStyle: 'none', flex: '0 0 auto' }}>
              <li className="list-inline-item" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ display: "inline-flex", alignItems: "center" ,fontSize: "17px", paddingLeft:"5px"}}><img src={IconCompare} style={{ width: "20px", marginRight: "6px" }}  />Compare</span>
              </li>

              <li className="list-inline-item" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ display: "inline-flex", alignItems: "center",fontSize: "17px" ,paddingLeft:"5px"}}><img src={IconWishlist} style={{ width: "20px", marginRight: "6px" }}  />Wishlist</span>
              </li>

              <li className="list-inline-item" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ display: "inline-flex", alignItems: "center",fontSize: "17px" ,paddingLeft:"5px"}}><img src={IconCart} style={{ width: "20px", marginRight: "6px" }}  />Cart</span>
              </li>
              
              <li className="list-inline-item" style={{ display: 'inline-flex', alignItems: 'center' }}>
                
                <span style={{ display: "inline-flex", alignItems: "center",fontSize: "17px",paddingLeft:"5px" }}
                onClick={()=> setisOpenDropDown(!isOpenDropDown)}><img src={IconAccount} style={{ width: "20px", marginRight: "6px" }}  />Account</span>
                
                {
                  isOpenDropDown!==false && <ul className='dropDownMenu'>
                  <li><Button><PersonOutlineOutlinedIcon/>My Account</Button></li>
                  <li><Button><LocationSearchingOutlinedIcon/>Order Tracking</Button></li>
                  <li><Button><FavoriteBorderOutlinedIcon/>My Wishlist</Button></li>
                  <li><Button><SettingsOutlinedIcon/>Settings</Button></li>
                  <li><Button><LogoutOutlinedIcon/>Sign Out</Button></li>
                </ul>
                }
                
                
                
              </li>
              
            </ul>
            </ClickAwayListener>
           </div>
         </div>
       
        </div>
      </div>
    </header>
    
  );
};

export default Header;
