import { NextPage } from "next";
import Image from "next/image";
import crousalPick from "../images/FLASHMEUP-36.jpg"
import { CiUser } from "react-icons/ci";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

const BlogPage:NextPage = () => {
    return (
        <div>
          <div className="blogPage flex mt-20">
            
        <div className="mX-auto  justify-end  Blogs">
        <div className="flex-col crousalContainer justify-end">
        <div className="photo " >
        <Image className="imageCrousal mx-auto rounded-md w-fit" src={crousalPick} width={500}  alt="crousalImage" /> 
        </div>
        <div className=" flex flex-col justify-center ms-10 me-10 HairOiling">
            <div className="mx-auto"><span className="underline underline-offset-8 leading-10 tracking-wide font-bold text-base text-stone-900 blogContentHeading">Hair Oiling: A Comeback</span></div>
            <div className="mt-5 mx-auto">
            <span className="font-normal leading-relaxed text-stone-900 tracking-wide blogContent">Hair oiling is one of the oldest tricks.. </span>
            
            </div>
            <div className="mx-auto"><button className="blogButton"><Link className="font-normal text-2xl" href="/blog/Hair-Oiling_blog"><FaAngleRight className="buttonBlog" />
</Link></button></div>
        </div>
        
        </div>
        </div>
        <div className="mX-auto Blogs">
        <div className="flex crousalContainer flex-col justify-start">
        <div className="photo mx-auto" >
        <Image className="imageCrousal rounded-md w-fit" src={crousalPick} width={500}  alt="crousalImage" /> 
        </div>
        <div className=" flex flex-col justify-center ms-10 me-10 HairOiling">
            <div className="mx-auto"><span className="underline underline-offset-8 leading-10 tracking-wide font-bold text-base text-stone-900 blogContentHeading">HAIR SPA - NEED AND IMPORTANCE</span></div>
            <div className="mt-5">
            <span className="font-normal leading-relaxed text-stone-900 tracking-wide blogContent">Are you someone who feels the need to style their hair.. </span><br></br>
            
            </div>
            <div className="mx-auto"><button className="blogButton"><Link className="font-normal text-2xl" href="/blog/Hair_Spa"><FaAngleRight className="buttonBlog" />
</Link></button></div>
        </div>
        </div>
        </div>
        <div className="mX-auto Blogs">
        <div className="flex crousalContainer flex-col justify-start">
        <div className="photo mx-auto" >
        <Image className="imageCrousal rounded-md w-fit" src={crousalPick} width={500}  alt="crousalImage" /> 
        </div>
        <div className=" flex flex-col justify-center ms-10 me-10 HairOiling">
            <div className="mx-auto"><span className="underline underline-offset-8 leading-10 tracking-wide font-bold text-base text-stone-900 blogContentHeading">No Chemical Facials</span></div>
            <div className="mt-5">
            <span className="font-normal leading-relaxed text-stone-900 tracking-wide blogContent">Let’s dive deep into it to give you a clearer picture.</span><br></br>
            
            </div>
            <div className="mx-auto"><button className="blogButton"><Link className="font-normal text-2xl" href="/blog/No_Chemical_Fachials"><FaAngleRight className="buttonBlog" />
</Link></button></div>
        </div>
        </div>
        </div>
        </div>
        {/* <div className="flex w-full mt-20 justify-around flex-wrap lg:flex-nowrap">
            <div className="blogSmall">
            
        <div className="locationCard flex flex-wrap lg:flex-nowrap">
          <div className="relative cardImg">
            <Image
              alt="Album cover"
              className="object-cover blogCardImg"
              height={400}
              src={crousalPick}
              width={300}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 m-10">
            <span className="addresSpan flex "><h4 className="pl-2">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h4></span>
          </div>
        </div>
      
            </div>
            <div className="blogSmall">
            
            <div className="locationCard flex flex-wrap lg:flex-nowrap">
              <div className="relative cardImg">
                <Image
                  alt="Album cover"
                  className="object-cover blogCardImg"
                  height={400}
                  src={crousalPick}
                  width={300}
                />
              </div>
    
              
              <div className="flex flex-col col-span-6 md:col-span-8 m-10">
            <span className="addresSpan flex "><h4 className="pl-2">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h4></span>
              
              </div>
            </div>
          
                </div>
        </div> */}
        {/* <div className="mt-10 flex justify-center">
        <div className="flex flex-col bg-white blogContainer">
        <Image src={crousalPick} alt="..." className="blogImg" />
        <div className="flex mx-10 mt-5">
            <span >
             <CiUser className="rounded-full blogWriter" />
            </span >
            <span className="ps-2"> Admin</span>
            
        </div>
        <div className="mx-10 mt-5">
        <h4>The Girl from Ipanema</h4>
        </div>

        <div className="mx-10 mt-5">
        <h4>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h4>
        </div>
        
        </div>
        </div> */}
        </div>
    )
}

export default BlogPage;