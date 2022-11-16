import React, { useEffect, useState } from "react";
import data from "../.././assets/data.json";
import Card from "../CaruselCard";
import Local from "../.././Local.js"

// фильтр по цене 

export default ({index, goods, flag}) => {

let arr = Local.getItem("goods", true)


if (flag == "likes") {
    arr.sort((a,b) => b.likes.length - a.likes.length)
} else if (flag == "price") {
    arr.sort((a,b) => a.price - b.price)
} else { arr.sort((a,b) => b.discount - a.discount)
    
}
// console.log(arr)

    return (
        <>
            <Card 
                    key={index}
                    img={arr[index].pictures}
                    text={arr[index].name}
                    price={arr[index].price}
            ></Card>
        </>
    )
}
