import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonContainer, Container, Description, FeedBackImg, StatusType, Title } from "./style";
import { Button } from "@components/Button";

import OnDietImg from "@assets/on_diet_img_src.png";
import OffDietImg from "@assets/off_diet_img_src.png";



type RouteParams = {
  status: StatusType;
};

const pageContent = {
  'onDiet': {
    title: 'Continue assim!',
    description: 'Você continua dentro da dieta. Muito bem!',
    src: OnDietImg,
  },
  'offDiet': {
    title: 'Que pena!',
    description: 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!',
    src: OffDietImg,
  },
}

export function CreateMealFeedback() {
  const navigation = useNavigation()
  const route = useRoute()
  const { status } = route.params as RouteParams

  return (
    <Container>
      <Title status={status}>{pageContent[status].title}</Title>
      <Description>{pageContent[status].description}</Description>

      <FeedBackImg source={pageContent[status].src} />

      <ButtonContainer>
        <Button title="Ir para a página inicial" onPressFn={() => navigation.navigate('home')} />
      </ButtonContainer>
    </Container>
  )
}