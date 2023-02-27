import Head from "next/head";
import { Header, Footer, Layout, Invoice } from "../../components";

const Success = () => {
  return (
    <Layout>
      <Head>
        <title>Order Invoice</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Checkout page for Generational Records"
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
      <div className="h-screen w-full flex flex-col">
        <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
        <main className="flex-1 bg-shade-7">
          <h1 className="text-center text-5xl my-5 text-shade-1 whitespace-nowrap after:content=[''] after:block after:h-1 after:mt-2 after:m-auto after:max-w-xs after:bg-accent">
            Invoice
          </h1>
          <Invoice />
        </main>
        <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />
      </div>
    </Layout>
  );
};

export default Success;
