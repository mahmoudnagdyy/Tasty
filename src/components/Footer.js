
import '../css/footer.css'


import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <footer className="flex flex-col mt-56">

            <div className="flex flex-row flex-wrap w-full justify-evenly footer_links">

                <div className="flex flex-col logo_div">
                    <h1 className="capitalize font-bold text-2xl text-green-600">tasty food</h1>
                    <p className="capitalize text-gray-500 mt-3">resturant</p>

                    <div className="flex flex-row mt-11">
                        <a className="text-2xl mr-8" href=""><FaFacebookF /></a>
                        <a className="text-2xl mr-8" href=""><FaInstagram /></a>
                        <a className="text-2xl" href=""><FaTwitter /></a>
                    </div>

                </div>

                <div className="flex flex-col services_div">
                    <h1 className="capitalize font-bold text-2xl">services</h1>

                    <a className="text-gray-500 hover:text-black duration-300 capitalize mt-5" href="">delivery</a>
                    <a className="text-gray-500 hover:text-black duration-300 capitalize mt-2" href="">pricing</a>
                    <a className="text-gray-500 hover:text-black duration-300 capitalize mt-2" href="">fast food</a>
                    <a className="text-gray-500 hover:text-black duration-300 capitalize mt-2" href="">reserve your spot</a>

                </div>


                <div className="flex flex-col info_div">
                    <h1 className="capitalize font-bold text-2xl">infromation</h1>

                    <a className="text-gray-500 hover:text-black duration-300 capitalize mt-5" href="">event</a>
                    <a className="text-gray-500 hover:text-black duration-300 capitalize mt-2" href="">contact us</a>
                    <a className="text-gray-500 hover:text-black duration-300 capitalize mt-2" href="">privicy policy</a>
                    <a className="text-gray-500 hover:text-black duration-300 capitalize mt-2" href="">terms of services</a>

                </div>


            </div>






            <p className="text-center text-lg py-14">Developed and powered by Mahmoud Nagdy</p>

        </footer>
    )
}

export default Footer;