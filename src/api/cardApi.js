import instance from "./api";

export const addCard = async (card) => {
  const response = await instance.post(`/card/add`, card);
  return response?.data;
};

export const editCard = async (id, newCard) => {
  const response = await instance.put(`/card/edit/${id}`, newCard);
  return response?.data;
};

export const deleteCard = async (id) => {
  await instance.delete(`/card/delete/${id}`);
};
