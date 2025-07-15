import { Meal } from "@screens/home/components/MealsSection/styles";
import { Container, Divider, Hour, Name, StatusIndicator } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Props {
  meal: Meal
}

export function MealItem({ meal: { hour, name, isOnDiet } }: Props) {
  const navigation = useNavigation()

  return (
    <Container onPress={() => navigation.navigate('meal', { mealId: '' })}>
      <Hour>{hour}</Hour>
      <Divider />
      <Name>{name}</Name>
      <StatusIndicator isOnDiet={isOnDiet} />
    </Container>
  );
}