"use client"
import location from "../images/FLASHMEUP-38.jpg"
import Image from "next/image";
import { NextPage } from "next";
import { Card,CardBody,Button } from "@nextui-org/react";
import { CiClock2, CiGlobe, CiLocationOn, CiPhone } from "react-icons/ci";

const Location:NextPage = () =>{
    return(
        <div>
        <div className="locationMainDiv w-full">
        <div className="flex justify-between p-24">
            <div className="p-16">
                <h3>The place where</h3><h3> we meet soon.</h3>
                <p>LEMO is an electronic and fiber optic connector manufacturer,<br/> based in Écublens, Switzerland.<br/> It is known for producing the push-pull connectors  LEMO connectors <br/> are used in medical, industrial</p><br />
                <button className="locationContactButton focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact Us</button>
            </div>
        <div className="p-24">
            <Image className="varnyaLocationImg" src={location} alt="..." width={500} height={200} /></div>
        </div>
        </div>
        <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/80 max-w-[610px]  m-2 mx-auto"
      shadow="sm"
    >
      <CardBody className="mt-2">
        <div className="locationCard flex">
          <div className="relative cardImg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14036.807744740467!2d77.0552365!3d28.413163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2335817896a5%3A0xf3037ba2ed48c43b!2sVarnya%20Salon!5e0!3m2!1sen!2sin!4v1698405105281!5m2!1sen!2sin" width="300" height="300" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 m-10">
            <span className="addresSpan flex "><CiLocationOn className="mt-1" /> <h4 className="pl-2">varnya salon....</h4></span>
            <span className="stateSpan flex pt-2"><CiGlobe  /><h4 className="pl-2">Gurugram, Haryana India</h4></span>
            <span className="phoneNumber flex pt-2"><CiPhone  /><h4 className="pl-2">9667917771</h4></span>
            <span className="openingHours flex pt-2"><CiClock2  /><h4 className="pl-2">Mon-Sat 09:00 AM to 10:00 PM</h4></span>
          </div>
        </div>
      </CardBody>

      <CardBody className="mt-5">
        <div className="locationCard flex">
          <div className="relative cardImg">
            <Image
              alt="Album cover"
              className="object-cover locationImage"
              height={400}
              src={location}
              width={300}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 m-10">
            <span className="addresSpan flex "><CiLocationOn className="mt-1" /> <h4 className="pl-2">varnya salon....</h4></span>
            <span className="stateSpan flex pt-2"><CiGlobe  /><h4 className="pl-2">Gurugram, Haryana India</h4></span>
            <span className="phoneNumber flex pt-2"><CiPhone  /><h4 className="pl-2">9667917771</h4></span>
            <span className="openingHours flex pt-2"><CiClock2  /><h4 className="pl-2">Mon-Sat 09:00 AM to 10:00 PM</h4></span>
          </div>
        </div>
      </CardBody>

      <CardBody className="mt-5">
        <div className="locationCard flex">
          <div className="relative cardImg">
            <Image
              alt="Album cover"
              className="object-cover locationImage"
              height={400}
              src={location}
              width={300}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 m-10">
            <span className="addresSpan flex "><CiLocationOn className="mt-1" /> <h4 className="pl-2">varnya salon....</h4></span>
            <span className="stateSpan flex pt-2"><CiGlobe  /><h4 className="pl-2">Gurugram, Haryana India</h4></span>
            <span className="phoneNumber flex pt-2"><CiPhone  /><h4 className="pl-2">9667917771</h4></span>
            <span className="openingHours flex pt-2"><CiClock2  /><h4 className="pl-2">Mon-Sat 09:00AM to 10:00PM</h4></span>
          </div>
        </div>
      </CardBody>
    </Card>

    
        </div>
    );
}

export default Location;