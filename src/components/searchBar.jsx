const SearchBar = () => {
  return (
    <div >
      <input className="border-2 border-gray-300 bg-white rounded-md p-2" type="text" placeholder="search for the kawaii characters" />
      <button className="bg-orange-500 text-white p-2 ml-2 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;