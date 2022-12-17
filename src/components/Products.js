import React, { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import {fetchProducts} from "../store/productSlice"
const Products = ()=>{
    //useDispatch is called from react-redux
    //to use our action from store cartSlice 
    const {data: products,status} = useSelector((state)=> state.product)
    const dispatch = useDispatch();

    // const [products,setProducts] = useState(null);
    useEffect(()=>{
        dispatch(fetchProducts())
        // const fetchProducts = async ()=>{
        //     const res = await fetch('https://fakestoreapi.com/products', {
        //         header:{
        //             "Content-type" : "application/json"
        //         }
        //     });
        //     const response = await res.json(); 
        //     setProducts(response); 
        //     console.log(response[0].title); 
        // }
        // fetchProducts();

    },[])
    const handleAdd = (product)=>{
        //we have to store this product in redux store
        //using dispatch to call add function and passing product as payload
        dispatch(add(product)); 
        // console.log(product);
    }
    if(status === 'loading'){
        return <h1>loading...</h1>
    }
    if(status === 'error'){
        return <h1>Something went wrong</h1>
    }

    return(
        // <div>{products && products[0].category}</div>
        <div className="productsWrapper">
            {
                products.map(product =>(
                    <div className="card" key={product.id}>
                        <img src ={product.image} alt=''/>
                        <h4>{product.title}</h4>
                        <h4>${product.price}</h4>
                        {/* <p>{product.description}</p> */}
                        
                        <button className="btn" onClick={()=>{handleAdd(product)}}>Buy Now</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products; 