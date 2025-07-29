import React, { useState } from 'react'
import { ButtonGroup, Container, DateContainer, Label, SubmitContainer } from './styles'
import { InputForm } from './components/Input'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Button } from '@components/Button'
import DietBtn from './components/DietBtn'
import { useNavigation } from '@react-navigation/native'

const MealForm = ({ payload = {} }) => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState<Date | null>(null)
  const [isOnDiet, setIsOnDiet] = useState<Boolean | null>(null)

  const isEdit = Object.keys(payload).length

  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      mode: 'date',
      value: date || new Date(),
      onChange: (event, selectedDate) => {
        if (selectedDate) setDate(selectedDate)
      },
    })
  }

  const openTimePicker = () => {
    DateTimePickerAndroid.open({
      mode: 'time',
      is24Hour: true,
      value: time || new Date(),
      onChange: (event, selectedTime) => {
        if (selectedTime) setTime(selectedTime)
      },
    })
  }

  const formatDate = (date: Date | null) =>
    date ? date.toLocaleDateString('pt-BR') : ''

  const formatTime = (date: Date | null) =>
    date
      ? date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
      : ''

  const handleSubmit = () => {
    console.log(name, description, date, time, isOnDiet)

    console.log("isOnDiet:", isOnDiet)
    console.log("time:", time)
    console.log("date:", date)
    console.log("description:", description)
    console.log("name:", name)

    if (isEdit) {
      console.log('edition logic')
      return
    }

    navigation.navigate('createMealFeedback', {
      status: isOnDiet ? 'onDiet' : 'offDiet'
    })
  }

  return (
    <Container>
      <InputForm label='Nome' onChangeText={setName} />

      <InputForm
        label='Descrição'
        multiline
        numberOfLines={5}
        style={{ minHeight: 120, textAlignVertical: 'top' }}
        onChangeText={setDescription}
      />

      <DateContainer>
        <InputForm
          label='Data'
          value={formatDate(date)}
          onPressIn={openDatePicker}
          stretch
        />
        <InputForm
          label='Hora'
          value={formatTime(time)}
          onPressIn={openTimePicker}
          stretch
        />
      </DateContainer>

      <Label>Está dentro da dieta?</Label>
      <ButtonGroup>
        <DietBtn
          text='Sim'
          type='PRIMARY'
          isSelected={isOnDiet === true}
          onPressFn={() => setIsOnDiet(true)}
        />
        <DietBtn
          text='Não'
          type='SECONDARY'
          isSelected={isOnDiet === false}
          onPressFn={() => setIsOnDiet(false)}
        />
      </ButtonGroup>

      <SubmitContainer>
        <Button title='Cadastrar refeição' onPressFn={handleSubmit} />
      </SubmitContainer>
    </Container>
  )
}

export default MealForm
