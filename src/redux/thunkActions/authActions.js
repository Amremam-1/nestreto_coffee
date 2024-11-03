import { createAsyncThunk } from "@reduxjs/toolkit"
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData"

import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../Components/googleSignin/config"
import axios from "axios"
// --------------------------------------------------------------------------------------------
export const createNewUser = createAsyncThunk(
  "auth/createNewUser",
  async (data, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    try {
      const res = await useInsertData(`/register`, data)
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// --------------------------------------------------------------------------------------------
export const logIn = createAsyncThunk("auth/logIn", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await useInsertData("/login", data)
    return res.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})
// --------------------------------------------------------------------------------------------

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (token, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const res = await useInsertData(`/logout`, token)
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
// --------------------------------------------------------------------------------------------

export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const res = await useInsertData("/forget-password", data)

      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
// --------------------------------------------------------------------------------------------

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const res = await useInsertData("/reset-password", data)
      return res.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// --------------------------------------------------------------------------------------------

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const result = await signInWithPopup(auth, provider)
      const userData = {
        provider_type: "google",
        provider_id: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
      }

      const response = await fetch(
        "https://nestrettocoffee.com/dashboard/api/social_login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
          mode: "cors",
        }
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const resData = await response.json()

      return resData
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
// --------------------------------------------------------------------------------------------

export const faranchising = createAsyncThunk(
  "auth/franchising",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await fetch(
        "https://nestrettocoffee.com/dashboard/api/franchising/send",
        {
          method: "POST",
          body: formData, // Send FormData directly
        }
      )

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const resData = await response.json()
      return resData
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
