import React, { useState } from 'react'
import {BiTime} from 'react-icons/bi'
import { BsFillGrid3X2GapFill, BsGrid1X2Fill } from 'react-icons/bs'
import {IoIosClose, IoIosArrowUp} from 'react-icons/io'
import {FaToolbox} from 'react-icons/fa';

const Sidebar = ({openSidebarToggle, openSidebar}) => {
  const [isInventoryOpen, setisInventoryOpen] = useState(true);

  const toggleInventory = () =>{
    setisInventoryOpen(!isInventoryOpen);
  }


  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand flex items-center space-x-2 text-slate-200'>
          <BiTime size={24} className='icon_head mr-2'/>
          2:00
        </div>

        <span className='icone close_icon' onClick={openSidebar}>
          <IoIosClose size={24}className='text-slate-100 ml-4'/>
        </span>

      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <span className='flex items-center space-x-2'>
            <BsGrid1X2Fill className='icon'/>
            Dashboard
          </span>
        </li>
        <li className='sidebar-list-item'>
          <div className='flex items-center justify-between cursor-pointer'
          onClick={toggleInventory}>
            <div className='flex items-center space-x-2'>
               <BsFillGrid3X2GapFill size={24} className='icon'/>
               Inventory
            </div>
            {isInventoryOpen ?
            <IoIosArrowUp className='icon ml-2'/> : <IoIosArrowUp className='icon rotate-180'/>}
          </div>

          {isInventoryOpen && (
            <ul className='nested-list ml-8 space-y-3 mt-2'>
              <li><a href='/warehouse' className='flex items-center'>
              <FaToolbox size={22} className='icon'/>
              WAREHOUSE</a></li>
            </ul>
          )}

              

        </li>
      </ul>
    </aside>
  )
}

export default Sidebar