import React from "react";
import Link from "next/link";
import Container from "./container";
import LinkedIn from "../icons/linkedin";
import Twitter from "../icons/twitter";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";

export default function Footer() {
  const currentYear = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="mt-120px bg-grey py-20">
      <Container>
        <section className="flex flex-col justify-between gap-y-10 lg:flex-row lg:gap-y-0">
          <div className="flex flex-col gap-y-6">
            <Link href="/">
              <div className="h-[64px] w-[64px]">
                <img
                  className="object-cover"
                  src="/images/bookum-logo.png"
                  alt="Bookum Logo"
                />
              </div>
            </Link>
            <p className="text-accent">
              Bookum: Where bookish conversations happen
            </p>
          </div>

          <div className="flex flex-wrap gap-x-28">
            <div className="space-y-5">
              <h3 className="font-heading text-xl font-semibold text-secondary">
                Company
              </h3>
              <ul className="space-y-4 text-accent">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                {/* <li>
                  <Link href="/faqs">FAQ'S</Link>
                </li> */}
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="font-heading text-xl font-semibold text-secondary">
                Legal
              </h3>
              <ul className="space-y-4 text-accent">
                <Link href="/privacy-policy">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
            <div className="mt-8 space-y-5 sm:mt-0">
              <h3 className="font-heading text-xl font-semibold text-secondary">
                Connect with us
              </h3>
              <ul className="space-y-4 text-accent">
                <li>
                  <a href="mailto:support@bookumapp.com">
                    support@bookumapp.com
                  </a>
                </li>
                <li className="flex items-center gap-x-6">
                  <a href="https://www.linkedin.com/company/bookuminc/">
                    <LinkedIn />
                  </a>

                  <a href="https://twitter.com/BookumApp">
                    <Twitter />
                  </a>

                  <a href="#">
                    <Facebook />
                  </a>
                  <a href="#">
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
      <p className="mt-14 text-center text-sm">
        Copyright © Bookum Inc {currentYear}. All rights reserved.
      </p>
    </footer>
  );
}
