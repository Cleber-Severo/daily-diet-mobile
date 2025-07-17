import { ContentWrapper } from "@components/ContentWrapper";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Container, Description, DetailContainer, Header, Icon, IconWrapper, Name, TimeLabel, TimeText, Title } from "./styles";
import { StatusLabel } from "./components/StatusLabel";

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
        <DetailContainer>
          <Name>X-tudo</Name>
          <Description>Xis completo da lancheria do bairro</Description>

          <TimeLabel>Data e hora</TimeLabel>
          <TimeText>12/08/2022 às 20:00</TimeText>

          <StatusLabel type="SECONDARY" />
        </DetailContainer>
      </ContentWrapper>
    </Container>
  );
}
