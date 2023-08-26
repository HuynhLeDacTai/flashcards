import instance from "./api";

export const getAllTest = async () => {
  const response = await instance.get(`/test/all`);
  return response?.data;
};

export const getAllQuestionByTestID = async (id) => {
  const response = await instance.get(`/test/all/${id}`);
  return response?.data;
};
