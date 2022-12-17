import React from "react"
import { useDispatch, useSelector } from "react-redux";
// import Products from "../components/Products";
import { remove } from "../store/cartSlice";

const Cart = ()=>{
    const products = useSelector((state)=> state.cart)
    const dispatch = useDispatch(); 

    const handleRemove = (product)=>{
        dispatch(remove(product.id))
    }
    return(
        <>
            <h1>Cart</h1>
            <div className="">
                {
                    products.map((product)=>(
                        <div className="cartCard">
                            <img src ={product.image} alt=''/>
                            <h4>{product.title}</h4>
                            <h4>${product.price}</h4>
                            <button className="btn" onClick={()=>{handleRemove(product)}}>Remove Item</button>
                        </div>
                    ))

                }
            </div>
        </>
        
    )
}
export default Cart;