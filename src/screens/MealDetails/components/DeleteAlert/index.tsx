import { Button } from '@components/Button';
import { Dispatch, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonRow, Container, ModalContent, Overlay, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
  modalVisible: boolean
  setModalVisible: Dispatch<React.SetStateAction<boolean>>
}

export default function DeleteAlert({ modalVisible, setModalVisible }: Props) {

  const navigation = useNavigation()

  const handleDeleteMeal = () => {
    console.log('MEAL DELETED HERE');

    setModalVisible(false);
    // async delete fn here
    navigation.navigate('home')
  };

  const handleCancel = () => {
    console.log('Cancel Pressed');
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

