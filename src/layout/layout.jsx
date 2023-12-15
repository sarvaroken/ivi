import React from "react";
import { Footer } from "../Components/footer";
import { Outlet } from "react-router-dom";
import Container from "../shared/Container";
import Header from "../Components/header";
import { Slider } from "../Components/slider";
import { Premium } from "../Components/premium";

export const Layout = () => {
  return (
    <>
      <Header />
      <div>
         <Slider/>
        <Premium/> 
      </div>
      <div className="min-h-screen flex flex-grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
