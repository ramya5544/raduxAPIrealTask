import React from 'react';
import { useSelector } from 'react-redux';

const ProductPage = () => {
    const productStateValue=useSelector(state=>state.mockApiReducer.value)
    const productStateIsLoading=useSelector(state=>state.mockApiReducer.isLoading)
    console.log("productStateValue",productStateValue)
    console.log("productStateIsLoading",productStateIsLoading)
    return (
        <div>
           <h1>product page</h1>
            {productStateIsLoading?
            productStateValue.map((item,index)=>{
                return(
                    <>
                    <div key={index}>

                        <div>{item.name}</div>
                        <div>{item.id}</div>
                    </div>
                    </>
                )

            })
            :"loading...."}



 
        </div>
    );
};

export default ProductPage;