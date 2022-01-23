// const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from '../../api/userApi';

export const register = createAsyncThunk('user/register', async (payload) => {
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem('access_token' , data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
    /// call api
    const data = await userApi.login(payload);

    // save data to local storage
    localStorage.setItem('access_token' , data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem('user')) || {},
        setting: {},
    },
    reducers: {
        logOut(state) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');

            state.current = {};
        }
    },
    extraReducers: {
        [register.fulfilled]: (state , action) => {
            state.current = action.payload
        }, 

        [login.fulfilled]: (state , action) => {
            state.current = action.payload
        }, 
    },
});

const { actions , reducer } = userSlice;
export const { logOut } = actions;
export default reducer;