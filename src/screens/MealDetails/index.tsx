import { ContentWrapper } from "@components/ContentWrapper";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { Actions, Container, ContentScroll, DeleteBtn, DeleteIcon, DeleteTitle, Description, DetailContainer, EditBtn, EditIcon, EditTitle, Header, Icon, IconWrapper, Name, TimeLabel, TimeText, Title } from "./styles";
import { StatusLabel } from "./components/StatusLabel";
import { useCallback, useState } from "react";
import { Button } from "@components/Button";
import { PencilSimpleLineIcon, Trash } from "phosphor-react-native";
import DeleteAlert from "./components/DeleteAlert";
import { mealsGetItem } from "@storage/meals/mealsGetItem";
import { MealListStorage, MealStorage } from "src/@types/meal";

interface RouteParams {
  mealId: string
}

export function MealDetails() {
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
  }); const [modalVisible, setModalVisible] = useState(false);

  const createTwoButtonAlert = () => setModalVisible(true)

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
            <Name>{meal.name}</Name>
            <Description>{meal.description}</Description>

            <TimeLabel>Data e hora</TimeLabel>
            <TimeText>{meal.date} às {meal.hour}</TimeText>

            <StatusLabel type={meal.isOnDiet ? 'PRIMARY' : 'SECONDARY'} />
          </DetailContainer>
        </ContentScroll>

        <DeleteAlert modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <Actions>
          <Button
            title="Editar refeição"
            icon={<PencilSimpleLineIcon color={"#FFF"} size={18} />}
            onPressFn={() => navigation.navigate('editMeal')}
          />
          <Button
            title="Excluir refeição"
            onPressFn={createTwoButtonAlert}
            icon={<Trash color={'#000'} size={18} />}
            variant="OUTLINED"
          />
        </Actions>
      </ContentWrapper>
    </Container>
  );
}
