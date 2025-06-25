// import Image from "next/image";
import { Button } from "../ui/button";

const Banner = () => {
    return ( <div className="">
        <h2 className="text-center   text-4xl font-bold mb-3 text-orange-400">Welcome to Fortune Tutorial</h2>

  <h2 className="text-center text-3xl font-bold mb-3">
        Learn Today, Lead Tomorrow.</h2>

        <p className="text-center ml-10">Lorem ipsum dolor sit amesit amet consectetur adipisicing elit. Esse t consectetur adipisicing elit. Esse ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facere accusantium repellendus voluptatem exercitationem. Magnam quas, natus sunt atque laboriosam consequatur! Dolorem odit sapiente modi. Optio quos amet nobis dignissimos?</p>

 <h2 className="text-center text-3xl font-bold mt-10 mb-3">Unlock Your Potential with Fortune Tutoria</h2>
        {/* <Image className="hidden md:flex rounded-4xl ml-10  mb-2"
        src="/BannerImage.png"
           width={600}   
        height={300}
        alt=""
        /> */}
    <Button className="ml-40 mt-20">Sign in to our Learning Managment System</Button>
    </div> );
}
 
export default Banner;