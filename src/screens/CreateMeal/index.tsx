import { ContentWrapper } from "@components/ContentWrapper";
import { Container, Header, Icon, IconWrapper, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import MealForm from "@components/MealForm";

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
        <MealForm />
      </ContentWrapper>
    </Container>
  );
}
