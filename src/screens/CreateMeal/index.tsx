import { ContentWrapper } from "@components/ContentWrapper";
import { Container, Header, Icon, IconWrapper, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function CreateMeal() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header >
        <IconWrapper onPress={() => navigation.navigate("home")}>
          <Icon />
        </IconWrapper>
        <Title>Nova refeição</Title>
      </Header>
      <ContentWrapper>
        <Text>creation form here</Text>
      </ContentWrapper>
    </Container>
  );
}
