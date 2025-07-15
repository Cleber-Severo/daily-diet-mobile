import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateMeal } from "@screens/CreateMeal";
import { Home } from "@screens/home";
import { MealDetails } from "@screens/MealDetails";
import { Statistics } from "@screens/statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="createMeal" component={CreateMeal} />
      <Screen name="meal" component={MealDetails} />
    </Navigator>
  );
}
