import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light)};

  padding: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
`;

export const MainPercentage = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 32px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_200};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.green_dark : theme.COLORS.red_dark,
  weight: "regular",
}))``;
