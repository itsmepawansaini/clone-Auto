import axiosInstance from "../api";

export const loginUser = async (phone, password) => {
    try {
        const response = await axiosInstance.post("/user/login/", { phone, password });
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const sendOtp = async (data) => {
    try {
        const response = await axiosInstance.post("/user/send-otp", data);
        return response.data;
    } catch (error) {
        console.error("Send OTP error:", error);
        throw error;
    }
};

export const verifyOtp = async (phone, otp) => {
    try {
        const response = await axiosInstance.post("/user/verify-otp", { phone, otp });
        return response.data;
    } catch (error) {
        console.error("OTP verification error:", error);
        throw error;
    }
};
export const logoutUser = async () => {
    try {
        const response = await axiosInstance.post("/user/logout/");
        return response.data;
    } catch (error) {

        console.error("Logout error:", error);
        throw error;
    }
};
export const checkSession = async () => {
    try {
        const response = await axiosInstance.get("/user/session/"); 
        return response.data;
    } catch (error) {
        console.error("Session check error:", error);
        throw error;
    }
};

export const sentLoginOtp = async (phone) => {
    try {
        const response = await axiosInstance.post("/user/send-login-otp", { phone });
        return response.data;
    } catch (error) {

        console.error("Send login OTP error:", error);
        throw error;
    }
};

export const verifyLoginOtp = async (phone, otp) => {
    try {
        const response = await axiosInstance.post("/user/verify-login-otp", { phone, otp });
        return response.data;
    } catch (error) {
        console.error("Login OTP verification error:", error);
        throw error;
    }
};






