import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalog from "./pages/catalog"
// import {Container, Row, Col} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Api from "./Api.js"

const App = () => {
    const [data, setData] = useState([]);
    const [goods, setGoods] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("shopUser"));
    const [popupActive, changePopupActive] = useState(false);

    useEffect(() => {
        console.log("user is changed");
        setApi(new Api(token));
    }, [token])
    
    const [api, setApi] = useState(new Api(token));

    // useEffect(() => {

    //     fetch("https://api.react-learning.ru/products",
    //         {
    //             headers: {
    //                 "Authorization": `Bearer ${token}`
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             setGoods(data.products);
    //             setData(data.products);
    //         });
    // }, []);

    useEffect(() => {
        api.getProducts()
            .then(res => res.json())
            .then(data => {
                console.log(data)
            
        setGoods(data.products);
        setData(data.products);
    })
    }, [])

    return <>
        <div className="wrapper">
            <Header products={data} update={setGoods} openPopup = {changePopupActive}/>
            <Catalog goods={goods} />
            <Footer />
        </div>
        <Modal isActive={popupActive} changeActive={changePopupActive} />
    </>
}

export default App;