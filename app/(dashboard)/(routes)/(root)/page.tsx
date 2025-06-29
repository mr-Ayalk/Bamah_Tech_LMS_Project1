import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";
import { auth, clerkClient } from "@clerk/nextjs/server"
import { CheckCheck, Clock } from "lucide-react";
import { redirect } from "next/navigation";
import { InfoCard } from "./_component/info-card";

export default async function Dashboard() {
  const {userId}=await auth();

  if(!userId){
    return redirect("/");
  }

   const { data } =  await (await clerkClient()).users.getUserList({
  userId: [userId],
});

const user = data?.[0];
  const fullName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;
  
  const {completedCourses,coursesInProgress}=await getDashboardCourses(userId);
  return (
   
   <div className="p-6 space-y-4">
    <h2 className="text-xl   ml-10 mt-1.5 font-bold">Welcome to Our LMS👋 - {fullName}</h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<InfoCard
icon={Clock}
label="In Progress"
numberOfItems={coursesInProgress.length}

/>
<InfoCard
icon={CheckCheck}
label="Completed"
numberOfItems={completedCourses.length}
variant="success"

/>

    </div>
     <CoursesList items={[...coursesInProgress,...completedCourses]}/>
    </div>


 
  )
}