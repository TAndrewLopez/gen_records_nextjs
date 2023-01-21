import { SearchField, DropDown } from "..";

const SubHeader = ({
  setUserInput,
  allVinyls,
  setFilterVinyls,
  filteredVinyls,
}) => {
  return (
    <ul className="p-3 flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between bg-shade-8">
      <li>
        <SearchField
          setInput={setUserInput}
          vinyls={allVinyls}
          filter={setFilterVinyls}
        />
      </li>
      <li>
        <DropDown setFilterVinyl={setFilterVinyls} vinyls={filteredVinyls} />
      </li>
    </ul>
  );
};

export default SubHeader;
