function SingleItem({name, price, image}){
    return(
        <>
        <div className="flex flex-col  bg-indigo-500 shadow-lg shadow-indigo-500/50 ml-9 mt-8">
        <img src={image} alt="Items"  className="h-60 w-60 "/>
        <p>{price}</p>
        <p>{name}</p>
        <button>Add to Cart</button>
        </div>
        </>
    )


}
export default SingleItem;