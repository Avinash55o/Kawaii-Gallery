import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import Image_gallery from "./components/image_gallery";
import data from "./data/image_characters.jsx";

function App() {
  const [search, setsearch]=useState("");
  const [filterData, setfilterData]=useState(data);
  
  const searhHander=(e)=>{
    const lowercased=e.target.value.toLowerCase();
    setsearch(lowercased)
  }
  useEffect(()=>{
    const filterdata=data.filter((item)=>item.name.toLowerCase().includes(search))
    setfilterData(filterdata)
  },[search])
  return (

      <div className=" bg-lavender h-screen">
        <div className="flex flex-row bg-skin p-4 justify-between items-center">
          <h1 className="font-bold text-purple text-shadow-violet-200 w-[20%] text-shadow-lg text-2xl">Kawaii Gallery</h1>
          <div className="w-[80%] p-auto ">
            <SearchBar
             searchquery={search}
             setsearchquery={setsearch}
             onSearch={searhHander} />
          </div>
        </div>
        <Image_gallery 
        images={filterData}/>
      </div>

  );
}

export default App;
