import axiosInstance from "./axiosInstance";

export const getUsers = async () => {
  const result = await axiosInstance.get("/users");
  return result.data;
};

export const getUsersThroughCallback = () => {
  return axiosInstance.get("/users").then((res) => {
    return res.data;
  });
};

export const postUser = async ({ name, age }) => {
  const result = await axiosInstance.post("/users", {
    name,
    age,
  });
  return result.data;
};

export const updateUser = async ({ _id, name, age }) => {
  const result = await axiosInstance.put(`/users/${_id}`, {
    name,
    age,
  });
  return result.data;
};

export const deleteUser = async ({ _id }) => {
  const result = axiosInstance.delete(`/users/${_id}`);
  return result.data;
};
