import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddUser } from "../Pages/AddUser";
import AllUser from "../Pages/AllUsers";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllUser/>} />
      <Route path="/addUser" element={<AddUser/>} />
    
    </Routes>
  );
};
