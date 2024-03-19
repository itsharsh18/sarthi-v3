import {configureStore} from '@reduxjs/toolkit';
import newsReducer from "../newsreducer/reducer.js"

export const store = configureStore({
    reducer : newsReducer
});