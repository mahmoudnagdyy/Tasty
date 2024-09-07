import { Fade } from 'react-reveal';
import '../css/about.css'

import aboutImg from '../imgs/about.jpg'


function About() {
    return (
        <section id="about" className="flex flex-row flex-wrap w-full justify-evenly items-center pt-32 mt-40 about_cont">

            <Fade top>
                <img className='aboutImg rounded-2xl' src={aboutImg} />
            </Fade>



            <Fade top>
                <div className='flex flex-col'>
                    <h2 className='capitalize text-green-600 font-bold text-lg about_h'>about us</h2>
                    <p className='first-letter:capitalize text-4xl font-semibold mt-5 about_p'>we cook the best <br />tasty food</p>
                    <p className='first-letter:capitalize text-gray-500 mt-8 about_p1'>we cook the best food in the entire city, with<br />
                        excellent customer service, the best meals and at<br />
                        the best price, visit us.</p>
                    <a className='capitalize font-bold about_a text-white bg-green-600 w-fit py-4 px-7 rounded-xl mt-8 hover:scale-110 duration-500' href='#minu'>explore history</a>
                </div>
            </Fade>

        </section>
    )
}

export default About;