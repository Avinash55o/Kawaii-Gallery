import data from "../data/image_characters.jsx";
import Imagecard from "./image_card";


function Image_gallery({images,currentPage,setCurrentPage}) {
  const itemsperpage = 8;

  const indexoflastitem = currentPage * itemsperpage;
  const indexoffirstitem = indexoflastitem - itemsperpage;
  const currentitems = images.slice(indexoffirstitem, indexoflastitem);

  //total number of pages
  const totalpages = Math.ceil(data.length / itemsperpage);

  //function to change the page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-2 pl-14 ">
        {currentitems.map((item, index) => (
          <Imagecard key={index} imageURL={item.photo} />
        ))}
      </div>
      <div className="flex justify-center items-end mt-1.5">
        {Array.from({length:totalpages},(_,index)=>(
            <button key={index} onClick={()=>paginate(index+1)} className="bg-forestGreen text-skin px-4 py-2 m-0.5 rounded-full">
                {index+1}
            </button>
        ))}
      </div>
    </>
  );
}

export default Image_gallery;
