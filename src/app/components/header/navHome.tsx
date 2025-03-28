import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavHome = () => {
  return (
    <div className="items-center w-full py-4">
      <ul className="flex justify-around items-center">
        <li>
          <Link href="/">
            <Image src="/Timely.png" alt="timelyLogo" width={84} height={84} />
          </Link>
        </li>
        <li>
          <Link
            href="../api/auth/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavHome;
