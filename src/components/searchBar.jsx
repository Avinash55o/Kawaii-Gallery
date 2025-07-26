const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <input className="border-2 border-lavender bg-purple-50 rounded-md p-2" type="text" placeholder="search for the kawaii characters" />
      <button className="bg-purple text-white p-2 ml-2 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;