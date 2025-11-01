import React from "react";
import "../Header/header.css";
import Logo from "../../assets/images/AllinOne-Logo.svg";
import Search from "../../assets/images/searchIcon-header.svg"
import Select from "../selectDrop/select"
const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src={Logo} width="150" />
          </div>
          {/* Search Bar */}
          <div className="col-sm-5">
            <div className="headerSearch d-flex align-items-center">
              <Select />
              
              <div className="search">
                <input type="text" placeholder="Search for Items....."/>
                <img src={Search} className="searchIcon cursor" width="20px"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
