import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import Banner from "@/components/login_banner/banner";

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return ( 
    <div className=" h-screen overflow-y-hidden">
     
      
      <Header/>
      <div className="mt-15   w-full flex flex-row gap-20 ">
 <div  className="w-1/2"><Banner/></div>
<div className="w-1/2"  >{children}</div>
      </div>
      <Footer/>
    </div>
    
   );
}
 
export default AuthLayout;