import { Plus } from "phosphor-react-native";
import { Container, MealHeader, MealsList, Title } from "./styles";
import { Button } from "@components/Button";
import { SectionList, Text } from "react-native";
import { MealItem } from "@components/MealItem";
import { useNavigation } from "@react-navigation/native";

const mealsList = [
  {
    date: "12.08.22",
    data: [
      {
        mealId: '1',
        hour: "08:00",
        name: "Omelette",
        description: "Eggs, cheese and herbs.",
        isOnDiet: true
      },
      {
        mealId: '2',
        hour: "12:30",
        name: "Grilled Chicken",
        description: "Chicken with sweet potatoes.",
        isOnDiet: true
      },
      {
        mealId: '3',
        hour: "20:00",
        name: "Pizza",
        description: "4 cheese pizza slice.",
        isOnDiet: false
      },
    ],
  },
  {
    date: "13.08.22",
    data: [
      {
        mealId: '4',
        hour: "07:45",
        name: "Fruit Bowl",
        description: "Banana, papaya, and apple.",
        isOnDiet: true
      },
      {
        mealId: '5',
        hour: "13:00",
        name: "Steak and Rice",
        description: "Grilled beef with brown rice.",
        isOnDiet: true
      },
      {
        mealId: '6',
        hour: "18:30",
        name: "Burguer",
        description: "Beef burger with cheddar.",
        isOnDiet: false
      },
    ],
  },
  {
    date: "14.08.22",
    data: [
      {
        mealId: '7',
        hour: "09:00",
        name: "Pancakes",
        description: "Pancakes with honey and banana.",
        isOnDiet: false
      },
      {
        mealId: '8',
        hour: "12:15",
        name: "Salad Bowl",
        description: "Lettuce, tomato, tuna and quinoa.",
        isOnDiet: true
      },
      {
        mealId: '9',
        hour: "16:00",
        name: "Protein Shake",
        description: "Whey protein with almond milk.",
        isOnDiet: true
      },
      {
        mealId: '10',
        hour: "21:00",
        name: "Soup",
        description: "Vegetable soup with lentils.",
        isOnDiet: true
      },
    ],
  }
];

export function MealsSection() {
  const navigation = useNavigation()

  return (
    <Container>
      <Title>Refeições</Title>

      <Button
        title="Nova refeição"
        icon={<Plus size={18} color="#FFF" weight="bold" />}
        onPressFn={() => navigation.navigate('createMeal')}
      />

      <MealsList
        sections={mealsList}
        keyExtractor={(item) => item.mealId}
        renderItem={({ item }) => (
          <MealItem meal={item} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <MealHeader>{date}</MealHeader>
        )}
      />
    </Container>
  )
}