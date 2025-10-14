"use client"

import { create } from "zustand";

const useThemeStore = create((set) => ({
    isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")) || false,
    toggleTheme: () =>
        set((state) => {
            const newTheme = !state.isDarkMode;
            localStorage.setItem("isDarkMode", JSON.stringify(newTheme));
            return { isDarkMode: newTheme };
        }),
}));
export default useThemeStore;
