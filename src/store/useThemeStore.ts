import { create } from 'zustand';

export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  textMain: string;
  textScreen: string;
};

export type Theme = {
  id: string;
  name: string;
  colors: ThemeColors;
  borderRadius: string;
};

interface ThemeState {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  updateThemeColors: (colors: Partial<ThemeColors>) => void;
}

const defaultTheme: Theme = {
  id: 'sunset-vibes',
  name: 'Sunset Vibes',
  colors: {
    primary: '#FF6B6B',
    secondary: '#FFE66D',
    accent: '#4ECDC4',
    surface: '#F7F9FC',
    textMain: '#2D3436',
    textScreen: '#FFFFFF',
  },
  borderRadius: '1.5rem',
};

export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: defaultTheme,
  setTheme: (theme) => {
    set({ currentTheme: theme });
    applyThemeToDocument(theme);
  },
  updateThemeColors: (colors) => {
    set((state) => {
      const newTheme = {
        ...state.currentTheme,
        colors: { ...state.currentTheme.colors, ...colors },
      };
      applyThemeToDocument(newTheme);
      return { currentTheme: newTheme };
    });
  },
}));

// Helper to update CSS variables immediately
const applyThemeToDocument = (theme: Theme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  
  root.style.setProperty('--primary', theme.colors.primary);
  root.style.setProperty('--secondary', theme.colors.secondary);
  root.style.setProperty('--accent', theme.colors.accent);
  root.style.setProperty('--surface', theme.colors.surface);
  root.style.setProperty('--text-main', theme.colors.textMain);
  root.style.setProperty('--text-screen', theme.colors.textScreen);
  root.style.setProperty('--radius', theme.borderRadius);
};
