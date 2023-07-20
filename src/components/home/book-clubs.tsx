import React from "react";
import Container from "../partials/container";
import Money from "../icons/money";
import AnimateX from "../partials/animate-x";
import AnimateY from "../partials/animate-y";

export default function BookClubs() {
  return (
    <section className="mt-120px pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-120px lg:gap-y-0">
          <div className="order-last lg:order-first">
            <AnimateX staggerAmount={0.25} direction={-40}>
              <div className="flex h-[655px] items-center justify-center rounded-3xl bg-gradient-1 bg-cover bg-no-repeat">
                <div className="h-[428px] w-[209px] sm:h-[547px] sm:w-[267px]">
                  <img
                    // srcSet="/images/bookclubs-showcase-mobile.png 209w, /images/bookclubs-showcase.png 534w"
                    // sizes="(max-width: 640px) 209px, 534px"
                    className="object-cover"
                    src="/images/bookclubs-showcase.png"
                    alt="Bookclubs in Bookum"
                  />
                </div>
              </div>
            </AnimateX>
          </div>

          <div className="space-y-10 place-self-center">
            <AnimateY staggerAmount={0.25}>
              <h2 className="font-heading text-heading-4 capitalize text-secondary sm:text-heading-3 lg:text-5xl">
                Connect with like-minded individuals in book clubs
              </h2>
            </AnimateY>
            <AnimateY staggerAmount={0.35}>
              <p className="text-accent lg:text-body-lg">
                Clubs revolutionize the reading experience by providing readers
                with a dynamic mobile hub that redefines hosting and member
                interaction. <br /> <br /> Packed with features like audio
                conferencing, subscription content monetization, and chat
                functions, Clubs transform the way members connect and engage
                with each other.
              </p>
            </AnimateY>

            <AnimateY staggerAmount={0.45}>
              <div className="flex justify-between gap-x-4">
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-md bg-primary p-4">
                  <Money />
                </div>
                <div className="space-y-2">
                  <h5 className="font-heading text-body-lg capitalize text-secondary lg:text-xl">
                    Create memberships
                  </h5>
                  <p className="text-sm text-accent sm:w-4/5 sm:text-base">
                    You can create a book club on membership basis and get other
                    users to subscribe to your book club
                  </p>
                </div>
              </div>
            </AnimateY>
          </div>
        </div>
      </Container>
    </section>
  );
}
