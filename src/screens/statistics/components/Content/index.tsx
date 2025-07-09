import { Text } from "react-native";
import { Container, MealSplitContainer } from "./styles";
import { ContentWrapper } from "@components/ContentWrapper";
import { Card } from "@components/Card";

export function Content() {
  return (
    <ContentWrapper>
      <Container>
        <Text>Estastisticas Gerais</Text>

        <Card amount={22} description="melhor sequência de pratos dentro da dieta" />
        <Card amount={209} description="refeições registradas" />

        <MealSplitContainer>
          <Card amount={209} description="refeições registradas" type="PRIMARY" />
          <Card amount={209} description="refeições registradas" type="SECONDARY" />
        </MealSplitContainer>
      </Container>
    </ContentWrapper>
  );
}
