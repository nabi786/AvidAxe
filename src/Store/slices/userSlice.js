import {createSlice} from '@reduxjs/toolkit';

// creating slice
const userSlice = createSlice({
    name  : "user",
    initialState : [],
    reducers : {
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){}
    }
})


// exporting
export {userSlice}
export const {addUser} = userSlice.actions;