import axiosInstance from "../api";

export const getorders = async () => {
    try {
        const response = await axiosInstance.get("/orders/");


        return response.data;
    } catch (error) {
        console.error("Get orders error:", error);
        throw error;
    }
}
export const createOrder = async (orderData) => {
    try {
        const response = await axiosInstance.post("/orders/create/", orderData);
        return response.data;
    } catch (error) {
        console.error("Create order error:", error);
        throw error;
    }
};
