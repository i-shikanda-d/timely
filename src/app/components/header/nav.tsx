import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div>
      <ul className="flex items-center justify-between px-[10vh] py-3">
        <Link href="/">
          <Image src="/timely.svg" alt="timelyLogo" width={16} height={16} />
        </Link>
        <div className="flex space-x-10 items-center text-base font-medium">
          <li>
            <Link href="/anonymous">Anonymous Messages</Link>
          </li>
          <li>
            <Link href="/timely">Timely</Link>
          </li>
        </div>
        <div>
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Sign In
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
