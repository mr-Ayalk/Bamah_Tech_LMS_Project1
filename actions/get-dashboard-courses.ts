import { db } from "@/lib/db";
import { Category, Chapter, Course } from "@prisma/client"
import { getProgress } from "@/actions/get-progress";


type CourseWithProgressWithCategory=Course&{
    category:Category;
    chapters:Chapter[];
    progress:number|null;
};

type DashboardCourses={
    completedCourses:CourseWithProgressWithCategory[];
    coursesInProgress:CourseWithProgressWithCategory[];
}


export const getDashboardCourses =async(userId:string):Promise<DashboardCourses>=>{
    try {
        const purchaseddCourses=await db.purchase.findMany({
            where:{
                userId:userId,
            },
            select:{
                course:{
                    include:{
                        category:true,
                        chapters:{
                            where:{
                                isPublished:true,
                            }
                        }
                    }
                }
            }
        });


        const courses=purchaseddCourses.map((purchase)=>purchase.course)as CourseWithProgressWithCategory[];
        for(let course of courses){
const progress=await getProgress(userId,course.id);
course["progress"]=progress;
        }

const completedCourses=courses.filter((course)=>course.progress===100);

const coursesInProgress=courses.filter((course)=>(course.progress?? 0)<100);

return{
    completedCourses,
    coursesInProgress
}
    } catch (error) {
        console.log("[GET_DASHBOARD_COURSES]",error);
        return {
            completedCourses:[],
    coursesInProgress:[],
        }
    }

}