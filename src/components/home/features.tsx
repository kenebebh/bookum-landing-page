"use client";

import Container from "../partials/container";
import Discover from "../icons/discover";
import Connect from "../icons/connect";
import Community from "../icons/community";
import Exclusive from "../icons/exclusive";
import Virtual from "../icons/virtual";
import AnimateY from "../partials/animate-y";

export default function Features() {
  return (
    <section className="mt-120px bg-accent-2 py-24">
      <Container>
        <div>
          <h1 className="mb-10 font-heading text-2xl text-secondary sm:text-heading-3 lg:w-3/4 lg:text-5xl">
            Find Your Community On Bookum
          </h1>

          <div className="auto-row-fr grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white sm:col-span-2">
              <AnimateY staggerAmount={0.25}>
                <div className="h-full">
                  <div className="flex h-full flex-col items-center rounded-md px-9 py-6 shadow-card sm:flex-row">
                    <div className="space-y-4">
                      <div className=" flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary sm:h-[70px] sm:w-[70px]">
                        <Discover />
                      </div>
                      <h4 className="font-heading text-xl text-secondary sm:text-2xl">
                        Discover latest releases from your favorite authors
                      </h4>
                      <p className="text-accent">
                        With Bookum, you'll find a diverse collection of books
                        across genres. From literary classics to contemporary
                        bestsellers, we have something for every reader
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/features-app-showcase.png"
                        alt="Discover books from authors"
                      />
                    </div>
                  </div>
                </div>
              </AnimateY>
            </div>

            <div className="rounded-xl bg-white">
              <AnimateY staggerAmount={0.35}>
                <div className="h-full space-y-4 rounded-md px-9 py-10 shadow-card">
                  <div className=" flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary sm:h-[70px] sm:w-[70px]">
                    <Connect />
                  </div>
                  <h4 className="font-heading text-xl text-secondary sm:text-2xl">
                    Connect with your favorite authors and creators
                  </h4>
                  <p className="text-sm text-accent sm:text-base">
                    Connect with your favorite authors on a deeper level. Our
                    platform provides a unique opportunity to engage directly
                    with writers.
                  </p>
                </div>
              </AnimateY>
            </div>

            <AnimateY staggerAmount={0.65}>
              <div className="h-full space-y-4 rounded-xl bg-white px-9 py-10 shadow-card">
                <div className=" flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary sm:h-[70px] sm:w-[70px]">
                  <Community />
                </div>
                <h4 className="font-heading text-xl text-secondary sm:text-2xl">
                  Community Engagement
                </h4>
                <p className="text-sm text-accent sm:text-base">
                  Join a vibrant community of passionate readers and writers who
                  share your love for books. Participate in book clubs, and
                  exchange recommendations with fellow literary enthusiasts
                </p>
              </div>
            </AnimateY>

            <AnimateY staggerAmount={0.75}>
              <div className="h-full space-y-4  rounded-xl bg-white px-9 py-10 shadow-card">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary sm:h-[70px] sm:w-[70px]">
                  <Exclusive />
                </div>
                <h4 className="font-heading text-xl text-secondary sm:text-2xl">
                  Exclusive Content
                </h4>
                <p className="text-sm text-accent sm:text-base">
                  Access exclusive content that goes beyond the pages of a book.
                  Delve into behind-the-scenes material, author interviews, and
                  articles that provide a deeper understanding of the literary
                  world
                </p>
              </div>
            </AnimateY>

            <AnimateY staggerAmount={0.85}>
              <div className="h-full space-y-4 rounded-xl bg-white px-9 py-10 shadow-card">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary sm:h-[70px] sm:w-[70px]">
                  <Virtual />
                </div>
                <h4 className="font-heading text-xl text-secondary sm:text-2xl">
                  Virtual Events{" "}
                </h4>
                <p className="text-sm text-accent sm:text-base">
                  Participate in virtual events and workshops led by renowned
                  authors and industry experts. Attend live readings, panel
                  discussions, and writing workshops from the comfort of your
                  own home
                </p>
              </div>
            </AnimateY>
          </div>
        </div>
      </Container>
    </section>
  );
}
