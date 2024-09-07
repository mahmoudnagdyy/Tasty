import { useState } from 'react';
import '../css/header.css'

import { PiListBold } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";


function Header() {

    const [listState, setListState] = useState(false);
    const [headerState, setHeaderState] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setHeaderState(true)
        }

        else {
            setHeaderState(false)
        }
    })


    return (
        <header className={headerState ? 'flex flex-row bg-white w-full h-24 justify-around items-center fixed top-0 left-0 z-50 header_shadow duration-500' : 'flex flex-row bg-white w-full h-24 justify-around items-center fixed top-0 left-0 z-50 duration-500'}>

            <h1 className='capitalize font-bold text-xl text-gray-500 cursor-default'>tasty</h1>


            <div className='flex flex-row header_links'>
                <a className='capitalize font-semibold text-lg text-gray-500 mr-12 duration-300' href='#'>home</a>
                <a className='capitalize font-semibold text-lg text-gray-500 mr-12 duration-300' href='#about'>about</a>
                <a className='capitalize font-semibold text-lg text-gray-500 mr-12 duration-300' href='#services'>services</a>
                <a className='capitalize font-semibold text-lg text-gray-500 mr-12 duration-300' href='#menu'>menu</a>
                <a className='capitalize font-semibold text-lg text-gray-500 duration-300' href='#contact'>contact us</a>
            </div>


            <button className='text-3xl list_icon' onClick={() => setListState(!listState)}>
                {
                    listState ? <RiCloseLargeFill /> : <PiListBold />
                }
            </button>
            <div className={listState ? 'flex flex-col links_list list_show h-full fixed rounded-ss-2xl z-50 bg-white duration-500' : 'flex flex-col links_list list_hide h-full fixed rounded-ss-2xl z-50 bg-white duration-1000'}>
                <a className='capitalize font-semibold text-lg text-gray-500 mr-12 p-4 w-full  rounded-ss-2xl duration-300' href='#'>home</a>
                <a className='capitalize font-semibold text-lg text-gray-500 mr-12 mt-2 p-4 w-full duration-300' href='#about'>about</a>
                <a className='capitalize font-semibold text-lg text-gray-500 mr-12 mt-2 p-4 w-full duration-300' href='#services'>services</a>
                <a className='capitalize font-semibold text-lg text-gray-500 mr-12 mt-2 p-4 w-full duration-300' href='#menu'>menu</a>
                <a className='capitalize font-semibold text-lg text-gray-500 p-4 mt-2 w-full duration-300' href='#contact'>contact us</a>
            </div>

        </header>
    )
}

export default Header;