import React from "react";
import { HeaderSocialIcon } from "src/components/Header/HeaderSocialIcon";

export const HeaderSocials = () => {
  return (
    <div className="flex space-x-2 w-full justify-end pr-10">
      <HeaderSocialIcon url="http://github.com/tobywhughes" />
      <HeaderSocialIcon url="https://www.linkedin.com/in/tobiaswhughes/" />
      <HeaderSocialIcon url="https://twitter.com/tobywhughes" />
    </div>
  );
};
