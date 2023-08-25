import initialState from "./data";

const shopReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case "ADD":
         return {
            ...state,
            korzine: [...state.korzine, action.payload] // Mahsulotni savatga qo'shish
         };
      // Boshqa hodisalar...
      default:
         return state;
   }
};

export default shopReducer;
