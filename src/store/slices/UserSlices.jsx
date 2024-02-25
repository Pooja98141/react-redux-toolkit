import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUsers(state, action) {
            state.push(action.payload);
            console.log(action.payload);
         },
        deleteUsers(state, action) {
            state.splice(action.payload,1);
         },
        removeAllUsers(state, action) {
            
         },
    }
});

console.log(userSlice.reducer,"userSlice.reducer")

export default userSlice.reducer;

export const {addUsers,deleteUsers,removeAllUsers} = userSlice.actions;