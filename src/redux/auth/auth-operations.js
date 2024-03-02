import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpRequest, loginRequest, currentRequest, logoutREquest } from "../../services/api/auth-api";

export const signup = createAsyncThunk(
    "auth/signup", 
    async (body, { rejectWithValue }) => {
        try {
            const data = await signUpRequest(body);
            return data;
        } 
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (body, { rejectWithValue }) => {
        try {
           const data = await loginRequest(body);
            return data;
        } 
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async(_, { rejectWithValue, getState }) => {
    try {
        const {auth} = getState();
        const data = await currentRequest(auth.token);
        return data;
    }
    catch (error) {
        return rejectWithValue(error.response.data.message);
    }
},
{
    condition: (_, { getState }) => {
        const { auth } = getState();
        if (!auth.token) {
            return false;
        }
    }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const data = await logoutREquest();
            return data;
        } 
        catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
)