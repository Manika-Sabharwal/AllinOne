// Making the Navbar u  der Header
import React from 'react'
import '../Nav/nav.css'
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import {Link} from 'react-router-dom';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const Nav = () => {
  return (
    <div className='nav d-flex align-items-center'>
        <div className='container-fluid'>
          <div className = 'row'>
             <div className= 'col-sm-3 part1'>  {/*Browse All Categories */}
                <Button className='bg-g text-white catTab'><GridViewIcon/> &nbsp; Browse All Categories<KeyboardArrowDownIcon/></Button>
            </div>

            <div className= 'col-sm-7 part2'>   {/*Navigation */}
              <nav>
                <ul className='list list-inline mb-0'>
                  <li className='list-inline-item'>
                    <Button><Link>Home</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link>About</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link>Shop</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link>Vendors</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link>Mega Menu<KeyboardArrowDownIcon/></Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link>Blog</Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link>Pages<KeyboardArrowDownIcon/></Link></Button>
                  </li>
                  <li className='list-inline-item'>
                    <Button><Link>Contact</Link></Button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className= 'col-sm-2 part3 d-flex align-items-center'>    {/*Contact Number*/}
                <div className='phNo d-flex align-items-center'>
                    <span><HeadsetMicOutlinedIcon/></span>
                    <div className='info ml-3 mb-0'>
                      <h3 className='text-g mb-0'>
                        1100-9900
                      </h3>
                      <p className='mb-0'>24 / 7 Support Centre</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav;

// Next step to make the dropdown for navigation video : 1:10:53