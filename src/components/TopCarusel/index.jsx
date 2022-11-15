import React from "react";
// import data from "../.././assets/data.json";
import Card from "../CaruselCard";




export default ({arr}) => {
    
    // console.log(arr, arr.length, "xxxxxxxxxxx")
    // console.log(arr)
    // const obj = arr.splice(0,1)[0]
    // console.log(arr)
    
    return (
 
            <Card 
                key={arr[0].id}
                img={arr[0].picture}
                text={arr[0].name}
                price={arr[0].price}
            ></Card>

    )
}
