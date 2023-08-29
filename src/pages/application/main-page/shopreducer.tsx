import { createAction, createReducer } from "@reduxjs/toolkit";

import initialState from "./data";

// Actionlarni yaratish
export const addItem = createAction("shop/add");
export const incrementItem = createAction("shop/increment");
export const decrementItem = createAction("shop/decrement");
export const deleteItem = createAction("shop/delete");

// Reducerlarni yaratish
const shopReducer = createReducer(initialState, (builder: any) => {
   builder
      .addCase(addItem, (state: any, action: any) => {
         state.korzine.push(action.payload);
      })
      .addCase(incrementItem, (state: any, action: any) => {
         const productName = action.payload;
         const item = state.korzine.find((item: any) => item.name === productName);

         if (item) {
            item.count += 1;
         }
      })
      .addCase(decrementItem, (state: any, action: any) => {
         const productName = action.payload;
         const item = state.korzine.find((item: any) => item.name === productName);

         if (item && item.count > 0) {
            item.count -= 1;
         }
      })
      .addCase(deleteItem, (state: any, action: any) => {
         const productName = action.payload;

         state.korzine = state.korzine.filter((item: any) => item.name !== productName);
      });
});

export default shopReducer;
