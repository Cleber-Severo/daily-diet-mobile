import { ContentWrapper } from "@components/ContentWrapper";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Container, Header, Icon, IconWrapper, Title } from "./styles";

export function MealDetails() {
  const navigation = useNavigation();

  return (
    <Container type="SECONDARY">
      <Header type="SECONDARY">
        <IconWrapper onPress={() => navigation.navigate("home")}>
          <Icon />
        </IconWrapper>
        <Title>Refeição</Title>
      </Header>
      <ContentWrapper>
        <Text>meal description here</Text>
      </ContentWrapper>
    </Container>
  );
}
