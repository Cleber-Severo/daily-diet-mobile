import { Button } from '@components/Button';
import { Dispatch, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonRow, Container, ModalContent, Overlay, Title } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mealsDelete } from '@storage/meals/mealsDelete';

interface Props {
  modalVisible: boolean
  setModalVisible: Dispatch<React.SetStateAction<boolean>>
}

interface RouteParams {

}

export default function DeleteAlert({ modalVisible, setModalVisible }: Props) {
  const navigation = useNavigation()
  const route = useRoute()
  const { mealId } = route.params as RouteParams

  const handleDeleteMeal = async () => {
    setModalVisible(false);

    await mealsDelete(mealId)

    navigation.navigate('home')
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Container
      visible={modalVisible}
      onRequestClose={handleCancel}
    >
      <Overlay>
        <ModalContent>
          <Title>
            Deseja realmente excluir o registro da refeição?
          </Title>

          <ButtonRow>
            <Button customWidth='50%' title='Cancelar' variant='OUTLINED' onPressFn={handleCancel} />
            <Button customWidth='50%' title='Sim, excluir' onPressFn={handleDeleteMeal} />
          </ButtonRow>
        </ModalContent>
      </Overlay>

    </Container>
  );
}

// Styles

