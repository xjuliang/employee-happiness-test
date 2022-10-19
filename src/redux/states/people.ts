import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  category: "",
  "category-image": "",
  company: "",
  "company-image": "",
  levelOfHappiness: 0,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState: localStorage.getItem("people")
    ? JSON.parse(localStorage.getItem("people") as string)
    : initialState,
});
