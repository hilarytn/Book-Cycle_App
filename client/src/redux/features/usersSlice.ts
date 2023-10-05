import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

import { User } from '../../utils/types/state'


const initialState: User[] = [] 

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
        state = action.payload
        return state
    }
  },
})

export const { setUsers } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer