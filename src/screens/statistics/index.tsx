import { Text, View } from "react-native";
import { Container, Content, Header, Icon, IconWrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Description, MainPercentage } from "@screens/home/components/StatisticsBtn/styles";

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

      <Content
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 4, // Android shadow
        }}
      ></Content>
    </Container>
  );
}
