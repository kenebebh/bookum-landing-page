import "@/styles/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "@/components/partials/navbar";
import Footer from "@/components/partials/footer";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff",
  display: "swap",
  variable: "--satoshi-font",
});

const general_sans = localFont({
  src: "../../public/fonts/GeneralSans-Variable.woff2",
  display: "swap",
  variable: "--general-sans-font",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <main
        className={`${satoshi.variable} ${general_sans.variable} relative font-body`}
      >
        <Component {...pageProps} />
        <Toaster position="top-right" />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
