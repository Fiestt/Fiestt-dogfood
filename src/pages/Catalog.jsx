import React, { useContext } from "react";
import Card from "../components/Card";
import {Context} from "../App"; 
import Pagination from "../components/Pagination";
import usePagination from "../components/Hooks/usePagination";

export default ({ setFav}) => {
    
    const { searchText, products, goods} = useContext(Context);

    const paginate = usePagination(products, 8)



    // console.log(searchText, "xxxxxx")

    return <>
        <div className="cards-container">
            {!searchText && products.length > 0 && paginate.pageData().map((d, i) => <Card
                key={i}
                // img={d.pictures}
                // text={d.name}
                // price={d.price}
                // id={d._id}
                {...d}
                name={d.name.length > 20 ? d.name.slice(0,20) + "..." : d.name}
                setFav={setFav}
                
            />) 
                // <p>Для отображения данных войдите в систему</p>
            }
            {searchText && <div style={{gridColumnEnd: "span 4"}}>
                {products.length 
                    ? <>По запросу <b>{searchText}</b> найдено {products.length} позиций</>
                    : <>По запросу <b>{searchText}</b> товаров не найдено</>
                }
            </div>}
            {searchText && paginate.pageData().map((d, i) => <Card
                key={i}
                // img={d.pictures}
                // text={d.name}
                // price={d.price}
                // id={d._id}
                {...d}
                name={d.name.length > 20 ? d.name.slice(0,20) + "..." : d.name}
                setFav={setFav}
                
            />)}
        </div>
      
        <Pagination hook={paginate}/>

    </>
}