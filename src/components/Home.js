import { useState } from 'react';
import '../css/home.css'

import homeImg from '../imgs/home.png'

import { IoIosArrowUp } from "react-icons/io";

function Home() {

    const [arrowState, setArrowState] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setArrowState(true)
        }
        else {
            setArrowState(false)
        }
    })


    return (
        <section className='bg-white flex flex-row flex-wrap w-full justify-evenly items-center home_cont'>

            <a className={arrowState ? 'fixed arrowTop bg-green-600 text-white p-3 rounded-lg text-xl z-50 arrowShow' : 'fixed arrowTop bg-green-600 text-white p-3 rounded-lg text-xl z-50 arrowHide'} href='#'><IoIosArrowUp /></a>


            <div className='flex flex-col animate__animated animate__fadeInDown animate__slow'>

                <h1 className='capitalize font-bold text-green-600 text-6xl'>tasty food</h1>
                <p className='first-letter:capitalize text-3xl font-bold mt-8 home_p'>try the best food of<br /> the week.</p>
                <a className='capitalize font-bold text-white bg-green-600 w-fit py-4 px-7 rounded-xl mt-8 hover:scale-110 duration-500' href='#minu'>view minu</a>
            </div>


            <img className='homeImg animate__animated animate__fadeInDown animate__slow' src={homeImg} />

        </section>
    )
}

export default Home;