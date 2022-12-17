import React, { useEffect, useState } from "react"

const Products = ()=>{
    const [products,setProducts] = useState(null);
    useEffect(()=>{
        const fetchProducts = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products', {
                header:{
                    "Content-type" : "application/json"
                }
            });
            const response = await res.json(); 
            setProducts(response); 
            console.log(response[0].title); 
        }
        fetchProducts();

    },[])

    return(
        // <div>{products && products[0].category}</div>
        <div className="productsWrapper">
            {
                products && products.map(product =>(
                    <div className="card" key={product.id}>
                        <img src ={product.image} alt=''/>
                        <h4>{product.title}</h4>
                        <h4>${product.price}</h4>
                        {/* <p>{product.description}</p> */}
                        
                        <button className="btn" onClick={()=>{console.log(`product button ${product.id}`)}}>Buy Now</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products; 