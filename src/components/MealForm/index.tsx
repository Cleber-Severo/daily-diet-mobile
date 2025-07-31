import React, { useState } from 'react'
import { ButtonGroup, Container, DateContainer, Label, SubmitContainer } from './styles'
import { InputForm } from './components/Input'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Button } from '@components/Button'
import DietBtn from './components/DietBtn'
import { useNavigation } from '@react-navigation/native'

import { mealsGetAll } from '@storage/meals/mealsGetAll'
import { mealsCreate } from '@storage/meals/mealsCreate'
import { MealStorage } from 'src/@types/meal'
import { ForkKnife, PencilSimpleLineIcon } from 'phosphor-react-native'
import { measlEdit } from '@storage/meals/mealsEdit'


type MealFormProps = Partial<MealStorage>

const MealForm = ({ id, description, hour, isOnDiet, name, date }: MealFormProps) => {
  const isEdit = !!id

  const navigation = useNavigation()

  const parsedTime = (() => {
    if (!isEdit || !hour || !date) return null;

    const [day, month, year] = date.split('.')
    const [hours, minutes] = hour.split(':')

    const dateTime = new Date(
      Number(`20${year}`), // assuming year is like '24'
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes)
    )

    return isNaN(dateTime.getTime()) ? null : dateTime;
  })();

  const parsedDate = (() => {
    if (!isEdit || !date) return null;

    const [day, month, year] = date.split('.');
    const dateObj = new Date(
      Number(`20${year}`), // '24' => 2024
      Number(month) - 1,
      Number(day)
    );

    return isNaN(dateObj.getTime()) ? null : dateObj;
  })();


  const [nameIput, setName] = useState(name || '')
  const [descriptionInput, setDescription] = useState(description || '')
  const [dateInput, setDate] = useState<Date | null>(parsedDate);
  const [timeInput, setTime] = useState<Date | null>(isEdit ? parsedTime : null);
  const [isOnDietInput, setIsOnDiet] = useState<boolean | null>(isEdit ? isOnDiet ?? null : null);

  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      mode: 'date',
      value: dateInput || new Date(),
      onChange: (event, selectedDate) => {
        if (selectedDate) setDate(selectedDate)
      },
    })
  }

  const openTimePicker = () => {
    DateTimePickerAndroid.open({
      mode: 'time',
      is24Hour: true,
      value: timeInput || new Date(),
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
    if (!date || !timeInput) {
      return
    }

    const padZero = (num: number) => String(num).padStart(2, '0')

    let formattedDate
    let formattedTime

    if (dateInput && timeInput) {
      const padZero = (num: number) => String(num).padStart(2, '0');

      formattedDate = `${padZero(dateInput.getDate())}.${padZero(dateInput.getMonth() + 1)}.${String(dateInput.getFullYear()).slice(-2)}`;
      formattedTime = `${padZero(timeInput.getHours())}:${padZero(timeInput.getMinutes())}`;

      console.log('edition logic', formattedDate, formattedTime);
    }

    if (isEdit) {
      console.log('edition logic')
      await measlEdit({
        name: nameIput,
        description: descriptionInput,
        date: formattedDate,
        hour: formattedTime, // <- aqui está o fix
        isOnDiet: isOnDietInput ?? false,
        id
      })

      navigation.navigate('home')

      return
    }
    const mealPayload = {
      name: nameIput,
      description: descriptionInput,
      date: formattedDate,
      time: formattedTime,
      isOnDiet: isOnDietInput ?? false,
    }

    await mealsCreate(mealPayload)

    navigation.navigate('createMealFeedback', {
      status: isOnDietInput ? 'onDiet' : 'offDiet'
    })
  }

  return (
    <Container>
      <InputForm label='Nome' value={nameIput} onChangeText={setName} />

      <InputForm
        label='Descrição'
        value={descriptionInput}
        multiline
        numberOfLines={5}
        style={{ minHeight: 120, textAlignVertical: 'top' }}
        onChangeText={setDescription}
      />

      <DateContainer>
        <InputForm
          label='Data'
          value={formatDate(dateInput)}
          onPressIn={openDatePicker}
          stretch
        />
        <InputForm
          label='Hora'
          value={formatTime(timeInput)}
          onPressIn={openTimePicker}
          stretch
        />
      </DateContainer>

      <Label>Está dentro da dieta?</Label>
      <ButtonGroup>
        <DietBtn
          text='Sim'
          type='PRIMARY'
          isSelected={isOnDietInput === true}
          onPressFn={() => setIsOnDiet(true)}
        />
        <DietBtn
          text='Não'
          type='SECONDARY'
          isSelected={isOnDietInput === false}
          onPressFn={() => setIsOnDiet(false)}
        />
      </ButtonGroup>

      <SubmitContainer>
        <Button
          title={isEdit ? 'Editar refeição' : 'Cadastrar refeição'}
          onPressFn={handleSubmit}
          icon={
            isEdit
              ? <PencilSimpleLineIcon color={"#FFF"} size={18} />
              : <ForkKnife color={"#FFF"} size={18} />
          }
        />
      </SubmitContainer>
    </Container>
  )
}

export default MealForm
