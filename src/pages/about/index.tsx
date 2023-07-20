import Container from "@/partials/general-ui/container";
import { AppLayout } from "@/layouts";
import { motion } from "framer-motion";
import AnimateY from "@/components/partials/animate-y";
import Image from "next/image";
import aboutHeader from "../../../public/images/about-header-2.jpg";
import missionImage from "../../../public/images/reading-curb.jpg";
import valuesImage from "../../../public/images/reading-couch.jpg";
import AppCTA from "@/components/partials/app-cta";

export default function about() {
  return (
    <Container>
      <AppLayout title="About">
        <div className="mb-24 flex flex-col items-center justify-center gap-y-6 lg:mb-28">
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, type: "tween" }}
            className="headingTwo self-center capitalize"
          >
            About our company
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, type: "tween" }}
            className="pageParagraphs text-center lg:w-[702px]"
          >
            Bookum is a social networking app built to help book content
            creators, readers, and authors connect and discover more meaningful
            bookish conversations.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, type: "tween" }}
            className="flex h-full w-full items-center justify-center"
          >
            <Image
              src={aboutHeader}
              alt="Bookum"
              width={800}
              height={500}
              placeholder="blur"
              blurDataURL={aboutHeader.blurDataURL}
              className="h-full w-full rounded object-cover object-center md:w-5/6 lg:w-2/3"
            />
          </motion.div>
        </div>
        <AnimateY staggerAmount={0.35}>
          <div className="mb-12 flex flex-col items-center justify-center gap-y-6 lg:mb-24 lg:flex-row lg:gap-x-10">
            <div className="flex basis-1/2 flex-col items-center justify-center gap-y-6">
              <h2 className="headingTwo self-start capitalize md:self-center lg:self-start">
                The mission behind Bookum
              </h2>
              <p className="pageParagraphs md:text-center lg:text-left">
                Bookum lies at the very heart of community and storytelling, a
                company that thrives on collaborating with visionary individuals
                who are deeply dedicated to breathing life into extraordinary
                stories and vibrant communities.
              </p>
              <p className="pageParagraphs md:text-center lg:text-left">
                At Bookum, we look to create an environment of transparency,
                collaboration, and passion. We demand diversity in thought,
                story, and team as diversity creates a culture of well-rounded
                ideas.
              </p>
              <p className="pageParagraphs md:text-center lg:text-left">
                Lastly, we look to host open dialogue amongst the larger book
                community and facilitate meaningful and captivating
                conversations.
              </p>
            </div>
            <div className=" h-[500px] w-full basis-1/2 md:flex md:items-center md:justify-center">
              <Image
                src={missionImage}
                alt="Bookum"
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL={missionImage.blurDataURL}
                className="w-full rounded object-cover object-top md:w-5/6 lg:h-full lg:w-full"
              />
            </div>
          </div>
        </AnimateY>
        <AnimateY staggerAmount={0.35}>
          <div className="mb-32 flex flex-col items-center justify-center gap-y-6 lg:flex-row-reverse lg:gap-x-10">
            <div className="flex basis-1/2 flex-col items-center justify-center gap-y-6">
              <h2 className="headingTwo self-start capitalize md:self-center lg:self-start">
                Our values
              </h2>
              <p className="pageParagraphs md:text-center lg:text-left">
                As important as a story is, a story doesn't become important in
                this world without community. Community is the secret sauce of
                the bookish world and Bookum, as a platform, wholeheartedly
                embraces and serves this dynamic community to the highest
                degree. We will participate in the community online and in
                person; on our platform and off of it.
              </p>
              <p className="pageParagraphs md:text-center lg:text-left">
                We will bring the stories to the community that they so richly
                deserve. At our core, we are a bookish company made by book
                lovers for book lovers.
              </p>
            </div>
            <div className="h-[500px] w-full basis-1/2 md:flex md:items-center md:justify-center">
              <Image
                src={valuesImage}
                alt="Bookum"
                width={2000}
                height={1000}
                placeholder="blur"
                blurDataURL={valuesImage.blurDataURL}
                className="w-full rounded object-cover md:w-5/6 lg:h-full lg:w-full"
              />
            </div>
          </div>
        </AnimateY>
        <AppCTA />
      </AppLayout>
    </Container>
  );
}
