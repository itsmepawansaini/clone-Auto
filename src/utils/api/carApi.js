import axiosInstance from "../api";

export const addCar = async (carData) => {
  try {
    const response = await axiosInstance.post("/user/car", carData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCars = async () => {
  try {
    const response = await axiosInstance.get("/cars/");
    return response.data;
  } catch (error) {
    return error;
  }
};
