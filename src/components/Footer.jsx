import React, { useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { IoMdContacts } from 'react-icons/io';
import { LuCookie } from 'react-icons/lu';
import { MdFavorite, MdOutlinePrivacyTip } from 'react-icons/md';
import { TbAirConditioning } from 'react-icons/tb';
import { Link } from 'react-router-dom'

function Footer() {
    const [email, setEmail] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setEmail("")
    }

    return (
        <div>
            <footer className="footer grid grid-cols-2 md:grid-cols-5 gap-5 bg-base-200 text-base-content p-10">
                <aside>
                    {/* Logo */}
                    <Link to='/'>
                        <h1 className="text-2xl font-semibold italic hover:animate-pulse">
                            <span className="text-red-500 font-extrabold">MY</span>{" "}
                            <span className="text-blue-500 font-bold">APP</span>s
                        </h1>
                    </Link>
                    <p>
                        ACME Industries Ltd.
                    </p>

                    <form onSubmit={handleLogin} className='flex flex-col  gap-2'>
                        <input type="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required className='border border-red-200 py-1 px-2 rounded' />
                        <button type='submit' className='bg-red-500 px-4 py-1 w-fit rounded hover:bg-red-600 cursor-pointer '>Subcribe</button>
                    </form>

                </aside>
                <nav>
                    <h6 className=" text-gray-300 font-bold text-xl">Usefull Links</h6>
                    <a className="link link-hover flex gap-2 items-center"><FaFacebook /> Facbook</a>
                    <a className="link link-hover flex gap-2 items-center"><FaInstagram /> Instagram</a>
                    <a className="link link-hover flex gap-2 items-center"><FaTwitter /> Twitter</a>
                    <a className="link link-hover flex gap-2 items-center"><FaYoutube /> YouTube</a>
                </nav>
                <nav>
                    <h6 className=" text-gray-300 font-bold text-xl">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-gray-300 font-bold text-xl">Website</h6>
                    <Link to='/about' className="link link-hover flex gap-2 items-center"><FcAbout /> About us</Link>
                    <Link to='/contact' className="link link-hover flex gap-2 items-center"><IoMdContacts />Contact</Link>
                    <Link to='/favorite' className="link link-hover flex gap-2 items-center"><MdFavorite /> Favorite</Link>
                    <Link to='/cart' className="link link-hover flex gap-2 items-center"><CiShoppingCart /> Cart</Link>
                </nav>
                <nav>
                    <h6 className="text-gray-300 font-bold text-xl">Legal</h6>
                    <a className="link link-hover flex gap-2 items-center"><TbAirConditioning /> Terms of use</a>
                    <a className="link link-hover flex gap-2 items-center"><MdOutlinePrivacyTip /> Privacy policy</a>
                    <a className="link link-hover flex gap-2 items-center"><LuCookie /> Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
