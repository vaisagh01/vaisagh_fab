import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen:false,
    selected: null,
    formSubmitted:false,
    successMessage:''
}

export const fabSlice = createSlice({
  name: 'fab',
  initialState,
  reducers: {
    openFab:(state,action) => {
      state.isOpen = true;
    },
    closeFab:(state,action) => {
      state.isOpen = false;
    },
    setSelect : (state,action) => {
      state.selected = action.payload;
    },
    setFormSubmitted : (state,action) => {
      state.formSubmitted = true;
      state.successMessage = action.payload
    },
    resetFormSubmitted : (state,action) => {
      state.formSubmitted = false;
      state.successMessage = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  setSelect, 
  setFormSubmitted, 
  resetFormSubmitted ,
  openFab,
  closeFab
} = fabSlice.actions

export default fabSlice.reducer