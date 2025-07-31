import React, { useState } from 'react'
import { ButtonGroup, Container, DateContainer, Label, SubmitContainer } from './styles'
import { InputForm } from './components/Input'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Button } from '@components/Button'
import DietBtn from './components/DietBtn'
import { useNavigation } from '@react-navigation/native'

import { mealsGetAll } from '@storage/meals/mealsGetAll'
import { mealsCreate } from '@storage/meals/mealsCreate'


const MealForm = ({ payload = {} }) => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState<Date | null>(null)
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null)

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

  const handleSubmit = async () => {
    const mealStorage = await mealsGetAll()

    if (!date || !time) {
      return
    }

    const padZero = (num: number) => String(num).padStart(2, '0')

    const formattedDate = `${padZero(date.getDate())}.${padZero(date.getMonth() + 1)}.${String(date.getFullYear()).slice(-2)}`
    const formattedTime = `${padZero(time.getHours())}:${padZero(time.getMinutes())}`

    const mealPayload = {
      name,
      description,
      date: formattedDate,
      time: formattedTime,
      isOnDiet: isOnDiet ?? false,
    }

    if (isEdit) {
      console.log('edition logic')
      return
    }

    await mealsCreate(mealPayload)

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
