"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";


interface CourseProgressButtonProps{
    chapterId:string;
    courseId:string;
    isCompleted?:boolean;
    nextChapterId?:string;
}
export const CourseProgressButton=({
    chapterId,
    courseId,
    isCompleted,
    nextChapterId
}:CourseProgressButtonProps)=>{

    const router=useRouter();
    const confetti=useConfettiStore();
    const [isLoading,setIsLoading]=useState(false);

const onClick=async ()=>{
    try{
        setIsLoading(true);
        await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`,{
            isCompleted:!isCompleted
        });
        if(!isCompleted && !nextChapterId){
            confetti.onOpen();
        }
        if(!isCompleted && nextChapterId){
            router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
        }
        toast.success("Progress updated");
        router.refresh();

    }catch{
        toast.error("Something went wrong");
    }finally{
        setIsLoading(false);
    }

}

    const Icon=isCompleted?XCircle:CheckCircle
  return (
   <Button
   type="button"
   onClick={onClick}
   disabled={isLoading}
   variant={isCompleted?"outline":"success"}
   className="w-full md:w-auto"
   
   >
    {isCompleted? "Not completed" :"Mark as Complete"}
    <Icon className="h-4 w-4 ml-2"/>
   </Button>
  )
}
