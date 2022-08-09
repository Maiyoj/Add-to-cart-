import {useEffect, useState} from "react";
import SingleItem from "./SingleItem";

function Items(){
    const [items, setItem] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/items")
        .then(res=>res.json())
        .then((data) =>
            setItem(data)   
        )
    },[])
    console.log(items)

    const allItems = items.map((item)=>{
      return( <SingleItem key={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
         />)
    })
    return(
    <>
    {allItems}
    </>
    )
}
export default Items;