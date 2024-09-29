import { createSlice } from '@reduxjs/toolkit'

export type AppState = {
  collapsed?: boolean
}

const initialState: AppState = {
  collapsed: localStorage.getItem('sidebarCollapsed') === 'true' || false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleCollapsed: state => {
      state.collapsed = !state.collapsed
      localStorage.setItem('sidebarCollapsed', String(state.collapsed))
    },
  },
  selectors: {
    sidebarWidth: state => (state.collapsed ? 80 : 256) +'px',
  },
})

export const { toggleCollapsed } = appSlice.actions

export const { sidebarWidth } = appSlice.selectors

export default appSlice.reducer
