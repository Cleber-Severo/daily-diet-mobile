import { Modal } from "react-native";
import styled from "styled-components/native";

export const Container = styled(Modal).attrs({
  transparent: true,
  animationType: "fade",
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TriggerButton = styled.TouchableOpacity`
  background-color: #333;
  padding: 12px 24px;
  border-radius: 8px;
`;

export const TriggerButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  /* font-weight: 600; */
  text-align: center;

  margin-bottom: 32px;
  margin-top: 16px;

  width: 250px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 12px;

  width: 100%;
`;
