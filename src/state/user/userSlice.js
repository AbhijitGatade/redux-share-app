import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name:"Abhijit",
        email:"gatadeabhijit@gmail.com",
        mobileno:"9561320192"
    },
    reducers: {
        changeValues:(state, action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.mobileno = action.payload.mobileno;
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { changeValues } = userSlice.actions
  
  export default userSlice.reducer