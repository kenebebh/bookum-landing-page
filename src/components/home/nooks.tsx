import React from "react";
import Container from "../partials/container";
import AnimateX from "../partials/animate-x";
import AnimateY from "../partials/animate-y";

export default function Nooks() {
  return (
    <section className="mt-20">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-120px lg:gap-y-0">
          <div className="space-y-10 place-self-center">
            <AnimateY staggerAmount={0.25}>
              <h2 className="font-heading text-heading-4 capitalize text-secondary sm:text-heading-3 lg:text-5xl">
                Real time audio experience with nooks
              </h2>
            </AnimateY>
            <AnimateY staggerAmount={0.35}>
              <p className="text-accent lg:text-body-lg">
                Nooks in Bookum are a way to virtually meet and interact with
                fellow readers and authors alike. You can schedule these audio
                meetups within Bookum and discuss your favorite topics and the
                latest book news.
              </p>
            </AnimateY>
          </div>

          <AnimateX staggerAmount={0.25} direction={40}>
            <div className="flex h-[655px] items-center justify-center rounded-3xl bg-gradient-2 bg-cover bg-no-repeat">
              <div className="h-[428px] w-[209px] sm:h-[547px] sm:w-[267px]">
                <img
                  // srcSet="/images/nooks-showcase-mobile.png 209w, /images/nooks-showcase.png 268w"
                  // sizes="(max-width: 640px) 209px, 268px"
                  src="/images/nooks-showcase.png"
                  alt="Nooks in Bookum"
                />
              </div>
            </div>
          </AnimateX>
        </div>
      </Container>
    </section>
  );
}
