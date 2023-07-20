import React from "react";
import { AppLayout } from "@/layouts";
import Hero from "@/components/home/hero";
import BookClubs from "@/components/home/book-clubs";
import Nooks from "@/components/home/nooks";
import AppCTA from "@/components/partials/app-cta";

export default function Home() {
  return (
    <AppLayout title="Bookum - Where Bookish conversations happen">
      <section className="mt-32">
        <Hero />
        {/* <AppStats /> */}
        {/* <Features /> */}
        <BookClubs />
        <Nooks />
        <AppCTA />
      </section>
    </AppLayout>
  );
}
