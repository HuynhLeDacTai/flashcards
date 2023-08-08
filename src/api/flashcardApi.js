import axios from "axios";
import { API_FLASHCARDS_URL } from "../http/paths";

const token = localStorage.getItem("token");

const flashcard = axios.create({
  baseURL: API_FLASHCARDS_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const createAuthorizedRequest = (authToken) => {
  return flashcard.interceptors.request.use((config) => {
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    return config;
  });
};

export const getAllFlashcardsByUser = () => {};
