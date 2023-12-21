import { createSlice } from "@reduxjs/toolkit";


const initialState={
    status:false,
    profile:'operation',
    userData:null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            state.profile=action.payload.profile
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.profile=''
        }
     }
})

export const {login,logout}=authSlice.actions
export default authSlice.reducer;