import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

interface InfoCardProps{
    numberOfItems:number;
    variant?:"default"| "success";
    label:string;
    icon:LucideIcon;
}

export const InfoCard=({numberOfItems,variant,label,
    icon:Icon
}:InfoCardProps)=>{
    return(
        <div className="border rounded-md flex items-center gap-x-2 p-3">
            <IconBadge
            variant={variant}
            icon={Icon}
            />
            <div className="">
                <p className="font-medium">
{label}
                </p>

                <p className="text-gray-500 text-sm">
                    {numberOfItems} {numberOfItems===1? "Course":"Courses"}
                </p>
            </div>
        </div>
    )
}