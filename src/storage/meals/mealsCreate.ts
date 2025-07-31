import { IMeal } from "src/@types/meal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { v4 as uuidv4 } from "uuid";
import { mealsGetAll } from "./mealsGetAll";

export async function mealsCreate(meal: IMeal) {
  try {
    const mealsDataRaw = await mealsGetAll(true);
    const mealsData = Array.isArray(mealsDataRaw) ? mealsDataRaw : [];

    const newMeal = {
      id: uuidv4(),
      hour: meal.time,
      date: meal.date,
      name: meal.name,
      description: meal.description,
      isOnDiet: meal.isOnDiet,
    };

    const storage = JSON.stringify([...mealsData, newMeal]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    console.log("🚀 ~ mealsCreate ~ error:", error);
    throw new Error("Erro ao salvar refeição.");
  }
}
