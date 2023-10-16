import {createContext} from 'react';

type themeProps = {
  theme: string;
  changeTheme: () => void;
};

// export const ThemeContext = createContext<themeProps | null>(null);
