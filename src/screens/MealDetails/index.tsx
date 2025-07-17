import { ContentWrapper } from "@components/ContentWrapper";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Actions, Container, ContentScroll, DeleteBtn, DeleteIcon, DeleteTitle, Description, DetailContainer, EditBtn, EditIcon, EditTitle, Header, Icon, IconWrapper, Name, TimeLabel, TimeText, Title } from "./styles";
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
        <ContentScroll
          contentContainerStyle={{
            paddingBottom: 32,
            paddingTop: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <DetailContainer>
            <Name>X-tudo</Name>
            <Description>Xis completo da lancheria do bairro</Description>

            <TimeLabel>Data e hora</TimeLabel>
            <TimeText>12/08/2022 às 20:00</TimeText>

            <StatusLabel type="SECONDARY" />
          </DetailContainer>
        </ContentScroll>

        <Actions>
          <EditBtn>
            <EditIcon />
            <EditTitle>Editar refeição</EditTitle>
          </EditBtn>
          <DeleteBtn>
            <DeleteIcon />
            <DeleteTitle>Excluir refeição</DeleteTitle>
          </DeleteBtn>
        </Actions>
      </ContentWrapper>
    </Container>
  );
}
