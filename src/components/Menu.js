import { Fade } from 'react-reveal';
import '../css/menu.css'


import plate1 from '../imgs/plate1.png'
import plate2 from '../imgs/plate2.png'
import plate3 from '../imgs/plate3.png'

import { FiShoppingCart } from "react-icons/fi";



function Menu() {
    return (
        <section id="menu" className="flex flex-col pt-32">

            <Fade top>
                <h3 className="text-center text-green-600 font-bold capitalize">special</h3>
                <h1 className="text-center first-letter:capitalize font-semibold mt-5 text-5xl">menu of the week</h1>
            </Fade>


            <div className="flex flex-row w-full flex-wrap justify-evenly items-center mt-20">

                <Fade top delay={100}>
                    <div className="flex flex-col plate p-12 relative rounded-2xl mb-10">

                        <img className='plate_img duration-500' src={plate1} />
                        <h3 className='capitalize font-bold text-lg mt-5'>barbecue salad</h3>
                        <p className='text-gray-500 first-letter:capitalize'>delicious dish</p>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <p className='font-bold mt-6 text-lg'>$22.00</p>
                            <a className='font-bold text-2xl bg-green-600 text-white p-3 shopping' href=''><FiShoppingCart /></a>
                        </div>

                    </div>
                </Fade>

                <Fade top delay={200}>
                    <div className="flex flex-col plate p-12 relative rounded-2xl mb-10">

                        <img className='plate_img duration-500' src={plate2} />
                        <h3 className='capitalize font-bold text-lg mt-5'>barbecue salad</h3>
                        <p className='text-gray-500 first-letter:capitalize'>delicious dish</p>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <p className='font-bold mt-6 text-lg'>$12.00</p>
                            <a className='font-bold text-2xl bg-green-600 text-white p-3 shopping' href=''><FiShoppingCart /></a>
                        </div>
                    </div>
                </Fade>




                <Fade top delay={300}>
                    <div className="flex flex-col plate p-12 relative rounded-2xl mb-10">

                        <img className='plate_img duration-500' src={plate3} />
                        <h3 className='capitalize font-bold text-lg mt-5'>spinach salad</h3>
                        <p className='text-gray-500 first-letter:capitalize'>delicious dish</p>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <p className='font-bold mt-6 text-lg'>$9.50</p>
                            <a className='font-bold text-2xl bg-green-600 text-white p-3 shopping' href=''><FiShoppingCart /></a>
                        </div>
                    </div>
                </Fade>


            </div>

        </section >
    )
}

export default Menu;