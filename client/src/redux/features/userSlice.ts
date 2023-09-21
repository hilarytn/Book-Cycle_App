import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

import { UserState } from '../../utils/types/state'


const initialState: UserState = {
    currentPage: ''
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
        state.currentPage = action.payload
        }
  },
})

export const { setCurrentPage } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPage = (state: RootState) => state.user.currentPage

export default counterSlice.reducer