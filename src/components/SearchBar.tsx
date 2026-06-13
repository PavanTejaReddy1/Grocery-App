import { Search as SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="h-[52px] bg-[#F2F3F2] rounded-[15px] flex items-center px-4">
      <SearchIcon size={20} className="text-gray-500" />

      <input
        type="text"
        placeholder="Search Store"
        className="ml-3 flex-1 bg-transparent outline-none text-sm"
      />
    </div>
  );
};

export default SearchBar;