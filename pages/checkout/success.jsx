import Head from "next/head";
import { Header, Footer, Layout } from "../../components";

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
          <div className="max-w-5xl mx-auto py-16 bg-white">
            <article className="overflow-hidden">
              <div className="bg-white rounded-b-md">
                <div className="p-9">
                  <div className="space-y-6 text-slate-700">
                    <img
                      className="object-cover h-12"
                      src="/android-chrome-512x512.png"
                    />
                    <p className="text-xl font-extrabold tracking-tight uppercase font-body">
                      Generational Records
                    </p>
                  </div>
                </div>

                <div className="p-9">
                  <div className="flex w-full">
                    <div className="grid grid-cols-4 gap-12">
                      <div className="text-sm font-light text-slate-500">
                        <p className="text-sm font-normal text-slate-700">
                          Invoice Details:
                        </p>
                        <p>Generational Records</p>
                        <p>2421 Midoriya Drive</p>
                        <p>Costa Mesa</p>
                        <p>CA 92627</p>
                      </div>
                      <div className="text-sm font-light text-slate-500">
                        <p className="text-sm font-normal text-slate-700">
                          Billed To:
                        </p>
                        <p>Helga Langworth</p>
                        <p>244 U.S 68</p>
                        <p>Benton</p>
                        <p>KY 42025</p>
                      </div>
                      <div className="text-sm font-light text-slate-500">
                        <p className="text-sm font-normal text-slate-700">
                          Invoice Number:
                        </p>
                        <p>123456</p>
                        <p className="mt-2 text-sm font-normal text-slate-700">
                          Date of Issue
                        </p>
                        <p>00.00.00</p>
                      </div>
                      <div className="text-sm font-light text-slate-500">
                        <p className="text-sm font-normal text-slate-700">
                          Terms
                        </p>
                        <p>0 Days</p>
                        <p className="mt-2 text-sm font-normal text-slate-700">
                          Due
                        </p>
                        <p>00.00.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-9">
                  <div className="flex flex-col mx-0 mt-8">
                    <table className="min-w-full divide-y divide-slate-500">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
                            Description
                          </th>
                          <th
                            scope="col"
                            className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                            Rate
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                            Amount
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                            <div className="font-medium text-slate-700">
                              Vinyl Name
                            </div>
                            <div className="mt-0.5 text-slate-500 sm:hidden">
                              1 unit at $0.00
                            </div>
                          </td>
                          <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                            48
                          </td>
                          <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                            $0.00
                          </td>
                          <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                            $0.00
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th
                            scope="row"
                            colSpan="3"
                            className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-00">
                            Subtotal
                          </th>
                          <th
                            scope="row"
                            className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                            Subtotal
                          </th>
                          <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                            $0.00
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan="3"
                            className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                            Discount
                          </th>
                          <th
                            scope="row"
                            className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                            Discount
                          </th>
                          <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                            $0.00
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan="3"
                            className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                            Tax
                          </th>
                          <th
                            scope="row"
                            className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                            Tax
                          </th>
                          <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                            $0.00
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colSpan="3"
                            className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                            Total
                          </th>
                          <th
                            scope="row"
                            className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
                            Total
                          </th>
                          <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                            $0.00
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                <div className="mt-48 p-9">
                  <div className="border-t pt-9 border-slate-200">
                    <div className="text-sm font-light text-slate-700">
                      <p>
                        Payment terms are 14 days. Please be aware that
                        according to the Late Payment of Unwrapped Debts Act
                        0000, freelancers are entitled to claim a 00.00 late fee
                        upon non-payment of debts after this time, at which
                        point a new invoice will be submitted with the addition
                        of this fee. If payment of the revised invoice is not
                        received within a further 14 days, additional interest
                        will be charged to the overdue account and a statutory
                        rate of 8% plus Bank of England base of 0.5%, totalling
                        8.5%. Parties cannot contract out of the Act’s
                        provisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
        <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />
      </div>
    </Layout>
  );
};

export default Success;
