import "./App.css";
import SearchBar from "./components/searchBar";
import Image_gallery from "./components/image_gallery";

function App() {
  return (

      <div className=" bg-lavender h-screen">
        <div className="flex flex-row bg-skin p-4 justify-between items-center">
          <h1 className="font-bold text-purple w-[20%]">Kawaii Gallery</h1>
          <div className="w-[80%] p-auto ">
            <SearchBar />
          </div>
        </div>
        <Image_gallery />
      </div>

  );
}

export default App;
