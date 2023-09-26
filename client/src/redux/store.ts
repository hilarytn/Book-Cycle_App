import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import usersReducer from './features/usersSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch