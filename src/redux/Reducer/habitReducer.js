
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habbits: [],
};

const habbitSlice = createSlice({
  name: 'habbits',
  initialState,
  reducers: {
    add: (state, action) => {
      state.habbits.push({
        text: action.payload,
      });
      console.log('habbit added',action.payload);
    },
    delete:(state,action)=>{
      state.habbits.splice(action.payload,1);
    }
  },
});

export const habbitReducer = habbitSlice.reducer;
export const actions = habbitSlice.actions;
export const habbitSelector = (state) => state.habbitReducer.habbits;
