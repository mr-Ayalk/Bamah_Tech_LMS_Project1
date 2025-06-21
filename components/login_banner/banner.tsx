import Image from "next/image";

const Banner = () => {
    return ( <div className="">
        <h2 className="text-center text-4xl font-bold mb-3">Welcome to Fortune Tutorial</h2>
        <p className="text-center ml-10">Lorem ipsum dolor sit amesit amet consectetur adipisicing elit. Esse t consectetur adipisicing elit. Esse !</p>
        <Image className="hidden md:flex rounded-4xl ml-10  mb-2"
        src="/BannerImage.png"
           width={600}   
        height={300}
        alt=""
        />
    </div> );
}
 
export default Banner;