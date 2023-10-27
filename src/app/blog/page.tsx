import { NextPage } from "next";
import Image from "next/image";
import crousalPick from "../images/FLASHMEUP-36.jpg"
import { CiUser } from "react-icons/ci";

const BlogPage:NextPage = () => {
    return (
        <div>
            <div className="m-auto flex justify-center mt-20">
        <div className="flex crousalContainer">
        <div className="photo " >
        <Image className="imageCrousal rounded-md" src={crousalPick} width={500}  alt="crousalImage" /> 
        </div>
        <div className="text-center flex flex-col justify-center ms-10 me-10">
            <div className="pt-10"><span className="underline underline-offset-1 font-normal text-sm">AROUND THE WORLD</span></div>
            <div>
            <span className="font-normal">I'm a paragraph. <br></br>Click here to add your own text and edit me.<br></br> Let your users get to know you.</span>
            </div>
        </div>
        </div>
        </div>
        <div className="flex w-full mt-20 justify-around flex-wrap lg:flex-nowrap">
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
        </div>
        <div className="mt-10 flex justify-center">
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
        </div>
        </div>
    )
}

export default BlogPage;