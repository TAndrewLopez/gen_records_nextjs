import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  CreateAccountForm,
  DemoLoginButtons,
  LoginForm,
  Layout,
} from "../../components";
import { clearToast } from "../../redux/features/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(false);
  const { message } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (message) {
      dispatch(clearToast());
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Create / Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Authorization page for Generational Records"
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
        <Header headerClass={"flex text-xl justify-between p-5"} />
        <div
          className={`absolute top-0 left-0 w-full h-full -z-10 bg-recordPlayerClose bg-no-repeat bg-center bg-cover ease-in-out duration-300`}>
          <div className="h-full w-full bg-shade-9 opacity-40"></div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          {form ? (
            <CreateAccountForm toggle={setForm} />
          ) : (
            <LoginForm toggle={setForm} />
          )}
        </div>
        <DemoLoginButtons />
      </div>
    </Layout>
  );
};

export default Auth;
