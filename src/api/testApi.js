import instance from "./api";

export const getAllTest = async () => {
  const response = await instance.get(`/test/all`);
  return response?.data;
};
