import { configureStore } from "@reduxjs/toolkit";
import cartreducer  from "../features/cartslice";
export const store = configureStore({
    reducer: {
        Allcarts:cartreducer
    },
  });