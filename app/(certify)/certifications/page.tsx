
import {auth, clerkClient } from "@clerk/nextjs/server";
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { BadgeCheck, Award } from "lucide-react";
import { redirect } from "next/navigation";




const CertificationsPage =async () => {
   const {userId}=await auth();
if(!userId){
    return redirect("/");
  }
const { data } =  await (await clerkClient()).users.getUserList({
  userId: [userId],
});

const user = data?.[0];
  const fullName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;
 


  return (
    <div className="h-full overflow-y-hidden bg-amber-50 flex flex-col pt-30 px-10 items-center justify-center py-10  pb-60 ">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Award className="w-6 h-6 text-yellow-500" />
        Certificate of Completion
      </h1>
      <h2 className="text-amber-300 text-4xl">Bamah Technology</h2>
      <p className="text-center text-lg text-gray-600 mb-8 max-w-xl">
        This certificate is proudly awarded to  <div className="font-semibold text-black underline ">{fullName}</div>  for successfully completing the  
        <div className="font-semibold text-black">Backend Development</div> course.
      </p>

     

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
        <BadgeCheck className="w-5 h-5 text-green-600" />
        Verified by appostilicanswers.com
      </div>
    </div>
  );
};

export default CertificationsPage;