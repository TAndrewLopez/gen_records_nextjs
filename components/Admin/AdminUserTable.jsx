import { formatToUSD } from "../helperFuncs";
import { TrashIcon } from "../assets";

const AdminUserTable = ({ users, vinyls }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-shade-1 uppercase bg-shade-9">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {vinyls.map((vinyl, i) => {
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr className={color} key={vinyl.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {vinyl.name}
                </th>
                <td className="px-6 py-4">{`$${formatToUSD(vinyl.price)}`}</td>
                <td className="px-6 py-4">{vinyl.stock}</td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 hover:underline hover:text-highlight">
                    <TrashIcon twClass="w-4 fill-shade-9" />
                  </a>
                </td>
              </tr>
            );
          })}
          {/* <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Sliver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b bg-gray-50">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserTable;
