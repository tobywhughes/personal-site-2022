import React, { Component } from "react";
import { HeaderSocials } from "./HeaderSocials";
import { HeaderTitle } from "./HeaderTitle";

export const Header = () => {
  return (
    <nav className="grid justify-items-center grid-cols-3 flex-wrap bg-primary h-20 p-4">
      <div />
      <HeaderTitle />
      <HeaderSocials />
    </nav>
  );
};
