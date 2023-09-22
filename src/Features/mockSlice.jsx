import { createSlice } from '@reduxjs/toolkit';

const initialState={
    value:[],
    isLoading:false 
}
  const mockSlice=createSlice({
    name:'mock',
    initialState,
    reducers:{
        Loading: (state, action) =>{
            state.isLoading=true

        },
        fetchData:(state,action) =>{
            state.value=action.payload
        }
    }
})
export const{Loading, fetchData}=mockSlice.actions;
export default mockSlice.reducer;
