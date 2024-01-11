"use client"

import { NextPage } from "next";
import Image from "next/image";
import varnya from "../images/FLASHMEUP-4545.jpg"
import { CiInstagram } from "react-icons/ci";
import { useEffect } from "react";

function diginerButton(e) {
  // let diginer = document.getElementsByClassName(e);
  console.log(e.target.id);
  e.target.className
  
  let designer = document.getElementsByClassName(e.target.className);
  console.log(designer);
  
  
}
const AboutPage:NextPage = () => {

  useEffect(() =>{
    console.log("hello");
    
  },[])
    return (
    <div>
        {/* <div className="flex justify-center mt-20 bg-gradient-to-r from-white">
            <div className="w-full m-10 mt-0 text-center">
                <h1 className="text-center text-2xl font-normal italic font-serif mt-10">Varnya</h1>
                <span className="mt-24 text-center text-2xl font-normal">"Yes," replied the Tortoise,<br /> "and I get there sooner than you think. I'll run you a race and prove it."</span>
            </div>
            <div className="w-full h-full ">
            <Image src={varnya} alt="..." className="storyCoverPhoto w-full h-screen" />
            </div>
        </div> */}
        <div className="w-full h-auto mt-20">
        <Image src={varnya} alt="..." className="storyCoverPhoto w-full" style={{height:"85vh"}} />
        </div>
        <div className="flex flex-col  m-24 mb-0">
            <h1 className="tracking-wide font-bold text-5xl">CAREERS AT NEROLI SALON & SPA</h1>
            <span className="font-extralight text-base me-24 mt-10 leading-8">AN EDGELESS BEAUTY GROUP COMPANY <br/><br/> We celebrate big thinking and the fearless pursuit of future innovation. It is at the core of what we do, who we are, and what our brands stand for. It’s within this limitless expanse that artistry, innovation, and creativity have space and opportunity to develop. Together, we tap into the well of inspiration within each of us that blooms when given space to grow, through connection, collaboration, and shared experiences.</span>
        </div>
        <div className=" text-center mt-24">
            <span className="text-5xl font-bold">
                OUR TEAM
            </span>
        </div>
        <div className="flex justify-center mt-10">
        <button id="diginerButtonAll" className="diginerButtonAll m-5 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-blue-500 rounded" onClick={(e)=> diginerButton(e)}>
            ALL
        </button>
        <button id="diginerButtonHair" className="diginerButtonHair m-5 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-blue-500 rounded" onClick={(e)=> diginerButton(e)}>
            HAIR DESIGNER
        </button>
        <button id="diginerButtonMessage" className="diginerButtonMessage m-5 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-blue-500 rounded" onClick={(e)=> diginerButton(e)}>
            MASSAGE THERAPIST
        </button>
        <button id="diginerButtonEsthetician" className="diginerButtonEsthetician m-5 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-blue-500 rounded" onClick={(e)=> diginerButton(e)}>
            ESTHETICIAN
        </button>
        <button id="diginerButtonNail" className="diginerButtonNail m-5 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-blue-500 rounded" onClick={(e)=> diginerButton(e)}>
            NAIL DESIGNER
        </button>
        <button id="diginerButtonBarber" className="diginerButtonBarber m-5 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-blue-500 rounded" onClick={(e)=> diginerButton(e)}>
            BARBER
        </button><button id="diginerButtonAyurveda" className="diginerButtonAyurveda m-5 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-blue-500 rounded" onClick={(e)=> diginerButton(e)}>
            AYURVEDA THERAPIST
        </button>
        </div>
        <div className="flex justify-around mt-24">
        <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
  <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
  <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4 ">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
            
        </div>
        <div className="flex justify-around mt-24">
        <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
  <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
  <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4 ">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
            
        </div>
        <div className="flex justify-around mt-24">
        <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
  <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
  <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4 ">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
            
        </div>
        <div className="flex justify-around mt-24">
        <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
  <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
  <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4 ">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
            
        </div>
        <div className="flex justify-around mt-24">
        <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
  <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
  <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
    <div className="w-80 rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={varnya} alt="Sunset in the mountains" />
  <div className="px-6 py-4 ">
    <div className="font-bold tracking-tighter  font-light  text-4xl mb-2 text-center"><h1>KANIN</h1></div>
    <p className="text-gray-700 text-base text-center">
    Nail Designer<CiInstagram className="text-xl mx-auto mt-10" />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
    </div>
            
        </div>
    </div>
    )
}

export default AboutPage;