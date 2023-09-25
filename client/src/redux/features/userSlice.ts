import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

import { InitState, User, Token } from '../../utils/types/state'


const initialState: InitState = {
    currentPage: '',
    user: null,
    token: localStorage.getItem('token') || null,
    refreshToken: localStorage.getItem('refreshToken') || null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
        state.currentPage = action.payload
    },
    setUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload
    },
    setToken: (state, action: PayloadAction<Token>) => {
        state.token = action.payload.token
        state.refreshToken = action.payload.refreshToken
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('refreshToken', action.payload.refreshToken)
    },
    logoutUser: (state) => {
        state.token = null
        state.refreshToken = null
    }
  },
})

export const { setCurrentPage, setUser, setToken, logoutUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPage = (state: RootState) => state.user.currentPage
export const selectToken = (state: RootState) => state.user.token
export default userSlice.reducer