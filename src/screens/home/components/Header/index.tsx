import React from "react";
import { View } from "react-native";

import LogoImgSrc from "@assets/Logo.png";
import ProfileImgSrc from "@assets/Ellipse.png";
import { Container, Logo, ProfileImg } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo source={LogoImgSrc} />

      <ProfileImg source={ProfileImgSrc} />
    </Container>
  );
};

export default Header;
