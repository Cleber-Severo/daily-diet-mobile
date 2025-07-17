import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { VariantBtnProps } from ".";

interface Props {
  variant?: VariantBtnProps;
  stretch?: boolean;
  customWidth?: string;
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, variant }) => (variant === "FILLED" ? theme.COLORS.gray_200 : theme.COLORS.white)};
  border: 1px solid ${({ theme, variant }) => (variant === "FILLED" ? "transparent" : theme.COLORS.gray_200)};
  border-radius: 6px;

  ${({ stretch }) => stretch && `flex: 1;`}
  ${({ customWidth }) => customWidth && `width: ${customWidth};`}

  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;

  min-height: 56px;
  max-height: 56px;
`;

export const Title = styled.Text<Props>`
  color: ${({ theme, variant }) => (variant === "FILLED" ? theme.COLORS.white : theme.COLORS.gray_200)};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
`;
