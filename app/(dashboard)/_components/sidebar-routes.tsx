"use client";
import { Compass, Layout, MessageCircle,
  MessagesSquare,
  GraduationCap,
  Award,
  Trophy,
  Crown,
  School,
  SearchCheck,
  HelpCircle,
  List,
  BarChart, } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { isTeacher } from "@/lib/teacher";
import { useAuth } from "@clerk/nextjs";

const guestRoutes=[
{
    icon: Layout,
    label: "Dashboard",
    href: "/",
},
{
    icon: Compass,
    label: "Courses",
    href: "/search",
},
{ icon: MessageCircle,
     label: "Chat", 
     href: "/chat" },
      { icon: SearchCheck,
        label: "Exam Results", 
        href: "/results" },
     {
    icon: Award,
    label: "Certifications",
    href: "/certifications",
  },
  { icon: Trophy,
     label: "Achievements",
      href: "/achievements" },

  { icon: HelpCircle,
     label: "Support",
      href: "/support" },
       {
    icon: Crown,
    label: "Premium Features",
    href: "/premium",
  },
  
];
const guestRouteswithaccess=[
{
    icon: Layout,
    label: "Dashboard",
    href: "/",
},
{
    icon: Compass,
    label: "Courses",
    href: "/search",
},
{ icon: MessageCircle,
     label: "Chat", 
     href: "/chat" },
      { icon: SearchCheck,
        label: "Exam Results", 
        href: "/results" },
     {
    icon: Award,
    label: "Certifications",
    href: "/certifications",
  },
  { icon: Trophy,
     label: "Achievements",
      href: "/achievements" },

  { icon: GraduationCap, 
    label: "Teacher Mode", 
    href: "/teacher/courses" },
  { icon: HelpCircle,
     label: "Support",
      href: "/support" },
       {
    icon: Crown,
    label: "Premium Features",
    href: "/premium",
  },
  
];
const teacherRoutes=[
  {
    icon: List,
    label: "Courses",
   href: "/teacher/courses",
},
{
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
},
 {
    icon: Award,
    label: "Result Grading",
    href: "/teacher/resultgrading",
  },
]


export const SidebarRoutes=()=>{


  const pathname=usePathname();
  const {userId}=useAuth();
  const guestRoutescheck=isTeacher(userId)? guestRouteswithaccess :guestRoutes;
  const isTeacherPage=pathname?.includes("/teacher");

    const routes=isTeacherPage ? teacherRoutes:  guestRoutescheck;
    return(
        <div className="flex flex-col w-full">
           {routes.map((route)=>(

            <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
            />
           ))
           }
        </div>
    );
}