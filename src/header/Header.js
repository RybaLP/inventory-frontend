import React from 'react'
import {BsJustify} from "react-icons/bs"
import {BiLogOut} from "react-icons/bi"

export default function Header({openSidebar}) {
  return (
    <header className='header'>

      <div className='' onClick={openSidebar}>
        <BsJustify size={24}/>
      </div>

     <div className='header-left'>
        <h2 className='text-lg sm:ml-3 md:text-2xl text-slate-100'>Inventory system</h2>
     </div>

     <div className='flex items-center space-x-2'>
        <p>user name</p>
        <button className='flex items-center space-x-1'><BiLogOut size={24}/><span className=''>Logout</span></button>
     </div>



    </header>
  )
}
