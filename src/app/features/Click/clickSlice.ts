import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ClickPayload {
  click: number
}

interface ClickState {
  clicks: number
}

const initialState: ClickState = {
  clicks: 0
}

const clickSlice = createSlice({
  name: 'clickSlice',
  initialState,
  reducers: {
    incrementClick(state, action: PayloadAction<ClickPayload>) {
      const clicks = state.clicks + action.payload.click
      state.clicks = clicks
    }
  }
})

export const { incrementClick } = clickSlice.actions

export default clickSlice.reducer 