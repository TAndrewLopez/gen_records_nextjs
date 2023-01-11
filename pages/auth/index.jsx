import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Header,
  CreateAccountForm,
  DemoLoginButtons,
  LoginForm,
} from "../../components";

const Auth = () => {
  const [form, setForm] = useState(false);
  const { loggedIn } = useSelector((state) => state.authReducer);
  const router = useRouter();

  if (loggedIn) {
    router.push("/profilePage");
  }

  return (
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
  );
};

export default Auth;
