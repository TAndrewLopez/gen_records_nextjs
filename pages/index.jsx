import Head from "next/head";
import Link from "next/link";
import { Header, Layout } from "../components";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome to Gen Records!</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Landing page for Generational Records"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className="h-full w-full flex flex-col">
        <Header headerClass={"flex text-xl justify-between p-5"} />
        <div className="flex-1 flex justify-center items-center ">
          <div
            className={`absolute top-0 left-0 w-full h-full -z-10 bg-shopperBG bg-no-repeat bg-center bg-cover ease-in-out duration-300`}>
            <div className="h-full w-full bg-shade-9 opacity-50"></div>
          </div>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: -100 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 -translate-y-1/2 text-shade-1 flex flex-col items-center p-5">
              <h1 className="mb-4 text-3xl font-extrabold text-shade-1 md:text-5xl lg:text-6xl">
                The Destination for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-sec from-accent">
                  Music Enthusiasts
                </span>
              </h1>
              <p className="mb-4 text-lg font-normal text-shade-4 lg:text-xl sm:px-16 xl:px-48">
                Listen to music the way the{" "}
                <Link
                  className="font-semibold text-shade-1 hover:text-highlight underline decoration-accent hover:decoration-highlight ease-in-out duration-300"
                  href={"/shop"}>
                  producer
                </Link>{" "}
                intended!{" "}
                <Link
                  className="font-semibold text-shade-1 hover:text-highlight underline decoration-accent hover:decoration-highlight ease-in-out duration-300"
                  href={"/shop"}>
                  Find Vinyls
                </Link>{" "}
                from your favorite generation and more.
              </p>

              <Link
                href={"/shop"}
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-shade-1 bg-accent rounded-lg hover:bg-highlight hover:text-shade-9 focus:ring-4 focus:ring-blue-300 ease-in-out duration-300">
                Explore Vinyls
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}
