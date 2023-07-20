"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import PlayStore from "../icons/playstore";
import AppStore from "../icons/appstore";
import Container from "./container";
import AnimateY from "./animate-y";
import WaitlistForm from "./waitlist-form";

export default function AppCTA() {
  return (
    <section className="mt-20 w-full lg:mt-80">
      <Container>
        <AnimateY staggerAmount={0.1}>
          <div className="relative flex w-full flex-col justify-center gap-y-10 rounded-3xl bg-gradient-1 bg-cover bg-no-repeat px-12 pt-16 sm:px-16 sm:pt-24 md:px-20 lg:pb-24">
            <div className="space-y-10 text-center lg:text-left">
              <h1 className="text-center font-heading text-xl capitalize text-white sm:text-5xl lg:w-2/4 lg:text-left">
                {/* Get Bookum today and unleash your reading passion! */}
                Join The Bookum Waitlist Today!
              </h1>

              {/* <div className="flex flex-col justify-center gap-x-4 gap-y-4 sm:flex-row sm:gap-y-0 lg:justify-start">
                <button className="flex items-center justify-center gap-x-3 rounded-md bg-secondary px-4 py-2 text-white shadow-md sm:justify-start">
                  <PlayStore />
                  <div className=" text-left ">
                    <small className="text-xs uppercase">Get it on</small>
                    <p className="font-semibold sm:text-[18px]">
                      Google Playstore
                    </p>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-x-3 rounded-md bg-secondary px-4 py-2 text-white shadow-md sm:justify-start">
                  <AppStore />
                  <div className=" text-left ">
                    <small className="text-xs uppercase">
                      Download it on the
                    </small>
                    <p className="font-semibold sm:text-[18px]">App Store</p>
                  </div>
                </button>
              </div> */}

              {/* <WaitlistForm id="waitlist_form_cta" color="text-white" /> */}
              <Link href="/beta-testing">
                <button
                  className={`mt-6 rounded-md bg-secondary px-4 py-3  font-semibold capitalize text-white transition-all duration-300 hover:bg-secondary/80`}
                >
                  Become a beta tester
                </button>
              </Link>
            </div>

            <div className="z-10 mx-auto lg:absolute lg:bottom-0 lg:right-20">
              <img
                className="w-full object-cover lg:h-[630px] lg:w-[400px]"
                src="/images/cta-app-showcase.png"
                alt="Download Bookum today"
              />
            </div>
          </div>
        </AnimateY>
      </Container>
    </section>
  );
}
