import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>
            <div className=" bg-gray-300 flex items-center justify-center  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse px-5 md:px-10 p-2">
                    <img
                        src="https://img.freepik.com/free-vector/portable-electronics-isometric-icons-illustrated-digital-gadgets-used-daily-life-field-sports-medicine-work-leisure-isolated-vector-illustration_1284-70477.jpg?semt=ais_hybrid&w=740&q=80"
                        className="max-w-sm rounded-lg shadow-2xl" />

                    <div className=''>
                        <h1 className='font-bold text-xl md:text-3xl'>Top Deals on Gadgets You Love — Shop Smart!</h1>

                        <p className="py-6 text-sm md:text-base space-y-2 ml-4">
                            <li>"Find high-quality products at unbeatable prices with fast delivery."</li>
                            <li>"Upgrade your lifestyle with our premium collection and exclusive discounts."</li>
                            <li>"From fashion to electronics — shop everything in one place."</li>
                            <li>"Your trusted online store for the best deals, every day."</li>
                        </p>
                        <Link to='/apifetch' className="btn btn-primary ">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
