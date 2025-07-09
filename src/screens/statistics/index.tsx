import { Text, View } from "react-native";
import { Container, Header, Icon, IconWrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Description, MainPercentage } from "@screens/home/components/StatisticsBtn/styles";
import { ContentWrapper } from "@components/ContentWrapper";
import { Content } from "./components/Content";

export function Statistics() {
  const navigation = useNavigation();

  return (
    <Container type="PRIMARY">
      <Header type="PRIMARY">
        <MainPercentage>90,86%</MainPercentage>
        <Description>das refeições dentro da dieta</Description>
        <IconWrapper onPress={() => navigation.navigate("home")}>
          <Icon type="PRIMARY" />
        </IconWrapper>
      </Header>

      <Content />
    </Container>
  );
}
