"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const navLinks = [
  {
    label: "Our Projects",
    link: "/our-projects",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <header className="w-full">
      <nav className="w-full flex items-center justify-between py-5">
        <Link href="/" className="text-xl font-bold tracking-wider">
          SpireHaus
        </Link>
        <ul className="flex flex-col gap-y-10 items-center md:hidden">
          {visible ? (
            <XIcon
              onClick={() => setVisible(!visible)}
              className="cursor-pointer"
            />
          ) : (
            <MenuIcon
              className="cursor-pointer"
              onClick={() => setVisible(!visible)}
            />
          )}
          <ul
            className={`
                absolute top-14 p-5 left-0
                flex flex-col bg-bgPrimary
                space-y-5 w-full
                md:hidden
                transform transition-all duration-300 ease-in-out
                ${
                  visible
                    ? "translate-y-0 opacity-100 z-0"
                    : "-translate-y-full opacity-0 invisible z-0"
                }
              `}
          >
            {navLinks.map(({ label, link }, index) => (
              <Link
                href={link}
                key={index}
                className={`${pathname === link ? "text-black" : "text-black/70"} font-semibold lg:text-base`}
              >
                {label}
              </Link>
            ))}
          </ul>
        </ul>
        <ul className="flex space-x-10 items-center xs:hidden md:block">
          {navLinks.map(({ label, link }, index: number) => (
            <Link
              href={link}
              key={index}
              className={`${pathname === link && "text-black"} text-black/70 font-semibold lg:text-base`}
            >
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
