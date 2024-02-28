import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'   //userSlice.reducers is imported as userReducer

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})