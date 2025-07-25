

function Imagecard({imageURL}) {
  return (
    <div className='border-2 border-gray-100 rounded-2xl p-2 mt-2 max-w-sm h-96'>
        <div className='m-2 bg-amber-300 rounded-2xl h-86'>
            <img src={imageURL} alt="Image" className='w-full h-full object-cover rounded-2xl' />
            
        </div>
    </div>
  )
}

export default Imagecard
