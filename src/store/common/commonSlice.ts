import { createSlice } from '@reduxjs/toolkit'

type commonProps = {
  loading: string[]
  expiredSession: boolean
}

const initialState: commonProps = {
  loading: [],
  expiredSession: false,
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    enableLoading: (state, action) => {
      state.loading = [...state.loading, action.payload]
    },
    disableLoading: (state, action) => {
      state.loading = state.loading.filter((item) => item !== action.payload)
    },
    enableModalExpire(state): any {
      state.expiredSession = true
    },
    disableModalExpire(state): any {
      state.expiredSession = false
    },
  },
})

export const { enableLoading, disableLoading, enableModalExpire, disableModalExpire } = commonSlice.actions
export default commonSlice.reducer
