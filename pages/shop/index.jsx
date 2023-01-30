import Head from "next/head";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Footer,
  Pagination,
  VinylCard,
  SubHeader,
  ToastNotification,
  Layout,
} from "../../components";
import { SpinnerLoader } from "../../components/icons";
import { getShopVinyls } from "../../redux/features/shopSlice";
import { clearToast } from "../../redux/features/authSlice";

export default function Shop() {
  const dispatch = useDispatch();
  const {
    authReducer: { error, message },
    shopReducer: { allVinyls, isLoading },
  } = useSelector((state) => state);

  //SEARCH FIELD STATES
  const [userInput, setUserInput] = useState("");
  const [filteredVinyls, setFilterVinyls] = useState(allVinyls);

  //PAGINATION
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const indexOfLastPost = currPage * 20;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currSlice = filteredVinyls.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (!allVinyls.length) dispatch(getShopVinyls());
    if (message) dispatch(clearToast());
  }, []);

  useEffect(() => {
    setFilterVinyls(allVinyls);
  }, [allVinyls]);

  return (
    <Layout>
      <Head>
        <title>Shop</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Discover Page for Generational Records"
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
        <div className="flex-1 flex flex-col justify-center bg-shade-7">
          <SubHeader
            setUserInput={setUserInput}
            allVinyls={allVinyls}
            setFilterVinyls={setFilterVinyls}
            filteredVinyls={filteredVinyls}
          />

          {isLoading ? (
            <div className="flex flex-1 items-center justify-center">
              <SpinnerLoader />
            </div>
          ) : (
            <>
              <h1 className="text-center text-5xl my-5 text-shade-1 whitespace-nowrap after:content=[''] after:block after:h-1 after:mt-2 after:m-auto after:max-w-xs after:bg-accent">
                Discover Vinyls
              </h1>
              <div className="flex flex-1 flex-wrap justify-center">
                {currSlice.length ? (
                  currSlice.map((vinyl) => (
                    <VinylCard vinyl={vinyl} key={vinyl.id} />
                  ))
                ) : (
                  <p className="text-shade-1 text-3xl m-auto">No results.</p>
                )}
              </div>
              <div className="mb-5">
                <Pagination
                  itemsPerPage={itemsPerPage}
                  total={filteredVinyls.length}
                  setPage={setCurrPage}
                  currPage={currPage}
                />
              </div>
            </>
          )}
        </div>
        {message && (
          <ToastNotification
            type={"success"}
            toastMessage={message}
            clear={() => dispatch(clearToast())}
          />
        )}
        {error && message && (
          <ToastNotification
            clear={() => dispatch(clearToast())}
            type="error"
            toastMessage={message}
          />
        )}
        <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
      </div>
    </Layout>
  );
}
