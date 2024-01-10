import React from "react";
import App from "./App";
import data from "./data.json";



const Sirname = () => {
    data.forEach((item, index) => {
        Object.keys(data)
      .filter((k, i) => i >= 100 && i < 300)
      .forEach(k => console.log(data[k]));;
        if(item.data1 && Array.isArray(item.data1)){
            item.data1.forEach((item,index)=>{
            console.log(index);
                console.log(item)
            })
         }
         console.log(item)
         })
  return (
    <div>Sirname</div>
  )
}

export default Sirname

  

