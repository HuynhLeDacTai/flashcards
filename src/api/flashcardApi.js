import instance from "./api";

export const getAllFlashcardsByUser = async (page) => {
  const response = await instance.get(`/flashcards/all/${page}`);
  return response?.data;
};

export const getCardDetail = async (id) => {
  const response = await instance.get(`/flashcards/lists/${id}`);
  return response?.data;
};

export const addFlashcard = async (flashcard) => {
  const response = await instance.post(`/flashcards/add-flashcard`, flashcard);
  return response?.data;
};

export const editFlashcard = async (id, data) => {
  await instance.put(`/flashcards/edit/${id}`, data);
};

export const deleteFlashcard = async (id) => {
  await instance.delete(`/flashcards/delete/${id}`);
};
