import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>Mikeneko Portfolio</Head>
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-36 lg:mb-0 my-14 sm:px-20 md:px-32 xl:px-46">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white shadow-custom-light dark:bg-dark-500 lg:col-span-3 rounded-2xl dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
