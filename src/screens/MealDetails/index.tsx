import { ContentWrapper } from "@components/ContentWrapper";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Actions, Container, ContentScroll, DeleteBtn, DeleteIcon, DeleteTitle, Description, DetailContainer, EditBtn, EditIcon, EditTitle, Header, Icon, IconWrapper, Name, TimeLabel, TimeText, Title } from "./styles";
import { StatusLabel } from "./components/StatusLabel";
import { useState } from "react";
import { Button } from "@components/Button";
import { PencilSimpleLineIcon, Trash } from "phosphor-react-native";
import DeleteAlert from "./components/DeleteAlert";

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const createTwoButtonAlert = () => setModalVisible(true)

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
