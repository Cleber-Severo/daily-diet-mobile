import React from "react";
import { Container, Description, Icon, IconWrapper, MainPercentage } from "./styles";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StatisticsBtn = () => {
  const navigation = useNavigation();

  return (
    <Container type={"SECONDARY"}>
      <MainPercentage>90,86%</MainPercentage>
      <Description>das refeições dentro da dieta</Description>

      <IconWrapper onPress={() => navigation.navigate("statistics")}>
        <Icon type="SECONDARY" />
      </IconWrapper>
    </Container>
  );
};

export default StatisticsBtn;
