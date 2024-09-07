import { Fade } from 'react-reveal';
import '../css/contact.css'


function Contact() {
    return (
        <section id="contact" className="flex flex-row flex-wrap w-full justify-evenly items-center pt-32 contact_cont">

            <Fade top>
                <div className="flex flex-col contact_info">

                    <h3 className="first-letter:capitalize text-green-600 text-lg font-bold">let's talk</h3>
                    <h1 className="font-bold text-5xl capitalize my-6">contact us</h1>
                    <p className="text-gray-500 contactP">If you want to reserve a table in our restaurant, contact us and we will<br />
                        attend you quickly, with our 24/7 chat service.</p>

                </div>
            </Fade>

            <Fade top>
                <a className='capitalize font-bold about_a text-white bg-green-600 w-fit py-4 px-7 rounded-xl mt-8 hover:scale-110 duration-500' href='#minu'>contact us now</a>
            </Fade>
        </section>
    )
}

export default Contact;