import { Fade } from 'react-reveal'
import '../css/services.css'

import dish from '../imgs/dish.svg'
import pizza from '../imgs/pizza.svg'
import car from '../imgs/truck.svg'



function Services() {
    return (
        <section id="services" className="flex flex-col pt-32">

            <Fade top>
                <h3 className="text-center text-green-600 font-bold capitalize">offering</h3>
                <h1 className="text-center first-letter:capitalize font-semibold mt-5 text-5xl">our amazing services</h1>
            </Fade>

            <div className="flex flex-row w-full flex-wrap justify-evenly items-center mt-20">

                <Fade top delay={100}>
                    <div className="flex flex-col items-center justify-center mb-12">
                        <img className='serviceImg' src={dish} />
                        <h3 className='font-bold capitalize text-lg mt-6 text-center'>excellent food</h3>
                        <p className='service_p text-center mt-4'>We offer our clients excellent
                            quality services for many years,
                            with the best and delicious food
                            in the city.</p>
                    </div>
                </Fade>

                <Fade top delay={200}>
                    <div className="flex flex-col items-center justify-center mb-12">
                        <img className='serviceImg' src={pizza} />
                        <h3 className='font-bold capitalize text-lg mt-6 text-center'>fast food</h3>
                        <p className='service_p text-center mt-4'>We offer our clients excellent
                            quality services for many years,
                            with the best and delicious food
                            in the city.</p>
                    </div>
                </Fade>

                <Fade top delay={300}>
                    <div className="flex flex-col items-center justify-center mb-12">
                        <img className='serviceImg' src={car} />
                        <h3 className='font-bold capitalize text-lg mt-6 text-center'>delivery</h3>
                        <p className='service_p text-center mt-4'>We offer our clients excellent
                            quality services for many years,
                            with the best and delicious food
                            in the city.</p>
                    </div>
                </Fade>

            </div>

        </section>
    )
}

export default Services;