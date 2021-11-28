import React from "react";
import { SocialIcon } from "react-social-icons";
import colors from "styles/colors";

interface Props {
  url: string;
}

export const HeaderSocialIcon = ({ url }: Props) => {
  return (
    <SocialIcon
      url={url}
      bgColor={colors.background.default}
      style={{
        height: "2.5rem",
        width: "2.5rem",
        borderRadius: "45%",
      }}
    />
  );
};
