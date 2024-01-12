"use client"
import AboutPage from './ourstory/page'
import Contact from './contact/page'
import { IoIosCut } from "react-icons/io";
import { TfiCut } from "react-icons/tfi";
import { NextPage } from "next";
import slide1 from "./images/FLASHMEUP-15.jpg"
import slide2 from "./images/FLASHMEUP-4545.jpg"
import slide3 from "./images/FLASHMEUP-63.jpg"
import slide4 from "./images/FLASHMEUP-38.jpg"
import slide5 from "./images/230808155857-04-destination-wedding-planners.jpg"
import crousalPick1 from "./images/FLASHMEUP-29.jpg"
import crousalPick2 from "./images/FLASHMEUP-37.jpg"
import crousalPick3 from "./images/IMG_6512.jpg"
import crousalPick4 from "./images/FLASHMEUP-38.jpg"
import crousalPick5 from "./images/FLASHMEUP-78.jpg"
import crousalPick6 from "./images/IMG_6512.jpg"
import crousalPick7 from "./images/IMG_5579.jpg"
import crousalPick8 from "./images/FLASHMEUP-54.jpg"
import crousalPick9 from "./images/FLASHMEUP-83.jpg"
import crousalPick10 from "./images/IMG_7234.jpg"
import Image from "next/image";
import { useEffect, useState } from "react";
import "./css/style.css"


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  

  const slide = [
      {
          src:  slide2,
      },
      {
          src: slide1,
      },
      {
          src: slide4,
      },
      {
        src: slide3,
      }
      
  ]

  useEffect(()=>{
    setTimeout(() => {
      prevSlide()
    }, 3000);
  })


  const prevSlide = () =>{
      let isFirstSlide = currentIndex === 0;
      let newIndex = isFirstSlide ? slide.length -1 : currentIndex - 1;
      setCurrentIndex(newIndex);
  }
  const nextSlide = () =>{
    let isFirstSlide = currentIndex === 0;
    let newIndex = isFirstSlide ? slide.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
}
  return (
    
    <div>
    <div id="animation-carousel" className="relative w-full bg-image img-1" data-carousel="static" style={{height:"100%"}}>
{/* <!-- Carousel wrapper --> */}
<div className="relative h-100 rounded-lg md:h-100 mx-auto" style={{height:"57vw",width:"85%"}}>
 {/* <!-- Item 1 --> */}
<div className=" duration-200 ease-linear absolute top-0 left-0 right-0 bottom-0" data-carousel-item>
    {/* <img src={slide[0].src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
    <Image style={{height:"76%"}} src={slide[currentIndex].src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        
</div>
</div>
{/* <!-- Slider controls --> */}
<button type="button" className="absolute cursor-default top-0 left-0 z-30 flex items-center justify-center h-full px-4  group focus:outline-none" data-carousel-prev >
<span onClick={prevSlide} className="inline-flex  items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg className="w-4 h-4 cursor-pointer  dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" >
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
    </svg>
    <span className="sr-only">Previous</span>
</span>
</button>
<button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
<span onClick={nextSlide} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg className="w-4 h-4  dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    </svg>
    <span className="sr-only">Next</span>
</span>
</button>
</div>
<div className="ourStory bg-image img-2">
  <main className='bg-text flex flex-col  p-24 '>
    <div className='contentDiv'>
  <span className='story '>Neroli Salon & Spa was founded in 1993 in Milwaukee’s Historic Third Ward. We are a team committed to our passion of caring for our guests by providing impeccable salon and spa services.</span>
  </div>
  <div className='contentDiv mt-5'>
    <span className='story '>Our team comes from a diverse background with a variety of specialties that enable us to take a customized approach to meet the needs of every guest we have the honor of serving.</span>
    </div>
  </main>

  <div className='flex flex-row justify-around'>
    <div className='salonService'>
      <h1 className='serviceButton'>Salon Service</h1>
    </div>
    <div className='salonProduct'>
    <h1 className='serviceButton'>Salon Product</h1>
    </div>
  </div>
  
</div>
<div className='ourServices flex justify-around pt-24 pb-24 bg-image img-3'>
  <div className='item'><h1>VISIT OUR SALON SERVICE YOU MUST LIKE THEM</h1></div>
  <div className='item'><div><Image src={crousalPick9} alt='...' /><h1>Aveda nutriplenish™ Leave-in Conditioner US $12.00 – $37.00</h1></div></div>
  <div className='item'><div><Image src={crousalPick7} alt='...' /><h1>Aveda nutriplenish™ Leave-in Conditioner US $12.00 – $37.00</h1></div></div>
  <div className='item'><div><Image src={slide1} className='nailCutting' alt='...' /><h1>Aveda nutriplenish™ Leave-in Conditioner US $12.00 – $37.00</h1></div></div>
  <div className='item'><div><Image src={crousalPick5} alt='...' /><h1>Aveda nutriplenish™ Leave-in Conditioner US $12.00 – $37.00</h1></div></div>
  <div className='item'><div><Image src={crousalPick6} alt='...' /><h1>Aveda nutriplenish™ Leave-in Conditioner US $12.00 – $37.00</h1></div></div>
    {/* <div><div className='serviceSnap bg-text relative'><Image src={crousalPick1} alt='..' width={300} style={{height:"25vw"}}/></div> */}
    {/* <div  className='absolute'><span>hello</span></div> */}
    {/* </div> */}
    {/* <div><div className='serviceSnap bg-text'><span><IoIosCut /></span></div></div> */}
    {/* <div><div className='serviceSnap bg-text'><span><IoIosCut /></span></div></div> */}
    {/* <div><div className='serviceSnap bg-text'><span><IoIosCut /></span></div></div> */}
</div>
<div className='bg-image img-4'>
<div className="container bg-text mx-auto pt-2">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick1}/>
      </div>
      <div className="w-1/2 p-1 md:p-2">
      <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick9}/>
      </div>
      <div className="w-full p-1 md:p-2">
      <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick10}/>
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
      <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick4}/>
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick3} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick8} />
      </div>
    </div>
  </div>
</div>

</div>

{/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1T5n7CmGiCQeBIg0bF7_Z84wgJ2jla78&ehbc=2E312F" width="1220" className='bg-text' height="480" aria-controls='false'></iframe> */}

</div>
  )
}
