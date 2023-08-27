import initialState from "./data";

const shopReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case "ADD":
         return {
            ...state,
            korzine: [...state.korzine, action.payload]
         };

      default:
         return state;
   }
};

export default shopReducer;
