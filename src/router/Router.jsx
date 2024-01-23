import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
