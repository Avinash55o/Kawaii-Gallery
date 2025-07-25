import data from '../data/image_characters.jsx';
import Imagecard from './image_card';

function Image_gallery(){
    return(
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-2 p-4'>
         {
            data.map((item,index)=>(
             <Imagecard key={index} imageURL={item.photo}/>
            ))
         }
    </div>
    )
}

export default Image_gallery