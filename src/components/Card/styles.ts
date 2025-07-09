import styled from "styled-components/native";

export type CardColors = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: CardColors;
};

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.green_light
      : type === "SECONDARY"
      ? theme.COLORS.red_light
      : theme.COLORS.gray_600};

  border-radius: 8px;

  justify-content: center;
  align-items: center;

  padding: 24px;
`;

export const MainText = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 32px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_200};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
`;
