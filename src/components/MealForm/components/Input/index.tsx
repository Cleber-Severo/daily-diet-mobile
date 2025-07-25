import { TextInput, TextInputProps } from 'react-native'
import { Container, Label, StyledInput } from './styles'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  label?: string
  stretch?: boolean
}

export function InputForm({ inputRef, label, stretch = false, ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container stretch={stretch}>
      {label && <Label>{label}</Label>}
      <StyledInput
        ref={inputRef}
        {...rest}
        placeholderTextColor={COLORS.gray_100}
      />
    </Container>
  )
}
