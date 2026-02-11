import { create } from "zustand";
import {  checkSession } from "../utils/api/userApi"; //
 
const useAuthStore = create((set) => ({
  session: [],
  user: [],
  loading: false,
  error: null,

  // userProfile: async (data) => {
  //   set({ error: null });
  //   try {
  //     const res = await userProfile(data);
  //     set({ user: res?.data?.user });
  //   } catch (error) {
  //     set({ error: error.message });
  //   }
  // },

  checkSession: async () => {
    set({ loading: true, error: null });
    try {
      const res = await checkSession();
      set({ session: res?.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useAuthStore;
