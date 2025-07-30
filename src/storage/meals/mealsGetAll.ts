import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealListStorage } from "src/@types/meal";

export async function mealsGetAll() {
  try {
    const data = await AsyncStorage.getItem(MEALS_COLLECTION);
    const meals: MealListStorage[] = data ? JSON.parse(data) : [];

    return meals;
  } catch (error) {
    console.log("gel all error: ", error);

    throw new Error();
  }
}
