import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserPayloadObject } from '../interfaces'

interface MainState {
  userName: string
  userEmail: null | string
  userAvatar: null | string
  isFieldFocusRegistered: boolean
}

const initialState: MainState = {
  /* User */
  userName: '',
  userEmail: null,
  userAvatar: null,

  isFieldFocusRegistered: false,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayloadObject>) => {
      state.userName = action.payload.name
      state.userEmail = action.payload.email
      state.userAvatar = action.payload.avatar
    },
  },
})


export const { setUser } = mainSlice.actions

export default mainSlice.reducer
