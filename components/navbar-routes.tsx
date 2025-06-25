"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Bell, LogOut } from "lucide-react";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
const isSearchPage= pathname==="/search";
  return (
    <>
{isSearchPage &&(
  <div className="hidden md:block">
    <SearchInput />
  </div>
)}

    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/notification">
          <Bell className="w-8 h-7 text-green-700 hover:text-black mr-10" />
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
    </>
  );
};
