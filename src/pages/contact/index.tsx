import React from "react";
import Container from "@/partials/general-ui/container";
import { AppLayout } from "@/layouts";
import { motion } from "framer-motion";
import AnimateY from "@/components/partials/animate-y";
import Call from "@/components/icons/call";
import EmailIcon from "@/components/icons/mail";

export default function index() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.6,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 90 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="mt-20">
      <AppLayout title="Contact Us">
        <Container>
          <AnimateY staggerAmount={0.35}>
            <div className="mb-24 flex flex-col items-center justify-center gap-y-6 lg:mb-28">
              <h2 className="headingTwo self-center">Contact us</h2>
              <p className="pageParagraphs w-[293px] text-center md:w-[740px]">
                Reach out to us if you have further questions or enquiries
              </p>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className=" grid grid-cols-1  gap-y-16 md:grid-cols-2  md:gap-x-8 lg:grid-cols-2 "
            >
              <motion.section
                variants={item}
                className="flex flex-col gap-y-4 p-6  shadow-card"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                  <EmailIcon />
                </div>
                <h3 className="headingThree">Email us</h3>
                <p className="pageParagraphs max-w-[291px]">
                  Shoot us an email, we reply as soon as possible
                </p>
                <a
                  href="mailto:support@bookumapp.com"
                  className="text-primary hover:underline"
                >
                  Send us an email
                </a>
              </motion.section>
              <motion.section
                variants={item}
                className="flex flex-col gap-y-4 p-6 shadow-card"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                  <Call />
                </div>
                <h3 className="headingThree">Call us</h3>
                <p className="pageParagraphs">
                  Mon - Fri
                  <span className="hidden lg:inline">,&nbsp;</span>
                  <span className="block lg:inline">07:00 - 18:00</span>
                </p>
                <a
                  href="tel:++1-303-854-8079"
                  className="text-primary hover:underline"
                >
                  +1-303-854-8079
                </a>
              </motion.section>
              {/* <motion.section
                  variants={item}
                  className="flex flex-col gap-y-4 p-6  shadow-card"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                    <Location />
                  </div>
                  <h3 className="headingThree">Pay us a visit</h3>
                  <p className="pageParagraphs">
                    111-222 Dummy Road
                    <span className="block">City E3 4PB</span>{" "}
                  </p>
                  <a href="#" className="text-primary">
                    Get directions
                  </a>
                </motion.section> */}
            </motion.div>
          </AnimateY>
        </Container>
      </AppLayout>
    </section>
  );
}
