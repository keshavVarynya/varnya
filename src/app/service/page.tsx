import { NextPage } from "next";
import Image from "next/image";
import image from "../images/FLASHMEUP-45.jpg";
import serviceFirst from "../images/IMG_7302.jpg";
import schwarzkopf from "../images/schwarzkopf-removebg-preview.png"
import aveda from "../images/Aveda-Logo-removebg-preview.png"
import olaplex from "../images/olaplex-logo-500x500-1.jpg"
import { AiOutlineRight } from "react-icons/ai";

const ServicePage:NextPage = () => {
    return (
    <div className="service">
        <div className="flex justify-around w-100 mt-24">
            <div>
                <div className="contantMainContainer me-4">
                <h1 className="salonServiceContant">
                    Salon Services
                </h1>
                {/* <div>
                <span className="salonServiceConDesc">
                Feel confident knowing you look your best with our salon services. Revitalize your hair with a cut, color, or conditioning treatment from our full menu of hair services.
                </span>
                </div> */}
                <div className="mt-10">
                    <span className="salonServiceName">Hair Cut + Color <AiOutlineRight className="serviceContantIcon" /></span>
                </div>
                <div className="mt-10">
                    <span className="salonServiceName">Bellami Hair Extensions <AiOutlineRight className="serviceContantIcon" /></span>
                </div>
                <div className="mt-10">
                    <span className="salonServiceName">Lashes, Makeup + Brows <AiOutlineRight className="serviceContantIcon" /></span>
                </div>
                <div className="mt-10">
                    <span className="salonServiceName">Nails <AiOutlineRight className="serviceContantIcon" /></span>
                </div>
                <div className="mt-10">
                    <span className="salonServiceName">Waxing <AiOutlineRight className="serviceContantIcon" /></span>
                </div>
                </div>
            </div>
            <div className="serviceImage">
            <Image className="serImg" src={serviceFirst} alt="..." />
            </div>
        </div>
        <div className="flex justify-center w-100 mt-24">
        <div className="contantContainer2">
            <div><span className="serviceContant">
            Rejuvenate tired hands and feet from our comprehensive nail menu, as we have manicures and pedicures that incorporate stone therapy, chakra reflexology and more.
            </span></div>
            <div><span className="serviceContant">
            We also provide waxing, bridal, brow and makeup services, as well as a complete range of specialized services for men.
            </span></div>
        </div>
        </div>
        <div className="flex justify-center mt-10 serviceHeadingContainer">
            <span className="serviceHeading">
                OUR PRODUCT
            </span>
        </div>
        <div className="flex justify-center mt-10">
            <div style={{width:"85%"}}>
                <span className="discriptionHeading">Neroli Salon & Spa is Milwaukee’s Premier Salon and Spa™. </span>
                <span> We invite you to an oasis of tranquility, where our skilled team of professionals will tailor a unique, personal experience to meet your needs. Learn more about the carefully selected products we use in our treatment rooms below.</span>
            </div>
        </div>
        <div className="flex justify-center mt-10">
            <div style={{width:"85%"}}>
                <span>Neroli has five convenient locations in the Milwaukee area, including Downtown, North Shore, East Side, Mequon and Brookfield. To make your reservation, please call Neroli Guest Services at 414-227-2888 or use our online reservation system.</span>
            </div>
        </div>
        <div className="flex serviceCardContainer justify-around mt-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={schwarzkopf} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={aveda} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg serviceCard">
  <Image className="w-full serviceCardImg" src={olaplex} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
    </div>
    </div>

    <div className="flex justify-between mt-10">
        <div className="Img-1 img">
        <Image src={image} alt="..." className="serviceFooterImage" />    
        </div> 
        <div className="Img-2 img">
        <Image src={image} alt="..." className="serviceFooterImage" />    
        </div> 
        <div className="Img-3 img">
        <Image src={image} alt="...." className="serviceFooterImage" />    
        </div> 
        <div className="Img-4 img">
        <Image src={image} alt="...." className="serviceFooterImage" />    
        </div> 
        <div className="Img-4 img">
        <Image src={image} alt="...." className="serviceFooterImage" />    
        </div> <div className="Img-4 img">
        <Image src={image} alt="...." className="serviceFooterImage" />    
        </div> 
    </div>
    </div>
    )
}

export default ServicePage;