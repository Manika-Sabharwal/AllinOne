import React, { useState } from 'react'
import '../selectDrop/select.css'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Select = ({data,placeholder,icon}) => {
  
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [listData,setListData] = useState(data);
  const [listData2,setListData2] = useState(data);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect); 
  }

  const  closeSelect= (index,name) => {
     setSelectedIndex(index);
     setIsOpenSelect(false); 
     setSelectedItem(name);
  }

  const filterList =(e)=>{
    const keyword = e.target.value.toLowerCase();
    const list = listData2.filter((item) =>{
      return item.toLowerCase().includes(keyword);
    })

    const list2 = list.filter((item,index) =>
      list.indexOf(item) === index
  );

    setListData(list2);
  }

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
    <div className="selectDrop cursor position-relative">
      {icon}
      <span className="openSelect" onClick={openSelect}>
        {selectedItem.length > 14 ?selectedItem.substr(0,14)+'...' : selectedItem}
        <KeyboardArrowDownIcon/>
      </span>

      {isOpenSelect && (
        <div className="selectDropCursor">
          <div className="searchField">
            <input type="text" placeholder="Search here ..."
            onChange={filterList} />
          </div>
          <ul className="searchResults">
            {/* Showing the Items */}
          {
            listData.map((item,index) =>{
              return(
                <li key ={index} onClick={() => closeSelect(index,item)} className={`${selectedIndex=== index ? 'active' : ''}`}>{item}</li>
              );
            })
          }
            
            
           
          </ul>
        </div>
      )}
    </div>
    </ClickAwayListener>
  )
}

export default Select;
