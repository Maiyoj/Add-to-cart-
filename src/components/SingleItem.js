function SingleItem({name, price, image}){
    return(
        <>
        <div className="flex flex-col  bg-indigo-500 shadow-lg shadow-indigo-500/50 ml-9 mt-8">
        <img src={image} alt="Items"  className="h-60 w-60 "/>
        <div className="ml-5">
        <p>Price: {price}</p>
        <p>Name: {name}</p>
        <button className="bg-black w-32 p-4 text-white rounded-md m-2">Add to Cart</button>
        </div>
        </div>
        </>
    )


}
export default SingleItem;