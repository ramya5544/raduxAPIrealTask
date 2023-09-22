import React from 'react';
import  { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { Loading, fetchData } from '../Features/MockSlice';


const ProductFetchPage = () => {
    const[values,setValue]=useState([]);
    const URL="http://jsonplaceholder.typicode.com/users"
    const dispatch=useDispatch();
useEffect(()=>{
  getData();
},[])
const getData=async()=>{
    await axios.get(URL).then(res=>setValue(res.data)).then(console.log(values)).catch(e=>console.log(e))
}   
    return (
        <div>
            <h1>product fetch page</h1>
            <button onClick={()=>{dispatch(fetchData(values))}}>Fetch Data</button>
            <button onClick={()=>{dispatch(Loading())}}>IsLoading</button>
        </div>
    );
};

export default ProductFetchPage;