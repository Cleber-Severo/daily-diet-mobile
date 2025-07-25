import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface Props {
  stretch?: boolean;
}

export const Container = styled.View<Props>`
  ${({ stretch }) => stretch && `flex: 1;`}

  gap: 4px;
`;

export const StyledInput = styled(TextInput)`
  /* flex: 1; */
  /* min-height: 56px;
  max-height: 56px; */

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${theme.COLORS.gray_500};
  `}

  border-radius: 6px;
  padding: 14px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
