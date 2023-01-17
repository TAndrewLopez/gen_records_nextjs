import { SortDownArrow } from "../assets";

const Accordion = ({ name, amount, element }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
      />
      <div className="bg-shade-9 h-12 w-full pl-5 flex items-center">
        <h1 className="text-lg font-semibold text-shade-1">{`${name} (${amount})`}</h1>
      </div>
      {/* ICON */}
      <div
        className="absolute top-3 right-3 text-shade-1 transition-transform duration-500 rotate-0
      peer-checked:rotate-180">
        <SortDownArrow twClass="h-6 w-6 fill-shade-1" />
      </div>
      {/* CONTENT */}
      <div className="bg-shade-1 overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-full">
        {element}
      </div>
    </div>
  );
};

export default Accordion;
