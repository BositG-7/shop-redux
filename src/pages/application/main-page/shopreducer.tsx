import initialState from "./data";

interface IAction {
   type: "DELETE" | "ADD" | "INCRAMENT" | "DECRAMENT";
}
const shopReducer = (state = initialState, action: IAction) => {
   switch (action.type) {
      case "DELETE":
      case "ADD":
      case "INCRAMENT":
      case "DECRAMENT":
      default:
         return state;
   }
};

export default shopReducer;
