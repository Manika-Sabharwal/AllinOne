import React, { useState } from 'react'
import '../selectDrop/select.css'


const Select = () => {

  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect); 
  }

  const  closeSelect= (index) => {
     setSelectedIndex(index);
     setIsOpenSelect(false); 
  }

  return (
    <div className="selectDrop cursor position-relative">
      <span className="openSelect" onClick={openSelect}>
        All Categories 
      </span>

      {isOpenSelect && (
        <div className="selectDropCursor">
          <div className="searchField">
            <input type="text" placeholder="Search..." />
          </div>
          <ul className="searchResults">
            <li onClick={() => closeSelect(0)} className={`${selectedIndex===0 ? 'active' : ''}`}>All Categories</li>
            <li onClick={() => closeSelect(1)} className={`${selectedIndex===1 ? 'active' : ''}`}>Milks & Dairies</li>
            <li onClick={() => closeSelect(2)} className={`${selectedIndex===2 ? 'active' : ''}`}>Wines & Drinks</li>
            <li onClick={() => closeSelect(3)} className={`${selectedIndex===3 ? 'active' : ''}`}>Clothing & Beauty</li>
            <li onClick={() => closeSelect(4)} className={`${selectedIndex===4 ? 'active' : ''}`}>Fresh Seafood</li>
            <li onClick={() => closeSelect(5)} className={`${selectedIndex===5 ? 'active' : ''}`}>Pet Foods & Toy</li>
            <li onClick={() => closeSelect(6)} className={`${selectedIndex===6 ? 'active' : ''}`}>Fast Food</li>
            <li onClick={() => closeSelect(7)} className={`${selectedIndex===7 ? 'active' : ''}`}>Baking Material</li>
            <li onClick={() => closeSelect(8)} className={`${selectedIndex===8 ? 'active' : ''}`}>Vegetables</li>
            <li onClick={() => closeSelect(9)} className={`${selectedIndex===9 ? 'active' : ''}`}>Fresh Fruit</li>
            <li onClick={() => closeSelect(10)} className={`${selectedIndex==10 ? 'active' : ''}`}>Bread and Juice</li>
            <li onClick={() => closeSelect(11)} className={`${selectedIndex===11 ? 'active' : ''}`}>Fresh Seafood</li>
            <li onClick={() => closeSelect(12)} className={`${selectedIndex===12 ? 'active' : ''}`}>Clothing & Beauty</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Select;
