import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: "user",
    initialState:{value:{name: '', age: 0, Email: '' }},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = {value:{name: '', age: 0, Email: '' }};
        }
    }
})
export const {login, logout}=UserSlice.actions;
export default UserSlice.reducer;