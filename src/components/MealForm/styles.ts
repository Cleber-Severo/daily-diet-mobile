import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  flex: 1;
  gap: 24px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const SubmitContainer = styled.View`
  justify-content: flex-end;
  padding-bottom: 20px;
  flex: 1;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
