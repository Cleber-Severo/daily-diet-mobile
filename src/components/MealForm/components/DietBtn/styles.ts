import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

interface Props {
  type: "PRIMARY" | "SECONDARY";
  selected?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type, selected }) => {
    if (!selected) return theme.COLORS.gray_600;

    return type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light;
  }};
  border: 1px solid transparent;
  border-radius: 10px;
  border-color: ${({ theme, type, selected }) => {
    if (!selected) return theme.COLORS.white;

    return type === "PRIMARY" ? theme.COLORS.green_dark : theme.COLORS.red_dark;
  }};
  color: ${({ theme }) => theme.COLORS.gray_700};

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 16px 28px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.gray_100};
  `}
`;

export const Bullet = styled.View<Props>`
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_dark : theme.COLORS.red_dark)};

  border-radius: 50%;

  width: 10px;
  height: 10px;
`;
