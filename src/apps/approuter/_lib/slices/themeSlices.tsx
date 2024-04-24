import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { contents, navText } from '../themeConstants'

export interface PageDetails {
  type : string,
  value : string
}

// Define a type for the slice state
export interface ThemeState {
    themeNo: number,
    activeTheme: string,
    page: number,
    activePageDetails: Array<PageDetails>
}

// Define the initial state using that type
const initialState: ThemeState = {
  themeNo: 0,
  activeTheme: 'theme-light',
  page: 1,
  activePageDetails: contents[0]
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    switchTheme: state => {
        state.themeNo += 1;
        state.activeTheme = navText[state.themeNo%3];
    },
    changePage: (state, action : PayloadAction<number>) => {
      state.page = action.payload;
      state.activePageDetails = contents[state.page];
    }
    
  }
})

export const { switchTheme, changePage } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default themeSlice.reducer