import { NextPage } from "next";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram, AiOutlineInstagram, AiOutlineMail, AiTwotoneMail } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";


const footer:NextPage = () => {

    return (
        <div className="footerContent">
            <div className="container mx-auto mt-6 flex justify-center">
             <a className="text-center" href="https://www.facebook.com" target="_blank"><BiLogoFacebookCircle size={40} className="facebookIcon mt-6" /></a>
             <a className="text-center ps-5" href="https://www.instagram.com/" target="_blank"><AiOutlineInstagram size={40} className="instagramIcon mt-6" /></a>
             <a className="text-center ps-5" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTgMxfQGbxFFlHvhcZLjZGjpZSHHMCDfnLCDhjHKWgVFfTwnVrXbxjlLjKcjVwpwJgrrg" target="_blank"><AiOutlineMail size={40} className="emailIcon mt-6" /></a>

            </div>

            <div className="container  mx-auto mt-8 flex justify-around">
                <Link href="/" className="navLinks">Home</Link>
                <Link href="/" className="navLinks">Service</Link>
                <Link href="/" className="navLinks">Our Story</Link>
                <Link href="/" className="navLinks">Contact</Link>
                <Link href="/" className="navLinks">Blogs</Link>
            </div>

            <div className="container mx-auto mt-12 flex justify-center">
                More About our Network
            </div>
            <div className="container mx-auto mt-1 flex justify-center">
                <div><span className="varnyaName mb-1"> copyright</span></div>
                <div><span className="varnyaName"><AiOutlineCopyright /></span></div>
            </div>
        </div>
    )
}

export default footer;