import Image from "next/image";
import Footer from "./components/footer/footer";
import Link from "next/link";
import NavHome from "./components/header/navHome";

export default function Home() {
  return (
    <>
      <NavHome/>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[90vh] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Link href="/">
            <Image
              src="/Timely.png"
              alt="timelyLogo"
              width={240}
              height={38}
              priority
            />
          </Link>
          <div>
            <p>
              The life partner, a{" "}
              <span className="text-red-500">
                <Link href="/">Filmoja</Link>
              </span>{" "}
              and{" "}
              <span className="text-red-500">
                <Link href="/">Trushop</Link>
              </span>{" "}
              Initiative
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/timely"
              rel="noopener noreferrer"
            >
              Timely
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 gap-2"
              href="/anonymous"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/incognito.svg"
                alt=""
                width={20}
                height={20}
              />
              Anonymous Messages
            </a>
          </div>
        </main>
        <div className="row-start-3">
        <Footer/>
        </div>
      </div>
    </>
  );
}
