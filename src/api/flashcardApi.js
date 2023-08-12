import axios from "axios";
import { API_FLASHCARDS_URL } from "../http/paths";
import { getLocalToken } from "../utils/apiUtils";
import instance from "./api";

const flashcard = axios.create({
  baseURL: API_FLASHCARDS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = getLocalToken();

export const getAllFlashcardsByUser = async () => {
  flashcard.defaults.headers["Authorization"] = `Bearer ${getToken}`;
  const response = await instance.get("/flashcards/all");
  return response.data;
};

export const getCardDetail = async (id) => {
  flashcard.defaults.headers["Authorization"] = `Bearer ${getToken}`;
  const response = await instance.get(`/flashcards/lists/${id}`);
  return response.data;
};
