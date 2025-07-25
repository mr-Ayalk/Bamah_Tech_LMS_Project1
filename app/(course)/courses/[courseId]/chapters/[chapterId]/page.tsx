import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";

import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";
import { CourseEnrollButton } from "./_components/course-enroll-button";
import { CourseProgressButton } from "./_components/course-progress-button";
export interface PageProps {
  params: {
    courseId: string;
    chapterId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}
const ChapterIdPage =async ({params}:PageProps) => {
        

        const {userId}=await auth();
        if(!userId){
            return redirect("/");
        }

        const {chapter,course,muxData,attachments,nextChapter,userProgress,purchase}=await getChapter({
            userId,
            chapterId: (await params).chapterId,
            courseId:(await params).courseId,
        }) 

        if(!chapter || !course){
            return redirect("/");
        }

        const isLocked =!chapter.isFree && !purchase;
        const completedOnEnd=!!purchase && !userProgress?.isCompleted;



        
    return ( 
        <div className="">

          {userProgress?.isCompleted&&(
            <Banner
            variant="success"
            label="You already completed this chapter."
            />
          )}
          {isLocked &&(
            <Banner
            variant="warning"
            label="You need to purchase this course to watch this chapter."
            />
          )}
          <div className="flex flex-col max-w-4xl mx-auto pb-20 ">
              {/* <div className="aspect-video w-full max-h-[600px] overflow-hidden"> */}
            <div className="p-4">
                <VideoPlayer
                chapterId={(await params).chapterId}
                title={chapter.title}
                courseId={(await params).courseId}
                nextChapterId={nextChapter?.id}
                playbackId={muxData?.playbackId!}
                isLocked={isLocked}
                completedOnEnd={completedOnEnd}
                />
            </div>
            <div >
              <div className="p-4 flex flex-col md:flex-row items-center justify-between ">
                <h2 className="text-2xl font-semibold mb-2">
{chapter.title}
                </h2>


                {purchase?(
                 <CourseProgressButton
                 chapterId={(await params).chapterId}
                 courseId={(await params).courseId}
                 nextChapterId={nextChapter?.id}
                 isCompleted={!!userProgress?.isCompleted}
                 
                 />
                ):(
                  <CourseEnrollButton
                  courseId={(await params).courseId}
                  price={course.price!}
                  />
                )}
              </div>
              <Separator/>
           <div className="">
            <Preview value={chapter.description!}/>
           </div>
            
         
          {!!attachments.length &&(
            <>
            <Separator/>
            <div className="p-4">
              {attachments.map((attachment)=>(
                <a
                href={attachment.url}
                target="_blank"
                key={attachment.id}
                className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                >
                  <File/>
                  <p className="line-clamp-1">
{attachment.name}
                  </p>

                </a>
              ))}
              
            </div>
           
            </>
           
             
          )

          }
            </div>
          </div>
        </div>
     );
};
 
export default ChapterIdPage;










// import { getChapter } from "@/actions/get-chapter";
// import { Banner } from "@/components/banner";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { VideoPlayer } from "./_components/video-player";
// import { Separator } from "@/components/ui/separator";
// import { Preview } from "@/components/preview";
// import { File } from "lucide-react";
// import { CourseEnrollButton } from "./_components/course-enroll-button";
// import { CourseProgressButton } from "./_components/course-progress-button";

// export default async function ChapterIdPage({params}:PageProps) {
//   const { userId } = await auth();
//   if (!userId) return redirect("/");

//   const { chapter, course, muxData, attachments, nextChapter, userProgress, purchase } =
//     await getChapter({
//       userId,
//       courseId: params.courseId,
//       chapterId: params.chapterId,
//     });

//   if (!chapter || !course) return redirect("/");

//   const isLocked = !chapter.isFree && !purchase;
//   const completedOnEnd = !!purchase && !userProgress?.isCompleted;

//   return (
//     <div>
//       {userProgress?.isCompleted && (
//         <Banner variant="success" label="You already completed this chapter." />
//       )}
//       {isLocked && (
//         <Banner
//           variant="warning"
//           label="You need to purchase this course to watch this chapter."
//         />
//       )}
//       <div className="flex flex-col max-w-4xl mx-auto pb-20">
//         <div className="p-4">
//           <VideoPlayer
//             chapterId={params.chapterId}
//             title={chapter.title}
//             courseId={params.courseId}
//             nextChapterId={nextChapter?.id}
//             playbackId={muxData?.playbackId!}
//             isLocked={isLocked}
//             completedOnEnd={completedOnEnd}
//           />
//         </div>
//         <div>
//           <div className="p-4 flex flex-col md:flex-row items-center justify-between">
//             <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
//             {purchase ? (
//               <CourseProgressButton
//                 chapterId={params.chapterId}
//                 courseId={params.courseId}
//                 nextChapterId={nextChapter?.id}
//                 isCompleted={!!userProgress?.isCompleted}
//               />
//             ) : (
//               <CourseEnrollButton courseId={params.courseId} price={course.price!} />
//             )}
//           </div>
//           <Separator />
//           <Preview value={chapter.description!} />
//           {!!attachments.length && (
//             <>
//               <Separator />
//               <div className="p-4">
//                 {attachments.map((attachment) => (
//                   <a
//                     href={attachment.url}
//                     target="_blank"
//                     key={attachment.id}
//                     className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
//                   >
//                     <File />
//                     <p className="line-clamp-1">{attachment.name}</p>
//                   </a>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
