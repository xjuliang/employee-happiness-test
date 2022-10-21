import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredFavorites = current(state).filter((p: Person) => p.id !== action.payload.id);
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredFavorites);
      return filteredFavorites;
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
