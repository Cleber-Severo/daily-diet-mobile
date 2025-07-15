import { ButtonIconTypeStyleProps } from "@screens/home/components/StatisticsBtn/styles";
import { ArrowLeftIcon } from "phosphor-react-native";
import { View } from "react-native";
import styled from "styled-components/native";

type ContainerProps = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(View)<ContainerProps>`
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light)};

  flex: 1;
  padding-top: 20px;
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 50px;
  transform: translateY(-12px); /* Vertically center it, adjust if needed */
`;

type HeaderProps = {
  type: ButtonIconTypeStyleProps;
};

export const Header = styled.View<HeaderProps>`
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light)};

  padding: 38px 24px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
`;

export const Icon = styled(ArrowLeftIcon).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.gray_100,
  weight: "regular",
}))``;
