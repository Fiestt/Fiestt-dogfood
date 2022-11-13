import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalog from "./pages/catalog"
// import {Container, Row, Col} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Api from "./Api.js"
import Main from "./pages/Main"

const App = () => {
    const [data, setData] = useState([]);
    const [goods, setGoods] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("shopUser"));
    const [popupActive, changePopupActive] = useState(false);
    const [api, setApi] = useState(new Api(token));

    useEffect(() => {
        console.log("user is changed");
        setApi(new Api(token));
    }, [token])
    
    

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
        if (token) {
        api.getProducts()
            .then(res => res.json())
            .then(data => {
                setGoods(data.products);
                setData(data.products);
            })
        api.showProfile()
            .then(res => res.json())
            .then(data => {
                console.log("User", data);
            })
        } else {
            setGoods([]);
            setData([]);
        }
    }, [api])
    // return <>
    //     <div className="wrapper">
    //         <Header products={data} update={setGoods} openPopup = {changePopupActive} user={!!token} setToken={setToken} api={api}/>
    //         <Catalog goods={goods} />
    //         <Footer />
    //     </div>
    //     { !token && <Modal isActive={popupActive} changeActive={changePopupActive} setToken={setToken} api={api}/>}
    // </>
    return <Main/>
}

export default App;