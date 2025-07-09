import { Text } from "react-native";
import { CardWrapper, Container, MealSplitContainer, Title } from "./styles";
import { ContentWrapper } from "@components/ContentWrapper";
import { Card } from "@components/Card";

export function Content() {
  return (
    <ContentWrapper>
      <Container>
        <Title>Estastisticas Gerais</Title>

        <Card amount={22} description="melhor sequência de pratos dentro da dieta" />
        <Card amount={209} description="refeições registradas" />

        <MealSplitContainer>
          <CardWrapper>
            <Card amount={99} description="refeições dentro da dieta" type="PRIMARY" />
          </CardWrapper>
          <CardWrapper>
            <Card amount={209} description="refeições fora da dieta" type="SECONDARY" />
          </CardWrapper>
        </MealSplitContainer>
      </Container>
    </ContentWrapper>
  );
}
