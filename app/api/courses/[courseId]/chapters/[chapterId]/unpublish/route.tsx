import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req:Request,
     context: { params: Promise<{ courseId: string; chapterId: string }> }
){
 const { params } = context;
  const resolvedParams = await params;

  try{
const {userId} =await auth();
if(!userId){
    return new NextResponse("Unauthorized", {status:401})
}

const ownCourse = await db.course.findUnique({
    where: {
        id: resolvedParams.courseId,
        userId
    }
});

if(!ownCourse){
    return new NextResponse("Unauthorized", {status:401})
}






const unpublishedChapter = await db.chapter.update({
     where: {
          id: resolvedParams.chapterId,
          courseId: resolvedParams.courseId,
        },
        data: {
          isPublished: false,
        },
});

const publishedChapterInCourse = await db.chapter.findMany({
    where: {
        courseId : resolvedParams.courseId,
        isPublished:true,
    }
});

if(!publishedChapterInCourse.length){
    await db.course.update({
        where: {
           // id:(await params).courseId,
            id:resolvedParams.courseId,
        },
        data: {
            isPublished: false,
        }
    })
}




return NextResponse.json(unpublishedChapter);
  }catch(error){
    console.log("CHAPTER_PUBLISH",error);
    return new NextResponse("Internal Error", {status:500});
  }
}
