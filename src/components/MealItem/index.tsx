import { Meal } from "@screens/home/components/MealsSection/styles";
import { Container, Divider, Hour, Name, StatusIndicator } from "./styles";

interface Props {
  meal: Meal
}

export function MealItem({ meal: { hour, name, isOnDiet } }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Divider />
      <Name>{name}</Name>
      <StatusIndicator isOnDiet={isOnDiet} />
    </Container>
  );
}