import { Header, Footer } from "../../components";

const AdminPage = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 bg-shade-7">Admin Page</div>
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
    </div>
  );
};

export default AdminPage;
