import { ContentWrapper } from "@components/ContentWrapper";
import { Container, Header, Icon, IconWrapper, Title } from "./styles";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Alert, Text } from "react-native";
import MealForm from "@components/MealForm";
import { useCallback, useState } from "react";
import { MealStorage } from "src/@types/meal";
import { mealsGetItem } from "@storage/meals/mealsGetItem";

interface RouteParams {
  mealId: string
}

export function EditMeal() {
  const navigation = useNavigation();
  const route = useRoute()
  const { mealId } = route.params as RouteParams

  const [meal, setMeal] = useState<MealStorage>({
    id: '',
    name: '',
    description: '',
    date: '',
    hour: '',
    isOnDiet: false,
  });

  const fetchMeal = async () => {
    const mealData = await mealsGetItem(mealId);

    if (mealData) {
      setMeal(mealData);
    } else {
      Alert.alert("Erro", "Refeição não encontrada.");
      navigation.goBack();
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeal()
    }, [mealId])
  )
  return (
    <Container>
      <Header >
        <IconWrapper onPress={() => navigation.navigate("home")}>
          <Icon />
        </IconWrapper>
        <Title>Editar refeição</Title>
      </Header>
      <ContentWrapper>
        {meal.id && <MealForm {...meal} />}
      </ContentWrapper>
    </Container>
  );
}
