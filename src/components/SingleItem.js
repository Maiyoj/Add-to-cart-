function SingleItem({name, price, image}){
    return(
        <>
        <img src={image} alt="Items"/>
        <p>{price}</p>
        <p>{name}</p>
        </>
    )


}
export default SingleItem;