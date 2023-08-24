import { Route, Routes as Switch } from "react-router-dom";
import { Application } from "pages";

const Routes = () => {
   const i = 0;

   console.log(i);

   return (
      <Switch>
         <Route path="" element={<Application />} />

         {/* AUTH */}
      </Switch>
   );
};

export default Routes;
