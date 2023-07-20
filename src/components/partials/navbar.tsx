"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Container from "./container";
import HamburgerMenu from "../icons/hamburger-menu";
import Close from "../icons/close";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  // { name: "FAQ's", href: "/faqs" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // const handleScroll = () => {
  //   const element = document.getElementById("waitlist_form_cta");
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //       inline: "nearest",
  //     });
  //   }
  //   setMenuOpen(false);
  // };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="border-bottom fixed z-30 w-full border border-slate-50 bg-white shadow-sm">
      <Container>
        <div className="z-20 flex items-center justify-between py-6">
          <Link href="/">
            <div className="h-[18px] w-[97px]">
              <img
                className="object-cover"
                src="/images/bookum-wordmark-logo.png"
                alt="Bookum Logo"
              />
            </div>
          </Link>
          <ul className="hidden gap-x-12 text-secondary lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  className={`${
                    !isActive ? "font-normal" : "font-semibold"
                  } transition-all duration-100 hover:font-semibold`}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>

          <Link href="/beta-testing">
            <button
              // onClick={handleScroll}
              className="hidden rounded-md bg-primary px-4 py-3 font-semibold capitalize text-white transition-all duration-300 hover:bg-primary/80 lg:block"
            >
              Get early access
            </button>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="rounded-[4px] bg-primary px-2 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-primary/80 lg:hidden"
          >
            {!menuOpen ? <HamburgerMenu /> : <Close />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -250 }}
          className="z-10 mx-auto px-6  sm:max-w-2xl sm:px-8 md:max-w-3xl"
        >
          <div className="w-full space-y-7 bg-white py-6 text-secondary lg:hidden">
            <ul className="space-y-7  text-xl">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li onClick={() => setMenuOpen(false)} key={link.name}>
                    <Link
                      className={`${
                        isActive ? "font-semibold" : "font-normal"
                      } transition-all duration-100 hover:font-semibold`}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link href="/beta-testing">
              <button
                // onClick={handleScroll}
                className="mt-6 rounded-md bg-primary px-4 py-3 font-semibold capitalize text-white transition-all duration-300 hover:bg-primary/80 lg:block"
              >
                Get early access
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
