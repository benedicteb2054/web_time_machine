import { configureStore } from '@reduxjs/toolkit'
import webUrlReducer from '../features/wayback/webUrlSlice'

export const store = configureStore({
  reducer: {
    webUrl: webUrlReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch