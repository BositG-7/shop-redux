/* eslint-disable @typescript-eslint/no-use-before-define */
// shopReducer.ts

import initialState from "./data";

const shopReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case "ADD":
         return {
            ...state,
            korzine: [...state.korzine, action.payload]
         };

      case "INCREMENT":
         return incrementItem(state, action.payload);

      case "DECREMENT":
         return decrementItem(state, action.payload);

      case "DELETE":
         return deleteItem(state, action.payload);

      default:
         return state;
   }
};

const incrementItem = (state: any, productName: string) => {
   console.log(productName);

   const updatedKorzine = state.korzine.map((item: any) => {
      if (item.name === productName) {
         return { ...item, count: item.count + 1 };
      }
      return item;
   });

   return { ...state, korzine: updatedKorzine };
};

const decrementItem = (state: any, productName: string) => {
   console.log(state);

   console.log(productName);

   const updatedKorzine = state.korzine.map((item: any) => {
      if (item.name === productName && item.count > 0) {
         return { ...item, count: item.count - 1 };
      }
      return item;
   });

   return { ...state, korzine: updatedKorzine };
};

const deleteItem = (state: any, productName: string) => {
   const updatedKorzine = state.korzine.filter((item: any) => item.name !== productName);

   return { ...state, korzine: updatedKorzine };
};

export default shopReducer;
