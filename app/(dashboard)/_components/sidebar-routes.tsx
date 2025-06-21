"use client";
import { Compass, Layout, MessageCircle,
  MessagesSquare,
  GraduationCap,
  Award,
  Trophy,
  Crown,
  HelpCircle, } from "lucide-react";
import { SidebarItem } from "./sidebar-item";


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
     {
    icon: Award,
    label: "Certifications",
    href: "/certifications",
  },
  { icon: Trophy,
     label: "Achievements", href: "/achievements" },
       { icon: GraduationCap, 
    label: "Teacher Mode", 
    href: "/teacher" },
  { icon: HelpCircle,
     label: "Support",
      href: "/support" },
       {
    icon: Crown,
    label: "Premium Features",
    href: "/premium",
  },
  
]

export const SidebarRoutes=()=>{
    const routes=guestRoutes;
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