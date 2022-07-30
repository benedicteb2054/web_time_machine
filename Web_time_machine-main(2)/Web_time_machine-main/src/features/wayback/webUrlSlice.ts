import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { instance } from '../../config'


const initialState = {
    status: 'idle',
    data: {},
    error: null
}

export const searchUrl = createAsyncThunk('wayback/webUrl', async (url?: string) => {
    try{
        const resp = await instance.get(`available?url=${url}`)
        return resp.data
    }catch(err){
        return err.message
    }
})

export const webUrlSlice = createSlice({
    name: 'webUrl',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(searchUrl.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(searchUrl.fulfilled, (state, {payload}) => {
            state.data = payload
            state.status = 'succeeded'
            state.error = null
        })
        .addCase(searchUrl.rejected, (state, {error}) => {
            state.error = error
            state.status = 'failled'
        })
    }
})

export const webUrlSelector = (state: RootState) => state.webUrl

export default webUrlSlice.reducer