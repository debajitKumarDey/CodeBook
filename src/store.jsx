import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './Redux/bookSlice'

export const store = configureStore({
  reducer: {
    page: pageReducer
  },
})