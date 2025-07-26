const SearchBar = ({ setsearchquery,searchquery }) => {
  return (

    <div className="flex justify-center">
      <input
        value={searchquery}
        onChange={e=>setsearchquery(e.target.value)}
        className="border-2 border-lavender bg-purple-50 rounded-2xl p-2 text-center"
        type="text"
        placeholder="search kawaii characters"
      /> 
    </div>
  );
};

export default SearchBar;
