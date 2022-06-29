import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Hamburger from "../../assets/icons/hamburger";
import Close from "../../assets/icons/close";
import Logo from "../../assets/icons/logo";
import useToggle from "../../hooks/useToggle";

const Header = ({ navItems }) => {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useToggle();

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div
      className="absolute top-6 z-[999] flex w-full flex-row items-center justify-between 
                    pl-6 text-sm md:top-0 md:h-24 md:pl-10 lg:mt-10 lg:pl-14"
    >
      <Link href="/">
        <a>
          <Logo className="h-10 w-10 md:h-12 md:w-12" />
        </a>
      </Link>
      <button
        className="absolute right-6 top-2 z-50 md:hidden"
        onClick={handleToggle}
      >
        {navbarOpen ? <Close /> : <Hamburger />}
      </button>
      <div
        className={`${navbarOpen ? "translate-x-0" : "translate-x-full"} 
        fixed inset-0 left-[30%] z-40 bg-white/[0.04] pl-[9%] backdrop-blur-[82px] 
        transition-all md:relative md:inset-0 md:transform-none md:pr-[12%]`}
      >
        <nav>
          <ul className="flex flex-col py-[min(30vh,10rem)] uppercase md:flex-row md:gap-9 md:py-0 lg:gap-12">
            {navItems?.map(({ num, name, route }) => (
              <Link href={route} key={num}>
                <a>
                  <li
                    className={`mb-6 flex h-[31px] items-center border-white transition-all hover:border-white/50 
                              active:border-r-4 active:border-white md:mb-0 md:h-24 
                              md:border-b-[3px] md:border-r-0 md:border-white/0 md:active:border-0 md:active:border-b-[3px] ${
                                router.pathname === route &&
                                "border-r-4 md:border-white"
                              }`}
                  >
                    <div className="flex gap-3">
                      <span className="font-bold md:hidden lg:block">
                        {num}
                      </span>
                      {name}
                    </div>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="absolute left-[11.5vw] z-50 border-t border-white/25 xl:w-[32.85vw] 2xl:w-[36%] 3xl:w-[47%]" />
    </div>
  );
};

export default Header;
