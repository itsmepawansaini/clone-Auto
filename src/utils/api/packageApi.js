import axiosInstance from '../api';

export const getPackages = async () => {
    try {
        const response = await axiosInstance.get('/plan/');
        return response.data; 
    } catch (error) {
        console.error('Error fetching packages:', error);
        throw error;
    }
};