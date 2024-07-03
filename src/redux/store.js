import strSlice from "./strSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
      str : strSlice
    }
})

export default store;