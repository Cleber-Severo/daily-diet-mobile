import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealListStorage, MealStorage } from "src/@types/meal";

export async function mealsGetAll(rawData = false) {
  try {
    const data = await AsyncStorage.getItem(MEALS_COLLECTION);

    let meals: MealStorage[] = [];

    if (data) {
      const parsed = JSON.parse(data);

      if (Array.isArray(parsed)) {
        meals = parsed;
      } else {
        console.warn("mealsGetAll: parsed data is not an array", parsed);
        return [];
      }
    }

    if (rawData) return data;

    const mealsData = meals.reduce((acc: MealListStorage[], current: MealStorage) => {
      const date = current.date ?? ""; // Garante que não seja undefined

      const existingIndex = acc.findIndex((item) => item.date === date);

      existingIndex >= 0 ? acc[existingIndex].data.push(current) : acc.push({ date, data: [current] });

      return acc;
    }, []);

    return mealsData || [];
  } catch (error) {
    console.log("get all error: ", error);
    throw new Error("Failed to get all meals");
  }
}
