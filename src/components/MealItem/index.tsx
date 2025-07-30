import { Meal } from "@screens/home/components/MealsSection/styles";
import { Container, Divider, Hour, Name, StatusIndicator } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Props {
  hour: string
  name: string
  id: string
  isOnDiet: boolean
}

export function MealItem({ hour, name, isOnDiet, id }: Props) {
  const navigation = useNavigation()

  return (
    <Container onPress={() => navigation.navigate('meal', { mealId: id })}>
      <Hour>{hour}</Hour>
      <Divider />
      <Name>{name}</Name>
      <StatusIndicator isOnDiet={isOnDiet} />
    </Container>
  );
}