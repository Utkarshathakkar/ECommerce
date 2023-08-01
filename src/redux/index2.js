import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./useSlice";
import productSlideReducer from "./product";

export const store = configureStore({
  reducer: {
    user : userSliceReducer,
    product : productSlideReducer
    
  },
});