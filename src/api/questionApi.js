import instance from "./api";

export const addQuestion = async (question) => {
  const response = await instance.post(`/question/add-data`, question);
  return response?.data;
};

export const addMulQuestion = async (questions) => {
  const response = await instance.post(
    `/question/add-multiple-data`,
    questions
  );
  return response?.data;
};
