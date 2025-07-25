import "./App.css";
import SearchBar from "./components/searchBar";
import Image_gallery from "./components/image_gallery";

function App() {
  return (
    <>
      <div className="bg-pink-100 p-4 h-screen">
        <div className="flex flex-1/3  ">
          <h1 className="font-bold text-orange-500">Kawaii Gallery</h1>
          <div className="items-center justify-center m-auto">
            <SearchBar />
          </div>
        </div>
        <Image_gallery />
      </div>
    </>
  );
}

export default App;
