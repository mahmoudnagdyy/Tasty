import '../css/application.css'

import app from '../imgs/movil-app.png'
import ios from '../imgs/app1.png'
import android from '../imgs/app2.png'
import { Fade } from 'react-reveal'


function Application() {
    return (
        <section className="flex flex-row flex-wrap w-full justify-evenly items-center pt-32">

            <Fade top>
                <img className='app_img' src={app} />
            </Fade>

            <Fade top>
                <div className='flex flex-col app_det'>
                    <h3 className='capitalize font-semibold text-green-600 text-lg'>app</h3>
                    <p className='first-letter:capitalize text-3xl font-semibold mt-8'>app is available</p>

                    <p className='text-gray-500 mt-8'>Find our application and download it, you can make<br />
                        reservations, food orders, see your deliveries on the<br />
                        way and much more.</p>

                    <div className='flex flex-row mt-10 imgs'>

                        <a href=''>
                            <img className='prog_img mr-5' src={ios} />
                        </a>


                        <a href=''>
                            <img className='prog_img' src={android} />
                        </a>

                    </div>
                </div>
            </Fade>

        </section>
    )
}

export default Application;