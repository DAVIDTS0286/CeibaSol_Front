import React from "react";
import { Route } from "react-router-dom";
import MenuPrincipal from "../components/menu/MenuPrincipal";

const rutesSystem = () => {
  const renderRoutes = () => {
    return (
      <>
        <Route  path="/juan" element ={<h1>Juan</h1>}>
          <MenuPrincipal />
        </Route>
      </>
    );
  };

  return <>{renderRoutes()}</>;
};
export default rutesSystem;
