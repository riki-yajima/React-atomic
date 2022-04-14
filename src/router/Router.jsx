import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <DefaultLayout />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
