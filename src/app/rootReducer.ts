import { combineReducers } from '@reduxjs/toolkit'
import clickSliceReducer from './features/Click/clickSlice'

const rootReducer = combineReducers({
  clickDisplay: clickSliceReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
