import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        status: '',
        data: []
    },
    reducers:{
        // setProducts(state,action){
        //     state.status = action.payload
        // }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchProducts.pending,(state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.status = 'idle'
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected,(state,action)=>{
                state.status = 'error'; 
            })
    }
})

// export const {setProducts} = productSlice.actions; 
export default productSlice.reducer;

//thunks 

export const fetchProducts = createAsyncThunk('products/fetch',async ()=>{
    const res = await fetch('https://fakestoreapi.com/products', {
        header:{
            "Content-type" : "application/json"
        }
    });
    const data = await res.json(); 
    return data;  
})