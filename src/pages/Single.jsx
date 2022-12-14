import React, {useEffect, useState, useContext} from "react";
import {Context} from "../App" 
import {useParams} from "react-router-dom"
import { Button } from "react-bootstrap";

import ProductCell from "../components/ProductCell";
import Reviews from "../components/SetReview/setReview"
import WatchReview from "../components/WatchReview/watchReview"



export default () => {

    const {api} = useContext(Context);

    const [product, setProduct] = useState({})

    const [isReviewsShown, setIsReviewsShown] = useState(false)
    const [reviews, setReviews] = useState([])

    const [comment, setComment] = useState(false)


    let params = useParams();
    // console.log(params)
    useEffect(() => {
        api.getProduct(params.id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, [])
    
    const reaviewsHandler = () => {
        setIsReviewsShown(!isReviewsShown)
        api.getReviews(params.id)
            .then(res => res.json())
            .then(data =>  {
                console.log(data, "xxx")
                setReviews(data)
            })
    }
    
    const commentHandler = () => {
        setComment(true)
    }

    
    return (   
        <>
    <div style={{display: "grid",  gap: "20px"}}>
        {product.name && <ProductCell value={product.name} setProduct={setProduct} product={product} id={params.id} type="name" tagMain="h1" tagInp="input"/>}

        {product.pictures && <ProductCell value={product.pictures} setProduct={setProduct} product={product} id={params.id} type="pictures" tagMain="img" tagInp="input"/>}

        {product.price >= 0 && <ProductCell value={product.price} setProduct={setProduct} product={product} id={params.id} type="price" tagMain="div" tagInp="input"/>}

        {product.discount >= 0 && <ProductCell value={product.discount} setProduct={setProduct} product={product} id={params.id} type="discount" tagMain="div" tagInp="select"/>}

        {product.wight && <ProductCell value={product.wight} setProduct={setProduct} id={params.id} product={product} type="wight" tagMain="div" tagInp="input"/>}

        {product.description && <ProductCell value={product.description} setProduct={setProduct} product={product} id={params.id} type="description" tagMain="p" tagInp="textarea"/>}
    </div>

        <Button onClick={reaviewsHandler} variant="warning">???????????????? ????????????</Button>
        <Button onClick={commentHandler} variant="warning">???????????????? ??????????</Button>

    
    {isReviewsShown && 
    <div>{reviews.map((el, i) => <WatchReview key={i} el={el} product={product} setProduct={setProduct} setReviews={setReviews} params={params}/>)}</div>}
    
    {comment && <Reviews comment={comment} product={product} setComment={setComment}/>}
    
    </> 
    )
}
