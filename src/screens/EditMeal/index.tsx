import { ContentWrapper } from "@components/ContentWrapper";
import { Container, Header, Icon, IconWrapper, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function EditMeal() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header >
        <IconWrapper onPress={() => navigation.navigate("home")}>
          <Icon />
        </IconWrapper>
        <Title>Editar refeição</Title>
      </Header>
      <ContentWrapper>
        <Text>Edit form here</Text>
      </ContentWrapper>
    </Container>
  );
}
