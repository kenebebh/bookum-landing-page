"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PlayStore from "../icons/playstore";
import AppStore from "../icons/appstore";
import WaitlistForm from "../partials/waitlist-form";
import Container from "../partials/container";

export default function Hero() {
  return (
    <Container>
      <section className="flex flex-col items-center gap-y-20 text-center lg:flex-row lg:gap-y-0 lg:text-left">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-8"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="font-heading text-heading-4 text-secondary sm:text-hero sm:leading-hero"
          >
            Where <span className="text-primary">Bookish</span> Conversations
            Happen
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.65 }}
            className="mx-auto text-sm text-accent sm:w-3/4 sm:text-base lg:mx-0"
          >
            At Bookum, we believe in the transformative power of books. We are
            on a mission to promote a thriving reading culture and connect
            readers with engaging community and exhilarating storytellers all on
            one centralized platform.
          </motion.p>
          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85 }}
            className="flex flex-col justify-center gap-x-4 gap-y-4 sm:flex-row sm:gap-y-0 lg:justify-start"
          >
            <button className="flex items-center justify-center gap-x-3 rounded-md bg-secondary px-4 py-2 text-white shadow-md sm:justify-start">
              <PlayStore />
              <div className="hidden text-left sm:block">
                <small className="text-xs uppercase">Get it on</small>
                <p className="text-[18px] font-semibold">Google Playstore</p>
              </div>
              <span className="font-semibold sm:hidden">
                Get it on Playstore
              </span>
            </button>
            <button className="flex items-center justify-center gap-x-3 rounded-md bg-secondary px-4 py-2 text-white shadow-md sm:justify-start">
              <AppStore />
              <div className="hidden text-left sm:block">
                <small className="text-xs uppercase">Download it on the</small>
                <p className="text-[18px] font-semibold">App Store</p>
              </div>
              <span className=" text-center font-semibold sm:hidden">
                Download it on the App Store
              </span>
            </button>
          </motion.div> */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85 }}
          >
            {/* <WaitlistForm id="waitlist_form" /> */}
            <Link href="/beta-testing">
              <button
                className={`mt-6 rounded-md bg-primary px-4 py-3 font-semibold capitalize text-white transition-all duration-300 hover:bg-primary/80`}
              >
                Join our beta testing program
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <div>
          <div className="h-[370px] w-[370px] rounded-full bg-gradient-1 sm:h-[500px] sm:w-[500px]">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mx-auto w-full"
            >
              <img
                className="mx-auto object-cover"
                srcSet="/images/hero-app-showcase.png 269w, /images/hero-app-showcase.png 418w"
                sizes="(max-width: 640px) 269px, 418px"
                src="/images/hero-app-showcase.png"
                alt="Bookum app showcase"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
}
