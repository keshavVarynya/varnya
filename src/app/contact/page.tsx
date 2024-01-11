import { NextPage } from "next";
import location from "../images/FLASHMEUP-38.jpg"
import Image from "next/image";
import { BiMailSend, BiPhoneCall, BiSolidMap, BiWorld } from "react-icons/bi";

const contact:NextPage = () => {
    return (
        <div className="width-full mt-8 bg-white" id="contant">
            <div className="ContactContainer col-3 mx-auto" >
                <h5 className="contactHeading">Contact US</h5>
            </div>
            <div className="ContactInformation mx-auto flex justify-around">
                <div className="ContactInformation-1">
                <div>
                <BiSolidMap className="mt-1 absolute" /> <h5 className="ms-6">Address: </h5>
                    <span className="ms-9">Shop number 11, Eros City Square, Rosewood City Rd</span><br></br>
                    <span className="ms-9"> Sector 49, Gurugram</span>
                </div>
                <div className="mt-3">
                <BiPhoneCall className="mt-1 absolute" /> <h5 className="ms-6">Phone: </h5>
                    <span className="ms-9">+91-9667917771</span>
                </div>
                <div className="mt-3">
                <BiMailSend className="mt-1 absolute" /> <h5 className="ms-6">EMAIL: </h5>
                    <span className="ms-9">hello@varnya.care</span>
                </div>
                <div className="mt-3">
                <BiWorld className="mt-1 absolute" /> <h5 className="ms-6">WEBSITE: </h5>
                    <span className="ms-9">hello@varnya.care</span>
                </div>
                </div>
                <div className="ContactInformation-2">
                <Image src={location} className="varnyaImage" width={500} height={500} alt="..." />
                </div>
            </div>
        </div>
    )
}

export default contact;