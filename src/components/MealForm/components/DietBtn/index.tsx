import React from 'react'
import { Bullet, Container, Label } from './styles'

interface Props {
  isSelected?: boolean
  type?: 'PRIMARY' | 'SECONDARY'
  text: string
  onPressFn?: () => void
}

const DietBtn = ({ text, isSelected = false, type = 'PRIMARY', onPressFn }: Props) => {
  return (
    <Container selected={isSelected} type={type} onPress={onPressFn} >
      <Bullet type={type} />
      <Label>{text}</Label>
    </Container >
  )
}

export default DietBtn
