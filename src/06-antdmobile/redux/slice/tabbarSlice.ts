import {createSlice} from "@reduxjs/toolkit";

const tabbarSlice = createSlice({
    name: 'tabbar',
    initialState: {
        isShow: true
    },
    reducers: {
        tabbarShow(state) {
            const newState = {...state}
            newState.isShow = true
            return newState
        },
        tabbarHide(state) {
            const newState = {...state}
            newState.isShow = false
            return newState
        }
    }
})

export const {tabbarShow, tabbarHide} = tabbarSlice.actions
export default tabbarSlice.reducer